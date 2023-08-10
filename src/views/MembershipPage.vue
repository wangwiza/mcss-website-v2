<script setup>
import CloudImage from '@/components/CloudImage.vue';
import 'vueperslides/dist/vueperslides.css'
import CardTimeline from '../components/CardTimeline.vue';
</script>

<template>
    <div class="wrapper">

        <h1 class="page-title">MCSS 2023-2024 MEMBERSHIP CARD</h1>
        <p class="p1">

            <CloudImage class="membership-card" imageName="mcss/card/front_23-24" />
        </p>
        <p class="p1">
            MTSA, HKSN, MCSS and MECA have partnered together to bring you another joint
            Membership Card!

            With our membership card, students can get numerous discounts at various restaurants and stores across the city.
            We
            take pride in bringing our members the best deals and benefits with our annually updated list of participating
            sponsors.
        </p>
        <p class="p1">
            From 2021 onwards, the East Asian Clubs of McGill have decided to team up to provide you with a collab membership card.
            This means higher quality collab events, less cards to carry around, and an even bigger list of sweet deals for you.
        </p>
        <p class="p1">
            By buying our card, you are also showing your support, and enabling us to keep producing banger events.
        </p>
        
        <p class="p1">&nbsp</p>
        <p class="p1">
            Every year, the graphic/media teams of each club come together to vote on a new design for the card. You can take a look at some of the designs that have won previously below.
        </p>
        <p class="p1">&nbsp</p>
        <h1 class="page-title">PAST CARDS</h1>
        <CardTimeline />
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