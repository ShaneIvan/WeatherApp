<script setup>
import { inject } from 'vue'
const globalSettings = inject('globalColor');

const props = defineProps({
    humidity: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <section class="section-bottom">
        <div :class="{ 'light-mode': globalSettings === 'Light', 'dark-mode': globalSettings === 'Dark' }">
            <div class="block-bottom">
                <div class="block-bottom-inner">
                    <div class="block-bottom-pic pic-humidity"></div>
                    <div class="block-bottom-texts">
                        <div class="block-bottom-text-block">
                            <div :class="{ 'light-mode': globalSettings === 'Light', 'dark-mode': globalSettings === 'Dark' }">
                                <div class="block-bottom-text-block-title">
                                    Humidity: {{ humidity }} %
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>