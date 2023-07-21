<script setup>
import { sponsors } from '@/data/sponsors.js';
import CloudImage from '@/components/CloudImage.vue';
</script>

<template>
    <h1>Sponsors</h1>
    <div class="sponsor-grid">
        <div class="sponsor-grid__item" v-for="sponsor in sponsors" :key="sponsor">
            <CloudImage :imageName="'mcss/sponsors/' + sponsor.image" />
        </div>
    </div> 
    
</template>

<style scoped>
.sponsor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
}

.sponsor-grid__item {
    padding: 1rem;
    display: flex;
}

img {
    width: 100%;
    height: auto;
    margin: auto;
}

</style>