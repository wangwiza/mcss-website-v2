<script setup>
import CloudImage from "@/components/CloudImage.vue"

const props = defineProps({
    teamMember: Object,
});

</script>

<template>
    <div>
        <CloudImage class="member__image" :imageName="'mcss/team/2022-2023/' + teamMember.image" />
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
    max-width: 100%;
    /* border-top-right-radius: 25px; */
}

.member__title {
    margin-left: 1em;
}



</style>