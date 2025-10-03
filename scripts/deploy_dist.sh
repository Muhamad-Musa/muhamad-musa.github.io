#!/usr/bin/env bash
set -euo pipefail

# Usage: ./scripts/deploy_dist.sh [remote_repo_url] [branch]
# Defaults:
REMOTE=${1:-https://github.com/Muhamad-Musa/muhamad-musa.github.io.git}
BRANCH=${2:-main}

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="$ROOT_DIR/docs/.vuepress/dist"

echo "Building docs..."
cd "$ROOT_DIR"
# Build docs (fails if vuepress not installed)
npm run docs:build

if [ ! -d "$DIST_DIR" ]; then
  echo "Error: dist directory not found at $DIST_DIR"
  exit 1
fi

# Create a temporary clone
TMP_DIR=$(mktemp -d)

echo "Preparing temporary repository in $TMP_DIR"

# Initialize a new git repo in tmp, copy files there, and push to remote
cd "$TMP_DIR"

git init

git remote add origin "$REMOTE"

git checkout -b "$BRANCH"

# Copy dist contents into tmp
cp -r "$DIST_DIR"/* .

# If there's a CNAME file at project root, copy it too
if [ -f "$ROOT_DIR/CNAME" ]; then
  cp "$ROOT_DIR/CNAME" .
fi

# Commit and push
if [ -n "$(git status --porcelain)" ]; then
  git add --all
  git commit -m "Deploy personal page: $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
  echo "Pushing to $REMOTE $BRANCH..."
  git push --force origin "$BRANCH"
else
  echo "No changes to deploy."
fi

# Cleanup
rm -rf "$TMP_DIR"

echo "Deployment complete."
