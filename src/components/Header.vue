<template>
  <header>
    <!-- header content begin -->
        <div class="uk-section uk-padding-small in-profit-ticker">
      <div class="uk-container">
        <div class="uk-grid">
          <div class="uk-width-1-1">
            <div data-uk-slider="autoplay: true; autoplay-interval: 5000">
              <ul
                class="uk-grid-large uk-slider-items uk-child-width-1-3@s uk-child-width-1-6@m uk-text-center"
                data-uk-grid
              >
                <li>
                  <i class="fas fa-angle-up in-icon-wrap small circle up"></i>
                  XAUUSD <span class="uk-text-success">1478.81</span>
                </li>
                <li>
                  <i
                    class="fas fa-angle-down in-icon-wrap small circle down"
                  ></i>
                  GBPUSD <span class="uk-text-danger">1.3191</span>
                </li>
                <li>
                  <i
                    class="fas fa-angle-down in-icon-wrap small circle down"
                  ></i>
                  EURUSD <span class="uk-text-danger">1.1159</span>
                </li>
                <li>
                  <i class="fas fa-angle-up in-icon-wrap small circle up"></i>
                  USDJPY <span class="uk-text-success">109.59</span>
                </li>
                <li>
                  <i class="fas fa-angle-up in-icon-wrap small circle up"></i>
                  USDCAD <span class="uk-text-success">1.3172</span>
                </li>
                <li>
                  <i class="fas fa-angle-up in-icon-wrap small circle up"></i>
                  USDCHF <span class="uk-text-success">0.9776</span>
                </li>
                <li>
                  <i
                    class="fas fa-angle-down in-icon-wrap small circle down"
                  ></i>
                  AUDUSD <span class="uk-text-danger">0.67064</span>
                </li>
                <li>
                  <i class="fas fa-angle-up in-icon-wrap small circle up"></i>
                  GBPJPY <span class="uk-text-success">141.91</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-section uk-padding-remove-vertical">
      <!-- module navigation begin -->
      <nav
        class="uk-navbar-container uk-navbar-transparent"
        data-uk-sticky="show-on-up: true; top: 80; animation: uk-animation-fade;"
      >
        <div class="uk-container" data-uk-navbar>
          <div class="uk-navbar-left uk-width-auto">
            <div class="uk-navbar-item">
              <!-- module logo begin -->
              <router-link tag="a" class="uk-logo" to="/">
                <img
                  class="in-offset-top-10"
                  src="../assets/img/in-logo-1.svg"
                  alt="logo"
                  width="130"
                  height="36"
                />
              </router-link>
              <!-- module logo begin -->
            </div>
          </div>
          <div class="uk-navbar-right uk-width-expand uk-flex uk-flex-right">
            <ul class="uk-navbar-nav uk-visible@m">
              <li>
                <router-link tag="a" class="uk-logo" to="/">
                  Home<i class="fas fa-chevron-down"></i
                ></router-link>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <router-link tag="a" to="/Home2">Homepage 2</router-link>
                    </li>
                    <li>
                      <router-link tag="a" to="/Home3">Homepage 3</router-link>
                    </li>
                    <li>
                      <router-link tag="a" to="/Home4">Homepage 4</router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li><router-link tag="a" to="/markets">Markets</router-link></li>
              <li>
                <a href="#">Company<i class="fas fa-chevron-down"></i></a>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <router-link tag="a" to="/about">About</router-link>
                    </li>
                    <li>
                      <router-link tag="a" to="/blog-list">Blog</router-link>
                    </li>
                    <li>
                      <router-link tag="a" to="/careers">Careers</router-link>
                    </li>
                    <li>
                      <router-link tag="a" to="/contact">Contact</router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link tag="a" to="/education">Education</router-link>
              </li>
              <li>
                <a href="#">Resources<i class="fas fa-chevron-down"></i></a>
                <div class="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                  <div
                    class="uk-navbar-dropdown-grid uk-child-width-1-2"
                    data-uk-grid
                  >
                    <div>
                      <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li>
                          <a href="https://getuikit.com/docs/"
                            >Documentation<i
                              class="fas fa-external-link-square-alt fa-sm"
                            ></i
                          ></a>
                        </li>
                        <li>
                          <router-link tag="a" to="/help-center"
                            >Help Center</router-link
                          >
                        </li>
                        <li>
                          <router-link tag="a" to="/customers"
                            >Customers</router-link
                          >
                        </li>
                        <li>
                          <router-link tag="a" to="/roadmap"
                            >Roadmap</router-link
                          >
                        </li>
                        <li>
                          <router-link tag="a" to="/legal-docs"
                            >Legal Docs</router-link
                          ><i class="fas fa-gavel fa-sm"></i>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li>
                          <a class="uk-disabled" href="#"
                            >Adipiscing elit sed do eiusmod incididunt ut labore
                            dolore magna lorem ipsum sit dolor amet
                            consectetur</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="uk-navbar-item uk-visible@m in-optional-nav">
              <div>
                <router-link
                 
                  tag="a"
                  to="signin"
                  class="uk-button uk-button-text"
                  >Login</router-link
                >
                <router-link
                 
                  tag="a"
                  to="signup"
                  class="uk-button uk-button-text"
                  >Register</router-link
                >
                <router-link
                  tag="a"
                  to="signin"
                  @click="logOut"
                  class="uk-button uk-button-text"
                  >Log out</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </nav>
      <!-- module navigation end -->
    </div>
    <!-- header content end -->
 
  </header>
</template>

<script>
export default {
  data() {
    return {
      logOut() {
        this.CallAPI(
          "delete",
          "logout",
          {},
          (response) => {
            console.log(response);
            localStorage.clear();
          },
          (error) => {
            console.log("error", error);
          }
        );
      },
    };
  },
  methods: {},
};
</script>

<style>
  
</style>