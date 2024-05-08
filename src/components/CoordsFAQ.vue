<script setup>
import { inject } from 'vue'
const globalSettings = inject('globalColor');
</script>

<template>
    <section class="section-bottom right">
        <div :class="{ 'light-mode': globalSettings === 'Light', 'dark-mode': globalSettings === 'Dark' }">
            <div class="block-bottom">
                <div class="block-bottom-inner">
                    <div class="block-bottom-pic pic-coords"></div>
                    <div class="block-bottom-texts">
                        <div class="block-bottom-text-block">
                            <div class="block-bottom-text-block-title">
                                What is Longitude?
                            </div>
                            <div class="block-bottom-text-block-desc">
                                Longitude measures distance east or west of the prime meridian.
                            </div>
                        </div>
                        <div class="block-bottom-text-block">
                            <div class="block-bottom-text-block-title">
                                What is Latitude
                            </div>
                            <div class="block-bottom-text-block-desc">
                                Latitude lines start at the equator (0 degrees latitude) and run east and
                                west, parallel to the equator.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>