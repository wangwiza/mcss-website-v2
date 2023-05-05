<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
  to: String,
  items: Array
})

const route = useRoute()
</script>

<template>
  <router-link :to="to" class="link">
    <div class="link-wrapper">
      <span class="link-text">
        <slot />
      </span>
      <span class="icon-dropdown">
        <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </router-link>
  <ul class="dropdown">
    <li v-for="(item, i) in items" :key="i">
      <router-link :to="item.link" class="link">{{ item.title }}</router-link>
    </li>
  </ul>
</template>

<style scoped>
.link {
  display: block;
  white-space: nowrap;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.5px;
  position: relative;
  padding: 6px 15px;
  transition: color 0.3s ease-in;
}

.link-wrapper:not(.icon-right) .icon-dropdown > svg {
    width: 16px;
    height: 16px;
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

.dropdown {
    background: var(--header-color);
    top: 100%;
    display: block!important;
    visibility: hidden;
    position: absolute;
    left: 0;
    margin: 0;
    z-index: 5;
    opacity: 0;
}

.dropdown li {
  text-align: left;
  width: 100%;
}
</style>
