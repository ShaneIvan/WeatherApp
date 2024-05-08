<script setup>
import { useTheme } from '../themeProvider';
import { watch } from 'vue';
import { reactive, inject } from 'vue';

const globalSettings = inject('globalColor');

const { theme, setTheme } = useTheme();

const themeOptions = ['light', 'dark'];

const toggleTheme = (selectedTheme) => {
  setTheme(selectedTheme);

  // Update globalSettings based on the selected theme
  if (selectedTheme === 'dark') {
    globalSettings.value = 'Dark mode is enabled.';
  } else if (selectedTheme === 'light') {
    globalSettings.value = 'Light mode is enabled.';
  } else {
    globalSettings.value = 'Adaptive mode is enabled.';
  }
};

watch(theme, (newVal, oldVal) => {
  // Update globalSettings based on the theme change
  if (newVal === 'dark') {
    globalSettings.value = 'Dark';
  } else if (newVal === 'light') {
    globalSettings.value = 'Light';
  } else {
    globalSettings.value = 'Adaptive';
  }

  console.log(globalSettings.value)
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

  <!-- <p style="background-color: aqua;">{{ globalSettings }}</p> -->
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
