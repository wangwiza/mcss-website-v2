<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute()


</script>

<template>
    <h1 class="page-title">
        hello world!
    </h1>
    <router-link to='/about'>Click this button to go to about</router-link>
</template>
