<script setup>
import { inject } from 'vue'
const globalSettings = inject('globalColor');
</script>

<template>
    <section class="section-bottom right">
        <div :class="{ 'light-mode': globalSettings === 'Light', 'dark-mode': globalSettings === 'Dark' }">
            <div class="block-bottom">
                <div class="block-bottom-inner">
                    <div class="block-bottom-pic pic-wind">
                    
                    </div>
                    <div class="block-bottom-texts">
                        <div class="block-bottom-text-block">
                            <div :class="{ 'light-mode': globalSettings === 'Light', 'dark-mode': globalSettings === 'Dark' }">
                                <div class="block-bottom-text-block-title">
                                    What is Wind?
                                </div>
                                <div :class="{ 'light-mode': globalSettings === 'Light', 'dark-mode': globalSettings === 'Dark' }">
                                    <div class="block-bottom-text-block-desc">
                                        Wind is the horizontal movement of air in the atmosphere, caused by differences in air pressure. 
                                        It plays a significant role in weather patterns, affecting temperature, humidity, and precipitation distribution.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>