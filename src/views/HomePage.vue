<script setup>
import SceneChicken from "@/components/SceneChicken.vue"
import CloudImage from '@/components/CloudImage.vue';
</script>

<template>
  <div class="wrapper">
    <div class="grid">
      <CloudImage imageName="mcss/events/2023-2024/welcome_party_banner" />
      <!-- <SceneChicken /> -->
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