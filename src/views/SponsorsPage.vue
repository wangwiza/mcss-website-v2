<script setup>
import { sponsors } from '@/data/sponsors.js';
import { VueperSlides, VueperSlide } from 'vueperslides'
import CloudImage from '@/components/CloudImage.vue';
import 'vueperslides/dist/vueperslides.css'
</script>

<template>
    <div class="wrapper">

        <h1 class="page-title">MCSS 2023-2024 MEMBERSHIP CARD</h1>
        <p class="p1">

            <CloudImage class="membership-card" imageName="mcss/card/front" />
        </p>
        <p class="p1">
            MTSA, HKSN, MCSS and MECA have partnered together to bring you another joint
            Membership Card!

            With our membership card, students can get numerous discounts at various restaurants and stores across the city.
            We
            take pride in bringing our members the best deals and benefits with our annually updated list of participating
            sponsors.
        </p>
        <p class="p1">&nbsp</p>
        <p class="p1">&nbsp</p>
        <p class="p1">&nbsp</p>

        <h1 class="page-title">OUR SPONSORS</h1>
        <vueper-slides class="no-shadow" :visible-slides="5" :arrows="false" :slide-ratio="1 / 8" :bullets="false" autoplay
            duration="1000" :gap="3" :dragging-distance="70">
            <vueper-slide v-for="sponsor in sponsors" :key="sponsor" :title="sponsor.name" :image="sponsor.image" />
        </vueper-slides>

        <div class="sponsor-grid">
            <div class="sponsor-grid__item" v-for="sponsor in sponsors" :key="sponsor">
                <CloudImage :imageName="'mcss/sponsors/' + sponsor.image" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    justify-content: center;
    margin-bottom: 30px;

    position: relative;
    max-width: 1660px;
    width: 66.666%;
    left: 16.666%
}

.page-title {
    font-size: var(--header-text-size-px);
    width: 100%;
    text-align: center;
    display: inline-block;
    position: relative;
    margin-bottom: 45px;
    letter-spacing: var(--heading-spacing);
    text-transform: var(--heading-font-case);
}

.p1 {
  text-align: center;
  margin-bottom: 15px;
  
}

.membership-card {
    width: 30vw;
    height: auto;
    border-radius: 1vw;
    box-shadow: 10px 10px;
}

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