<script setup>
import { AdvancedImage, lazyload, responsive, placeholder } from "@cloudinary/vue";
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
    cloud: {
        cloudName: "mcss-website",
    },
});

const plugins = [
    lazyload(),
    responsive({ steps: 200 }),
]

const props = defineProps({
    imageName: String,
});

const myImg = cld.image(props.imageName)
myImg.quality('auto')
</script>

<template>
    <AdvancedImage :cldImg="myImg" :plugins="plugins" />
</template>

<style scoped>
img {
    width: 100%;
    height: auto;
}
</style>