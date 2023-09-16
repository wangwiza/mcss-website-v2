<script setup>
import { events } from '@/data/events.js';
import EventSlides from '@/components/EventSlides.vue';
</script>

<template>
        <EventSlides v-for="year in events" :year="year" />
</template>

<style scoped></style>