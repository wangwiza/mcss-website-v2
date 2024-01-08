<script setup>

</script>

<template>
  <footer class="site-footer">
    <div class="footer__pad">
      <div class="footer__grid">
        <div class="footer__grid-item footer__links">
          <div class="h3 footer-header">INFO</div>
          <ul class="footer__content">
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
        <div class="footer__grid-item newsletter-footer">
          <div class="h3 footer-header">NEWSLETTER</div>
          <form>
            <div class="input-group">
              <input type="email" placeholder="email@example.com" name="contact[email]" id="Email"
                class="input-group-field footer-email-input" />
              <span>
                <a href="https://forms.gle/xeS2xChKF3WkaUNz9">  
                  <input type="submit" class="btn footer-email-submit" name="subscribe" id="subscribe" value="SUBSCRIBE" />
                </a>
              </span>
            </div>
          </form>
        </div>
        <div class="footer__grid-item social-media-footer">
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
              <a href="https://www.tiktok.com/@mcssfam" target="_blank">
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
              <a href="/">&copy; 2023, McGill Chinese Students' Society</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: 0;
  text-align: center;
  width: 100%;
}

footer {
  background-color: var(--color-footer-bg);
  padding: 30px 0;
  color: var(--color-footer-text);
}

.footer__pad {
  padding: 0 30px;
  position: relative;
  max-width: 1660px;
  margin: 0 auto;
}

.footer__grid {
  list-style: none;
  margin: 0;
  padding: 0;

}

.footer__grid-item {
  width: 33.333%;
  box-sizing: border-box;
  float: left;
  min-height: 1px;

  vertical-align: top;
}

.h3,
h3 {
  font-size: var(--body-font-size-22-to-em);
}

.footer__links ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

li {
  margin-bottom: 0.25em;
}

.site-footer .newsletter-footer form {
  display: inline-block;
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

.clearfix:after,
.footer__grid:after {
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
