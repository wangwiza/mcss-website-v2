<script setup>
import HeaderWrapper from '@/components/HeaderWrapper.vue'
import FooterWrapper from '@/components/FooterWrapper.vue'
</script>

<template>
  <!-- Navbar sticky on any page -->
  <HeaderWrapper />
  <div>
    <!-- Routerview is dynamic and changes -->
    <RouterView />
  </div>
  <FooterWrapper />
</template>

<style></style>
