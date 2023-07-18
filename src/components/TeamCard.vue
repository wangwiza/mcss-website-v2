<script setup>
import CloudImage from "@/components/CloudImage.vue"

const props = defineProps({
    teamMember: Object,
});

</script>

<template>
    <div>
        <CloudImage class="member-image" :imageName="'mcss/team/2022-2023/' + teamMember.image" />
        <p>{{ teamMember.name }}</p>
        <p>{{ teamMember.position }}</p>
    </div>
</template>

<style>
.member-image {
    max-width: 100%;
    height: auto;
}
</style>