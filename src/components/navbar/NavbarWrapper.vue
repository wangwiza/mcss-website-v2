<script setup>
import NavbarDrop from './NavbarDrop.vue';

const events = [
  {
    title: "event1",
    link: "/"
  },
  {
    title: "event2",
    link: "/"
  },
  {
    title: "event3",
    link: "/"
  },
]
</script>

<template>
  <!-- Inspired by omocat navbar -->
  <div class="sticky-header">
    <header class="site-header">
      <!-- Header -->
      <div class="site-header-wrapper">
        <div class="header-left"></div>
        <img
          src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139753/MCSS/redlogo_jpk8nl.png"
          alt="redlogo"
          class="header-logo"
        />
        <div class="header-right" style="background-color: aqua"></div>
      </div>
      <div class="nav-standalone">
        <div class="top-links">
          <!-- two types: dropdown, no dropdown -->
          <ul class="site-nav">
            <li>
              <router-link to="/" class="link">home</router-link>
            </li>
            <li class="has-dropdown" aria-haspopup="true">
              <NavbarDrop to="/events" items="events">events</NavbarDrop>
            </li>
            <li class="has-dropdown" aria-haspopup="true">
              <router-link to="/" class="link">nani</router-link>
            </li>
            <li class="has-dropdown" aria-haspopup="true">
              <router-link to="/" class="link">what</router-link>
            </li>
            <li class="has-dropdown" aria-haspopup="true">
              <router-link to="/" class="link">info</router-link>
            </li>
            <li class="has-dropdown" aria-haspopup="true">
              <router-link to="/" class="link">shop</router-link>
            </li>
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
  left: 0!important;
}

.site-header {
  padding-top: 19px;
  padding-bottom: 3px;
  margin-bottom: 0;
  border-bottom: 1px solid;
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

.site-nav > li {
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

</style>
