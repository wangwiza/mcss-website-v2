<script setup>
import { web_slides } from '@/data/slides.js';
import EventSlides from '@/components/EventSlides.vue';

</script>

<template>

        <EventSlides v-for="year in web_slides" :year="year" />

</template>

<style scoped>


</style>