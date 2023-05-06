<script setup></script>

<template>
  <div class="footer-wrap">
    <footer class="site-footer">
      <div class="footer-pad">
        <div class="grid">
          <div class="grid-item links-footer">
            <div class="h3 footer-header">INFO</div>
            <ul class="footer-content">
              <li>
                <router-link to="/about">About MCSS</router-link>
              </li>
              <li>
                <router-link to="/about">Contact Us</router-link>
              </li>
              <li>
                <router-link to="/about">FAQ</router-link>
              </li>
            </ul>
          </div>
          <div class="grid-item newsletter-footer">
            <div class="h3 footer-header">NEWSLETTER</div>
            <form>
              <div class="input-group">
                <input type="email" placeholder="email@example.com" name="contact[email]" id="Email"
                  class="input-group-field footer-email-input" />
                <span>
                  <input type="submit" class="btn footer-email-submit" name="subscribe" id="subscribe"
                    value="SUBSCRIBE" />
                </span>
              </div>
            </form>
          </div>
          <div class="grid-item social-media-footer">
            <div class="h3 footer-header">SNS</div>
            <ul class="clearfix">
              <li>
                <a href="https://www.facebook.com/mcss.ca" target="_blank">
                  <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mcssfam/" target="_blank">
                  <font-awesome-icon icon="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://youtu.be/W8x4m-qpmJ8" target="_blank">
                  <font-awesome-icon icon="fa-brands fa-tiktok" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="bottom-footer">
          <div class="footer-description"></div>
          <div class="bottom-row">
            <ul class="bottom-footer-links">
              <li>
                <a href="/">&copy; 2023, MCSS</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer-wrap {
  margin-top: 0;
  width: 100%;
  text-align: center;
}

.site-footer {
  margin-top: 0;
  text-align: center;
}

footer {
  background-color: var(--color-footer-bg);
  padding: 30px 0;
  color: var(--color-footer-text);
}

.footer-pad {
  padding: 0 30px;
  position: relative;
  max-width: 1660px;
  margin: 0 auto;
}

.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: -30px;
}

.grid-item {
  width: 33.333%;
  box-sizing: border-box;
  float: left;
  min-height: 1px;
  padding-left: 30px;
  vertical-align: top;
}

.h3,
h3 {
  font-size: var(--body-font-size-22-to-em);
}

.links-footer ul {
  margin: 0;
  padding: 0;
}

.footer-content a {
  color: var(--color-footer-text-darken10);
}

.links-footer ul li {
  list-style-type: none;
}

li {
  margin-bottom: 0.25em;
}

.footer-content a {
  color: var(--color-footer-text-darken10);
}

.links-footer a {
  margin: 0.2em 0;
}

.site-footer .newsletter-footer form {
  display: inline-block;
}

form {
  margin-bottom: 0;
}

.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}

.footer-email-input,
.newsletter-footer input.footer-email-input {
  border-radius: 0;
  border: 0;
  border-bottom: 1px solid var(--color-footer-text);
  background: var(--color-footer-bg);
  color: var(--color-footer-text);
}

.input-group .input-group-field {
  width: 100%;
}

.input-group-btn,
.input-group-field {
  display: table-cell;
  vertical-align: middle;
  margin: 0;
}

.footer-email-submit {
  background: var(--primary-btn-bg-color);
  color: var(--primary-btn-text-color);
}

.social-media-footer ul {
    margin: 0;
    padding: 0;
}

.social-media-footer ul li {
    list-style-type: none;
    display: inline-block;
}

.social-media-footer ul li a {
    color: var(--color-footer-text);
    transition: all .15s ease-in-out 0s;
      display: inline-block;
    padding: 11px 18px;
}

.bottom-footer {
  margin-top: 60px;
}

.clearfix:after, .grid:after{
  content: '';
  display: table;
  clear: both;
}

.footer-description {
    padding-bottom: 20px;
    text-align: center;
}

.bottom-footer-links {
    padding: 0;
    margin: 10px 0;
    flex: 1 1 100%;
}

.bottom-footer-links li:first-child {
    padding-left: 0;
    border-left: 0;
}

.bottom-footer-links li {
    list-style-type: none;
    display: inline-block;
    padding: 0 15px;
    border-left: 1px solid var(--color-footer-text);
    line-height: 1;
}

.bottom-footer a {
    font-size: 12px;
}
</style>
