<script setup>
import { ref, onMounted, computed } from 'vue';
import { API_KEY, BASE_URL } from './constants/index'
import { capitalizeFirstLetter } from './utils'
import WeatherSummary from './components/WeatherSummary.vue';
import Highlights from './components/Highlights.vue';
import Coords from './components/Coords.vue';
import Humidity from './components/Humidity.vue';

const city = ref('Manila')
const weatherInfo = ref(null)
const isError = computed(() => weatherInfo.value?.cod !== 200)

const videoSource = ref('');

const getWeather = async () => {
  try {
    const response = await fetch(`${BASE_URL}?q=${city.value}&units=metric&appid=${API_KEY}`);
    const data = await response.json();
    weatherInfo.value = data;


    setVideoBackground(weatherInfo.value.weather[0].main);
  } catch (error) {
    isError.value = true;
  }
};

const setVideoBackground = (weatherCondition) => {

  weatherCondition = weatherCondition.toLowerCase();

  if (weatherCondition === 'clear') {
    videoSource.value = './videos/clear sky.mp4';
  } else if (weatherCondition === 'clouds') {
    videoSource.value = './videos/clouds.mp4';
  } else if (weatherCondition === 'rain') {
    videoSource.value = './videos/rain.mp4';
  } else if (weatherCondition === 'snow') {
    videoSource.value = './videos/snow.mp4';
  } else if (weatherCondition === 'mist' || 'smoke' || 'haze' || 'dust' || 'fog' || 'sand' || 'ash' || 'squall' || 'tornado' ) {
    videoSource.value = './videos/trees.mp4';
  } else if (weatherCondition === 'thunderstorm') {
    videoSource.value = './videos/thunderstorm.mp4';
  } else if (weatherCondition === 'drizzle') {
    videoSource.value = './videos/drizzle.mp4';
  } else {
    videoSource.value = './videos/sky.mp4';
  }
};

onMounted(getWeather)
</script>

<template>
  <div class="page">
    <nav class="navbar">
      <div class="navbar-container">
        <a href="/" class="navbar-brand">WeatherApp</a>
        <ul class="navbar-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/faq">FAQs</a></li>
          <li><a href="/settings">Settings</a></li>

        </ul>
      </div>
    </nav>

    <video :src="videoSource" autoplay loop muted playsinline class="video-background"></video>

    <main class="main">
      <div class="container">
        <div class="laptop">
          <div class="sections">
            <section :class="['section', 'section-left', { 'section-error': isError }]">
              <div class="info">
                <div class="city-inner">
                  <input v-model="city" type="text" class="search" @keyup.enter="getWeather">
                </div>
                <WeatherSummary v-if="!isError" :weatherInfo="weatherInfo" />
                <div v-else class="error">
                  <div class="error-title">
                    Oops! Something went wrong
                  </div>
                  <div v-if="weatherInfo?.message" class="error-message">
                    {{ capitalizeFirstLetter(weatherInfo?.message) }}
                  </div>
                </div>

              </div>
            </section>
            <section v-if="!isError" class="section section-right">
              <Highlights :weatherInfo="weatherInfo" />
            </section>
          </div>
          <div v-if="!isError" class="sections">
            <Coords :coord="weatherInfo.coord" />
            <Humidity :humidity="weatherInfo.main.humidity" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/styles/main.scss';

.navbar {
  position: fixed; // Fixes the navbar at the top
  top: 0; // Ensures it's at the very top of the viewport
  left: 0; // Aligns to the left edge
  right: 0; // Stretches it to the right edge
  width: 100%; // Ensures full width
  background-color: #333;
  color: white;
  padding: 10px 0;
  z-index: 1000; // Ensures it stays above other content
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px; // Limits the max width of the content
  margin: 0 auto; // Centers the content within the navbar
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
  padding-top: 60px; // Adds top padding to make space for the fixed navbar
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}


.laptop {
  width: 100%;
  padding: 20px;
  // background-color: #0e100f;
  border-radius: 25px;
}

.sections {
  display: flex;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
  }
}

.section-left {
  width: 30%;
  padding-right: 10px;

  @media (max-width: 767px) {
    width: 100%;
    padding-right: 0;
  }

  &.section-error {
    min-width: 235px;
    width: auto;
    padding-right: 0;
  }
}

.section-right {
  width: 70%;
  padding-left: 10px;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 16px;
    padding-left: 0;
  }

}

.city-inner {
  position: relative;
  display: inline-block;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 10px;
    width: 25px;
    height: 25px;
    background: url('./assets/img/search.svg') no-repeat 50% 50%;
    background-size: contain;
    transform: translateY(50%);
    cursor: pointer;
  }
}

.info {
  height: 100%;
  padding: 16px;
  background: url('./assets/img/gradient-1.jpg') no-repeat 50% 50%;
  background-size: cover;
  border-radius: 25px;
}

.search {
  width: 100%;
  padding: 16px;
  font-family: 'Inter', Arial, sans-serif;
  color: $white;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 16px;
  border: none;
  outline: none;
  cursor: pointer;
}

.section-bottom {
  width: 50%;
  margin-top: 16px;
  z-index: 2;

  @media (max-width: 767px) {
    width: 100%;
  }
}

.right {
  margin-right: 16px;
}

.error {
  padding: 20px;

  &-title {
    font-size: 18px;
    font-weight: 700;
  }

  &-message {
    padding-top: 10px;
    font-size: 12px;
  }
}</style>
