<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { web_slides } from '@/data/slides.js';
</script>

<template>
  <vueper-slides 
    v-for="year in web_slides"
    :key="year.id"
    :slide-ratio="710 / 1577"
    :bullets="false"
    :touchable="false"
    autoplay
    duration="5000"
  >
    <vueper-slide
      v-for="(slide, i) in year"
      :key="i"
      :image="slide.image"
      >
    </vueper-slide>
  </vueper-slides>
</template>
