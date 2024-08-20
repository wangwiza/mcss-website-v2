<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import CloudImage from '@/components/CloudImage.vue';
import { onMounted, ref } from 'vue';



const props = defineProps({
    collection: Object
})

const selectedImages = ref([])

const getRandomImages = () => {
    const numberOfImagesToDisplay = 5; // Adjust the number as needed
    const shuffledImages = [...props.collection].sort(() => Math.random() - 0.5);
    selectedImages.value = shuffledImages.slice(0, numberOfImagesToDisplay);
};

onMounted(() => {
    getRandomImages();
});

</script>

<template>
    <div class="slide-container">
        <vueper-slides :slide-ratio="710 / 1577" :bullets="false" :touchable="false" :autoplay="collection.length > 1"
            duration="10000">
            <vueper-slide v-for="(slide, i) in selectedImages" :key="i">
                <template #content>
                    <a v-if="slide.link" :href="'https://mcss-market.square.site/'" target="_blank"
                        rel="noopener noreferrer">
                        <CloudImage :imageName="slide.image" />
                    </a>
                    <CloudImage v-else :imageName="slide.image" />
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