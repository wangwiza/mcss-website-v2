<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import CloudImage from '@/components/CloudImage.vue';



const props = defineProps({
    year: Object
})
</script>

<template>
    <div class="slide-container">
        <div class="slide-flag">{{ year.span }}</div>
        <vueper-slides :slide-ratio="710 / 1577" :bullets="false" :touchable="false" :autoplay="year.slides.length > 1" duration="5000">
            <vueper-slide v-for="(slide, i) in year.slides" :key="i">
                <template #content>
                    <CloudImage :imageName="slide.image" />
                </template>
            </vueper-slide>
        </vueper-slides>
    </div>
</template>

<style scoped>
.slide-container {
    position: relative;
    text-align: center;
    color: white;
}

img {
    width: 100%;
    height: auto;
}

.slide-flag {
    position: absolute;
    top: 22px;
    right: 0;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-color: var(--primary-btn-bg-color);
    padding: 10px;
}
</style>