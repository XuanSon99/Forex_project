<template>
  <footer v-if="$route.meta.footer">
    <!-- footer content begin -->
    <div
      class="uk-section uk-section-primary uk-padding-large uk-padding-remove-horizontal uk-margin-medium-top"
    >
      <div class="uk-container">
        <div
          class="uk-child-width-1-2@s uk-child-width-1-5@m uk-flex"
          data-uk-grid
        >
          <div>
            <!-- <h4 class="uk-heading-bullet">Overview</h4> -->
            <ul class="uk-list uk-link-text">
              <li><a href="#">Terms of Business</a></li>
              <li><a href="#">Risk Statement</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Preventing Money Laundering</a></li>
            </ul>
          </div>
          <div></div>
          <div>
            <ul class="uk-list uk-link-text">
              <li><a href="#">What is Forex</a></li>
              <li><a href="#">For Beginners</a></li>
              <li><a href="#">Try Demo Account</a></li>
            </ul>
          </div>
          <!-- <div class="uk-visible@m">
            <h4 class="uk-heading-bullet">Support</h4>
            <ul class="uk-list uk-link-text">
              <li><a href="#">Documentation</a></li>
            </ul>
          </div> -->
          <div>
            <ul class="uk-list uk-link-text">
              <li><a href="#">Open Account</a></li>
              <li><a href="#">Make Deposit</a></li>
              <li><a href="#">MT4 Terminal</a></li>
            </ul>
          </div>
          <div class="uk-flex-first uk-flex-last@m">
            <ul class="uk-list uk-link-text">
              <li>
                <img
                  class="uk-margin-small-bottom"
                  src="../assets/img/in-logo-1.svg"
                  alt="logo"
                  width="130"
                  height="36"
                />
              </li>
              <li>
                <a href="#"
                  ><i class="fas fa-envelope uk-margin-small-right"></i
                  >info@profit.id</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fas fa-map-marker-alt uk-margin-small-right"></i
                  >Jakarta, Indonesia</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="uk-grid uk-flex uk-flex-center uk-margin-large-top"
          data-uk-grid
        >
          <div class="uk-width-1-2@m in-copyright-text">
            <p>© Profit Inc 2020. All rights reserved.</p>
          </div>
          <div class="uk-width-1-2@m uk-text-right@m in-footer-socials">
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-facebook-square"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
    <!-- footer content end -->
    <!-- module totop begin -->
    <div class="uk-visible@m">
      <a href="#" class="in-totop fas fa-chevron-up" data-uk-scroll></a>
    </div>
    <!-- module totop begin -->
  </footer>
</template>

<script>
export default {};
</script>

<style>
</style>