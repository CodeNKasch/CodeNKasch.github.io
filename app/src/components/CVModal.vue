<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const clickCount = ref(0);
const clickTimer = ref(null);

// Konami code easter egg: up, up, down, down, left, right, left, right, b, a
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
const userInput = ref([]);

// Triple click on name easter egg
const handleNameClick = () => {
  clickCount.value++;

  if (clickTimer.value) {
    clearTimeout(clickTimer.value);
  }

  if (clickCount.value === 3) {
    isOpen.value = true;
    clickCount.value = 0;
  } else {
    clickTimer.value = setTimeout(() => {
      clickCount.value = 0;
    }, 500);
  }
};

const handleKeyPress = (e) => {
  userInput.value.push(e.key);

  // Keep only the last 10 keys
  if (userInput.value.length > 10) {
    userInput.value.shift();
  }

  // Check if the konami code matches
  if (userInput.value.join(',') === konamiCode.join(',')) {
    isOpen.value = true;
    userInput.value = [];
  }
};

const closeModal = () => {
  isOpen.value = false;
};

const handleEscape = (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyPress);
  window.addEventListener('keydown', handleEscape);

  // Expose the click handler to parent via event
  window.cvEasterEgg = handleNameClick;
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyPress);
  window.removeEventListener('keydown', handleEscape);
  delete window.cvEasterEgg;
  if (clickTimer.value) {
    clearTimeout(clickTimer.value);
  }
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="close-button" @click="closeModal" aria-label="Close CV">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div class="cv-content">
            <h2>Karl Schmidt</h2>
            <p class="subtitle">Software Developer</p>

            <div class="cv-section">
              <h3>🎉 Easter Egg Found!</h3>
              <p>Congratulations! You discovered the secret CV viewer.</p>
              <p class="hint">Hint: You can also use the Konami Code to open this! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA</p>
            </div>

            <div class="cv-section">
              <h3>About</h3>
              <p>Passionate software developer with interests in web development, sports, and building cool things.</p>
            </div>

            <div class="cv-section">
              <h3>Skills</h3>
              <div class="skills">
                <span class="skill-tag">Vue.js</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">CSS</span>
                <span class="skill-tag">Vite</span>
                <span class="skill-tag">Web Development</span>
              </div>
            </div>

            <div class="cv-section">
              <h3>Contact</h3>
              <div class="contact-links">
                <a href="https://github.com/CodeNKasch" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.xing.com/profile/Karl_Schmidt024310/web_profiles" target="_blank" rel="noopener noreferrer">Xing</a>
              </div>
            </div>

            <p class="easter-egg-note">💡 Tip: Triple-click your name anywhere to open this again!</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-content {
  background: var(--color-background);
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  padding: 40px;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.close-button {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: var(--color-background-soft);
  color: var(--color-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.close-button:hover {
  transform: scale(1.1);
  background: var(--color-background-mute);
}

.close-button:focus {
  outline: 2px solid var(--gradient);
  outline-offset: 2px;
}

.cv-content {
  color: var(--color-text);
}

.cv-content h2 {
  font-size: 2.5em;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 1.2em;
  color: var(--color-text);
  opacity: 0.8;
  margin-bottom: 32px;
}

.cv-section {
  margin-bottom: 32px;
}

.cv-section h3 {
  font-size: 1.5em;
  margin-bottom: 12px;
}

.cv-section p {
  line-height: 1.6;
  color: var(--color-text);
  opacity: 0.9;
}

.hint {
  font-size: 0.9em;
  opacity: 0.7;
  margin-top: 8px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  padding: 8px 16px;
  background: var(--color-background-soft);
  border-radius: 20px;
  font-size: 0.9em;
  color: var(--color-text);
}

.contact-links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.contact-links a {
  padding: 10px 20px;
  background: var(--gradient);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-links a:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(93, 219, 149, 0.3);
}

.easter-egg-note {
  margin-top: 32px;
  padding: 16px;
  background: var(--color-background-soft);
  border-radius: 8px;
  text-align: center;
  font-size: 0.9em;
  opacity: 0.8;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
}

@media (max-width: 768px) {
  .modal-content {
    padding: 24px;
  }

  .cv-content h2 {
    font-size: 2em;
  }
}
</style>
