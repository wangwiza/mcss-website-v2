<script setup>
import { AdvancedImage, lazyload } from "@cloudinary/vue";
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
    cloud: {
        cloudName: "mcss-website",
    },
});

const plugins = [lazyload()]

const props = defineProps({
    imageName: String,
});

const myImg = cld.image(props.imageName)
</script>

<template>
    <AdvancedImage :cldImg="myImg" :plugins="plugins" />
</template>