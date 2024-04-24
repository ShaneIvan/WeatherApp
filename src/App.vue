<script setup>

</script>

<!-- Added This Week -->
<template>
  <div id="app">
    <router-view></router-view>
<div class="page">
    <nav class="navbar">
      <div class="navbar-container">
        <a href="/" class="navbar-brand">WeatherApp</a>
        <ul class="navbar-nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/faqs">FAQs</router-link></li>
          <li><router-link to="/settings">Settings</router-link></li>

        </ul>
      </div>
    </nav>
<!-- /Added This Week -->

  </div>
  </div>
  
</template>


<!-- Added This Week -->


<style scoped>


.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 10px 0;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar-brand {
  font-size: 24px;
  color: white;
  text-decoration: none;
}

.navbar-nav {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  li {
    margin-left: 20px;

    a {
      color: white;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #aaa;
      }
    }
  }
}

.page {
  padding-top: 60px;
}
</style>


<!-- /Added This Week -->