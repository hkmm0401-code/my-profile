<template>
  <header class="header">
    <div class="container">
      <nav>
        <h1 class="logo">My Profile</h1>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button @click="$emit('toggle-profile')" class="profile-toggle" :title="toggleTitle">
              <span class="toggle-icon">{{ currentProfile === 'webDeveloper' ? '💻' : '🎵' }}</span>
              <span class="toggle-text">{{ currentProfile === 'webDeveloper' ? 'Web Dev' : '音響' }}</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    currentProfile: {
      type: String,
      required: true
    }
  },
  computed: {
    toggleTitle() {
      return this.currentProfile === 'webDeveloper' 
        ? '音響エンジニアプロフィールに切り替え' 
        : 'Webデベロッパープロフィールに切り替え'
    }
  }
}
</script>

<style scoped>
.header {
  background-color: white;
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--primary-color);
}

.profile-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, var(--primary-color), #6cb2ff);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(74, 144, 226, 0.3);
}

.profile-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.4);
}

.toggle-icon {
  font-size: 1.2rem;
}

.toggle-text {
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .profile-toggle {
    padding: 0.6rem 1.2rem;
  }
}
</style>
