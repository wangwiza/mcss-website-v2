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
body,
button,
input,
select,
textarea {
  font-size: var(--base-font-size);
  line-height: 1.6;
  color: var(--text-color);
  font-family: var(--body-font-stack);
  font-weight: var(--body-font-weight);
  font-style: var(--body-font-style);
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}

.site-header .wetheme-dropdown button,
.site-header__logo-link,
.site-header__logo-link:visited,
.top-links a,
.top-links a:visited {
  color: var(--nav-text-color);
}

.site-header .dropdown, .link-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.site-header .dropdown:not(.icon-right) .icon-dropdown, .link-wrapper:not(.icon-right) .icon-dropdown {
    display: inline-block;
    padding-left: .25em;
}

.site-header .dropdown:not(.icon-right) svg, .link-wrapper:not(.icon-right) svg {
    vertical-align: middle;
}

svg {
    width: 22.5;
    height: 22.5;
    fill: none;
    stroke: currentcolor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}
</style>
