<script setup>
import { inject } from 'vue'
const globalSettings = inject('globalColor');
</script>

<template>
    <section class="section-bottom">
        <div :class="{ 'light-mode': globalSettings === 'Light', 'dark-mode': globalSettings === 'Dark' }">
            <div class="block-bottom">
                <div class="block-bottom-inner">
                    <div class="block-bottom-pic pic-pressure"></div>
                    <div class="block-bottom-texts">
                        <div class="block-bottom-text-block">
                            <div class="block-bottom-text-block-title">
                                What is Pressure?
                            </div>
                            <div class="block-bottom-text-block-desc">
                                Pressure refers to the force exerted by the atmosphere on a given area. It influences weather patterns,
                                with areas of high pressure typically associated with fair weather and low pressure with unsettled conditions.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>