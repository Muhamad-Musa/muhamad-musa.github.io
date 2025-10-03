<template>
  <div class="personal-website">
    <!-- Particles Container -->
    <div class="particles-container" ref="particlesContainer"></div>
    
    <!-- Hero Section -->
    <div class="custom-hero">
      <div class="hero-profile-image">
        <img src="/assets/image.png" alt="Muhamad Barzani Photo" />
      </div>
      <h1>Muhamad Barzani</h1>
      <div class="typewriter-container">
        <span class="typewriter-text" ref="typewriterText"></span>
        <span class="cursor">|</span>
      </div>
      
      <!-- Social Links -->
      <div class="social-links">
        <a href="https://www.linkedin.com" target="_blank" class="social-link linkedin" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" class="social-link instagram" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
      </div>

      <!-- Projects Button -->
      <div class="hero-actions">
        <a href="/projects" class="action-button primary">View My Projects</a>
      </div>
    </div>

    <!-- About Section -->
    <section id="about-me">
      <h2>About Me</h2>
      <div class="about-content">
        <p>Hello! I'm Muhamad Barzani, a creative and detail-oriented software engineer with experience in <strong>Flutter</strong>, <strong>Java</strong>, <strong>C++</strong>, and <strong>front-end web development</strong>. I also have a background in <strong>3D graphics design</strong>, from commercial projects to environment modeling.</p>
        <p>I'm passionate about technology, problem-solving, and continuous learning. I enjoy building apps, designing databases, and exploring new technologies that push creativity and performance forward.</p>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills-interests">
      <h2>Skills & Interests</h2>
      <div class="skills">
        <span class="skill-tag">Flutter</span>
        <span class="skill-tag">Java</span>
        <span class="skill-tag">C++</span>
        <span class="skill-tag">Web Development</span>
        <span class="skill-tag">Game Development</span>
        <span class="skill-tag">3D Graphics Design</span>
        <span class="skill-tag">Database Design</span>
        <span class="skill-tag">Problem Solving</span>
        <span class="skill-tag">Critical Thinking</span>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact">
      <h2>Contact Me</h2>
      <p>For more information, contact me.</p>
      <div class="contact-info">
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fab fa-github"></i>
          </div>
          <div class="contact-content">
            <strong>GitHub</strong>
            <a href="https://github.com/muhamad-musa" target="_blank">@muhamad-musa</a>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fas fa-globe"></i>
          </div>
          <div class="contact-content">
            <strong>Website</strong>
            <a href="https://muhamad-musa.github.io" target="_blank">muhamad-musa.github.io</a>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <div class="contact-content">
            <strong>Email</strong>
            <a href="mailto:barzandolamari3@gmail.com">barzandolamari3@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'PersonalWebsite',
  setup() {
    const particlesContainer = ref(null)
    const typewriterText = ref(null)

    const createParticles = () => {
      if (!particlesContainer.value) return
      
      const particleCount = 25
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        
        // Random positioning and timing
        particle.style.left = Math.random() * 100 + '%'
        particle.style.animationDelay = Math.random() * 5 + 's'
        particle.style.animationDuration = (Math.random() * 5 + 8) + 's'
        
        // Fixed size for visibility
        const size = Math.random() * 4 + 4
        particle.style.width = size + 'px'
        particle.style.height = size + 'px'
        
        particlesContainer.value.appendChild(particle)
      }
    }

    const typeWriter = () => {
      if (!typewriterText.value) return
      
      const text = "Software Engineer | Frontend Developer | 3D Designer"
      let index = 0

      const type = () => {
        if (index < text.length) {
          typewriterText.value.textContent += text.charAt(index)
          index++
          setTimeout(type, 100)
        }
      }

      // Start typing after a short delay
      setTimeout(type, 1000)
    }

    onMounted(() => {
      createParticles()
      typeWriter()
    })

    return {
      particlesContainer,
      typewriterText
    }
  }
}
</script>