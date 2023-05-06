<script setup>
import NavbarWrapper from './components/navbar/NavbarWrapper.vue'
import FooterWrapper from './components/FooterWrapper.vue'
</script>

<template>
  <!-- Navbar sticky on any page -->
  <NavbarWrapper />
  <div>
    <!-- Routerview is dynamic and changes -->
    <RouterView />
  </div>
  <FooterWrapper />
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

.site-header .dropdown:not(.icon-right) .icon-dropdown,
.link-wrapper:not(.icon-right) .icon-dropdown {
  display: inline-block;
  padding-left: 0.25em;
}

.site-header .dropdown:not(.icon-right) svg,
.link-wrapper:not(.icon-right) svg {
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

.custom-font,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
.header-font,
h1,
h2,
h3,
h4,
h5,
h6 {
  display: block;
  font-family: var(--header-font-stack);
  font-weight: var(--header-font-weight);
  font-style: var(--header-font-style);
  margin: 0 0 0.5em;
  line-height: 1.4;
}

ol li,
ul li {
  list-style-position: inside;
}

.text-link,
a {
  color: var(--link-color);
  text-decoration: none;
  background: 0 0;
}

input,
select,
textarea {
  background: 0 0;
  max-width: 100%;
  border-radius: 0;
}

input {
  border: 0;
  border-bottom: 1px solid var(--border-color);
  padding: 10px;
}

.newsletter-footer input.footer-email-submit {
  border-radius: 0;
  font-weight: var(--alt-btn-font-weight);
  font-style: var(--alt-btn-font-style);
  margin-top: 15px;
  text-transform: var(--button-text-case);
  padding: 10px 20px;
  font-size: var(--button-font-size-px);
  display: inline-block;
}

button,
input[type='submit'] {
  cursor: pointer;
}

.footer-email-submit {
  margin-bottom: 15px;
  transition: all 0.15s ease-in-out 0s;
}

.btn {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 8px 10px;
  width: auto;
  margin: 0;
  line-height: 1.42;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 0;
  background-color: var(--primary-btn-bg-color);
  color: var(--primary-btn-text-color);
}
</style>
