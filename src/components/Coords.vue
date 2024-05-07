<script setup>
import { inject } from 'vue'
const globalSettings = inject('globalColor');

const props = defineProps({
    coord: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <section class="section-bottom right">
        <div class="block-bottom">
            <div class="block-bottom-inner">
                <div class="block-bottom-pic pic-coords"></div>
                <div class="block-bottom-texts">
                    <div class="block-bottom-text-block">
                        <div :class="{ 'light-mode': globalSettings === 'Light', 'dark-mode': globalSettings === 'Dark' }">
                            <div class="block-bottom-text-block-title">
                                Longitude: {{ coord?.lon }}
                            </div>
                        </div>
                    </div>
                    <div class="block-bottom-text-block">
                        <div :class="{ 'light-mode': globalSettings === 'Light', 'dark-mode': globalSettings === 'Dark' }">
                            <div class="block-bottom-text-block-title">
                                Latitude: {{ coord?.lat }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>