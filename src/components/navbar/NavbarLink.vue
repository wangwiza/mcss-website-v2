<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
    to: String
})

const route = useRoute()
const isActive = computed(() => route.path === props.to)

</script>

<template>

</template>