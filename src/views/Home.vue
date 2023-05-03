<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute()


</script>

<template>
    <router-link to='/about'>Click this button to go to about</router-link>
</template>