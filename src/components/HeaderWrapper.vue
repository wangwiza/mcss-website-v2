<script setup>
import { directory } from '@/router/directory.js';
import HeaderLink from '@/components/HeaderLink.vue'
import { ref } from 'vue'

const navItems = ref(directory)
</script>

<template>
  <div class="sticky-header">
    <header class="site-header">
      <!-- Header -->
      <div class="site-header-wrapper">
        <div class="header-left"></div>
        <img src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139753/MCSS/redlogo_jpk8nl.png"
          alt="redlogo" class="header-logo" />
        <div class="header-right"></div>
      </div>
      <div class="nav-standalone">
        <div class="top-links">
          <!-- two types: dropdown, no dropdown -->
          <ul class="site-nav">
            <li v-for="item in navItems" :key="item.id">
              <HeaderLink :to="item.to" :children="item.children">{{ item.name }}</HeaderLink>
            </li>
            <li><a href="https://mcss-market.square.site/" target="_blank" rel="noopener noreferrer">SHOP</a></li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
.sticky-header {
  position: sticky;
  top: -1px;
  background-color: var(--header-color);
  z-index: 1000;
  left: 0 !important;
}

.site-header {
  padding-top: 19px;
  padding-bottom: 3px;
  margin-bottom: 0;
  border-bottom: 1px solid var(--header-border-color);
}

.site-header-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.header-left {
  display: flex;
  flex: 1 1 100%;
}

.header-right {
  flex: 1 1 100%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-content: center;
}

.header-logo {
  max-width: 132px;
  max-height: 51px;
}

.nav-standalone {
  margin: 0 15px;
  text-align: center;
}

.top-links {
  margin-bottom: 0;
  display: inline-flex;
  align-items: center;
}

.top-links ul.site-nav {
  display: inline-block;
  font-size: var(--header-font-size-px);
  line-height: var(--header-font-size-px) px;
}

.site-nav {
  cursor: default;
  margin: 0;
}

ul {
  padding: 0;
}

.top-links ul li {
  display: inline-block;
  list-style-type: none;
  font-family: var(--navigation-font-stack);
  font-weight: var(--navigation-font-weight);
  font-style: var(--navigation-font-style);
  text-transform: var(--header-font-case);
}

.site-nav>li {
  position: relative;
  display: inline-block;
}

.site-nav li {
  margin: 0;
  display: block;
}

ol li,
ul li {
  list-style-position: inside;
}
</style>
