<script setup>
import { useTheme } from '../themeProvider';
import { watch } from 'vue';

const { theme, setTheme } = useTheme();

const themeOptions = ['light', 'dark', 'adaptive'];

const toggleTheme = (selectedTheme) => {
  setTheme(selectedTheme);
};

watch(theme, (newVal, oldVal) => {
  console.log(`Theme changed from ${oldVal} to ${newVal}`);
});
</script>

<template>
  <div class="settings-container">
    <h1>Settings</h1>
    <div class="theme-switcher">
      <label class="button-label" for="theme-select">Theme Mode:</label>
      <select id="theme-select" :value="theme" @change="toggleTheme($event.target.value)">
        <option v-for="option in themeOptions" :key="option" :value="option">
          {{ option.charAt(0).toUpperCase() + option.slice(1) }}
        </option>
      </select>
    </div>
  </div>
</template>


<style scoped>
.settings-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.theme-switcher {
  margin-top: 20px;
  text-align: center;
}

.button-label{
  margin-right: 10px;
}

#theme-select {
  background-color: var(--button-background);
  color: var(--button-text);
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, color 0.3s;
}

#theme-select:hover {
  background-color: var(--button-hover-background);
  color: var(--button-hover-text);
}
</style>
