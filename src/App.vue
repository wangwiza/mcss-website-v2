<script setup>
import NavbarWrapper from './components/navbar/NavbarWrapper.vue'
</script>

<template>
  <!-- Navbar sticky on any page -->
  <NavbarWrapper />
  <div>
    <!-- Routerview is dynamic and changes -->
    <RouterView />
  </div>
</template>

<style>
/* Global styles */
body, button, input, select, textarea {
    font-size: var(--base-font-size);
    line-height: 1.6;
    color: var(--text-color);
    font-family: var(--body-font-stack);
    font-weight: var(--body-font-weight);
    font-style: var(--body-font-style);
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
}
</style>