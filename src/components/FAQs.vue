<script setup>

import CoordsFAQ from '../components/CoordsFAQ.vue';
import HumidityFAQ from '../components/HumidityFAQ.vue';
import WindFAQ from './WindFAQ.vue';
import PressureFAQ from './PressureFAQ.vue';
</script>

<template>
  <div id="app">
    <router-view></router-view>
    <div class="page">

      <!-- <video :src="videoSource" autoplay loop muted playsinline class="video-background"></video> -->
      
      <main class="main">
        <div class="container">
          <div class="laptop">
        
            <div class="sections">
              <CoordsFAQ />
              <HumidityFAQ />
            </div>
              <div class="sections">
                <WindFAQ />
                <PressureFAQ />
              </div>
          </div>
        </div>
      </main>
    </div>
  </div>

</template>

