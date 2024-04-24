<script setup>
import { useTheme } from '../themeProvider';

const { theme, setTheme } = useTheme();

const toggleTheme = () => {
  const newTheme = theme.value === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
};
</script>

<template>
  <div class="settings-container">
    <h1>Settings</h1>
    <div class="theme-switcher">
      <label for="theme-toggle-button" class="button-label">Switch modes:</label>
      <button id="theme-toggle-button" @click="toggleTheme">
        Switch to {{ theme === 'light' ? 'Dark' : 'Light' }} Mode
      </button>
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

#theme-toggle-button {
  background-color: var(--button-background);
  color: var(--button-text);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, color 0.3s;
}

#theme-toggle-button:hover {
  background-color: var(--button-hover-background);
  color: var(--button-hover-text);
}
</style>



