<script setup>
import { pastCards } from '@/data/pastCards.js'
import CloudImage from '@/components/CloudImage.vue';
</script>

<template>
    <section class="design-section">
        <div class="timeline">

            <!--Well, The reason for this div is to fill space. 
This space is technically used for keeping dates, 
but I didn't find the need for dates. However, I'll provide 
you the styling for dates, so that you can use it if you 
wanted to.-->

            <!--This is the class where the timeline graphics are 
housed in. Note that we have timeline-circle 
here for that pointer in timeline.-->


            <template v-for="(card, i) in pastCards" :key="card">
                <div class="timeline-component">
                    <CloudImage class="timeline-card" :imageName="card.front" />
                </div>
                <template v-if="i % 2 === 0">
                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-empty"></div>
                    <div class="timeline-empty"></div>

                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                </template>
                <!-- <div class="timeline-middle">
                    <div class="timeline-circle"></div>
                </div>
                <div class="timeline-component">
                    <CloudImage class="timeline-card" :imageName="card.back" />
                </div> -->
            </template>

        </div>
    </section>
</template>

<style scoped>
.design-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.design {
    display: flex;
    align-items: center;
    justify-content: center;
}

.timeline {
    width: 80%;
    height: auto;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.timeline-component {
    display: flex;
    align-items: center;
    justify-content: center;
}

.timeline-card {
    width: 90%;
    height: auto;
    -webkit-box-shadow: 5px 5px 10px #c5c5c5, -5px -5px 10px #f3f3f3;
    box-shadow: 5px 5px 10px #c5c5c5, -5px -5px 10px #f0f0f0;
    border-radius: 5px;
    transition: 0.4s ease;
    overflow-wrap: break-word !important;
    margin: 1rem;
    border-radius: 6px;

}

@media screen and (min-width: 768px) {
    .timeline {
        display: grid;
        grid-template-columns: 1fr 3px 1fr;
    }

    .timeline-middle {
        position: relative;
        background-image: linear-gradient(45deg, #F27121, #E94057, #8A2387);
        width: 3px;
        height: 100%;
    }

    .main-middle {
        opacity: 0;
    }

    .timeline-circle {
        position: absolute;
        top: 0;
        left: 50%;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-image: linear-gradient(45deg, #F27121, #E94057, #8A2387);
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
    }
}
</style>