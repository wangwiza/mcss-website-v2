<script setup>
import CloudImage from "@/components/CloudImage.vue"

const props = defineProps({
    teamMember: Object,
});

</script>

<template>
    <div>
        <CloudImage class="member__image" :imageName="'mcss/team/2023-2024/' + teamMember.image" />
        <p class="member__title">
            <span style="font-weight: bold;">{{ teamMember.name }}</span>&nbsp;
            <span style="color: #808080">{{ teamMember.position }}</span>
        </p>
    </div>
</template>

<style scoped>
div {
    border: 1px solid;

}

.member__image {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 3593 / 5390;
    object-fit: cover;
    max-height: 500px;
}

.member__title {
    margin-left: 1em;
}



</style>