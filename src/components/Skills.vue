<template>
  <section id="skills" class="skills">
    <h2 class="section-title">スキル</h2>
    <div class="skills-content">
      <div v-for="category in profileData" :key="category.category" class="skill-category">
        <h3>{{ category.category }}</h3>
        <ul class="skill-items">
          <li v-for="(item, index) in category.items" :key="index" class="skill-item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    profileData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.skills {
  padding: 3rem 0;
  background: white;
  border-radius: 8px;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--primary-color);
}

.skills-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.skill-category {
  margin-bottom: 2.5rem;
}

.skill-category h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 0.5rem;
}

.skill-items {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.skill-item {
  font-size: 1rem;
  color: var(--text-color);
  padding: 0.5rem 1rem;
  background-color: var(--secondary-color);
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.skill-item:hover {
  background-color: #e0e0e0;
}

@media (max-width: 768px) {
  .skills-content {
    padding: 0 1rem;
  }
  
  .skill-category h3 {
    font-size: 1.3rem;
  }
  
  .skill-item {
    font-size: 0.95rem;
  }
}
</style>
