<script setup>
import { ref, onMounted, computed } from 'vue';
import { API_KEY, BASE_URL } from '../constants/index'
import { capitalizeFirstLetter } from '../utils'
import WeatherSummary from '../components/WeatherSummary.vue';
import Highlights from '../components/Highlights.vue';
import Coords from '../components/Coords.vue';
import Humidity from '../components/Humidity.vue';

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
  } else if (weatherCondition === 'mist' || 'smoke' || 'haze' || 'dust' || 'fog' || 'sand' || 'ash' || 'squall' || 'tornado') {
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
  <div id="app">
    <router-view></router-view>
    <div class="page">

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
  </div>

</template>




<style lang="scss" scoped>
@import '../assets/styles/main.scss';


</style>
