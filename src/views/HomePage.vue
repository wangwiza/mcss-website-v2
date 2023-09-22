<script setup>
import SceneChicken from "@/components/SceneChicken.vue"

import { homeSlides } from '@/data/homeSlides.js';
import HomeSlides from '@/components/HomeSlides.vue';
</script>

<template>
  <div class="wrapper">
    <div class="grid">
      <HomeSlides v-for="collection in homeSlides" :collection="collection" />
      <SceneChicken />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    position: relative;
    max-width: 1660px;
    width: 66.666%;
    left: 16.666%
}

.grid {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>