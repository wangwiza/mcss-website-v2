<script setup>
import { ref } from 'vue'

const showDrop = ref(false)

const props = defineProps({
  to: String,
  children: Array
})
</script>

<template>
  <!-- No dropdown -->
  <router-link :to="to" class="link" v-if="!children">
    <slot />
  </router-link>

  <!-- Yes dropdown -->
  <span v-else @mouseover="showDrop = true" @mouseleave="showDrop = false">
    <router-link :to="to" class="link">
      <div class="link-wrapper">
        <span class="link-text">
          <slot />
        </span>
        <span class="icon-dropdown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.5"
            height="22.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-down"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </div>
    </router-link>
    <ul class="dropdown" v-show="showDrop">
      <li v-for="child in children">
        <router-link :to="child.to" class="link">{{ child.name }}</router-link>
      </li>
    </ul>
  </span>
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
  position: absolute;
  display: block;
  left: 0;
  margin: 0;
  z-index: 5;
}

.dropdown li {
  text-align: left;
  width: 100%;
}

.top-links ul li {
  display: inline-block;
  list-style-type: none;
  font-family: var(--navigation-font-stack);
  font-weight: var(--navigation-font-weight);
  font-style: var(--navigation-font-style);
  text-transform: var(--header-font-case);
}

ol,
ul {
  margin: 0 0 15px 20px;
  padding: 0;
}
</style>
