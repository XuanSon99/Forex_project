<template>
  <header v-if="$route.meta.header">
    <!-- header content begin -->
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
              Member of HF Markets Group
              <!-- module logo begin -->
            </div>
          </div>
          <div class="uk-navbar-right uk-width-expand uk-flex uk-flex-right">
            <ul class="uk-navbar-nav uk-visible@m">
              <li>
                <router-link to="/" tag="a"
                  ><i class="fas fa-comments icon-fixed"></i> LIVE
                  CHAT</router-link
                >
              </li>
              <li>
                <router-link tag="a" to="/"
                  ><i class="fas fa-phone-alt icon-fixed"></i> Contact
                  Us</router-link
                >
              </li>
              <li>
                <div class="uk-navbar-item uk-visible@m">
                  <div>
                    <router-link
                      tag="button"
                      to="/signin"
                      class="btn btn-outline-success"
                      ><i class="fas fa-key icon-fixed"></i> Login</router-link
                    >
                  </div>
                </div>
              </li>
              <li>
                <div class="uk-navbar-item uk-visible@m">
                  <div>
                    <router-link
                      tag="button"
                      to="/"
                      class="btn btn-outline-danger"
                      ><i class="fas fa-heart icon-fixed"></i>Live Account</router-link
                    >
                  </div>
                </div>
              </li>
              <li>
                <div class="uk-navbar-item uk-visible@m">
                  <div>
                    <router-link
                      tag="button"
                      to="/"
                      class="btn btn-outline-primary"
                      ><i class="fas fa-sign-out-alt icon-fixed"></i>Log out</router-link
                    >
                  </div>
                </div>
              </li>
              <li>
                <a href="#"
                  ><i class="fas fa-language icon-fixed"></i>EN<i class="fas fa-chevron-down"></i
                ></a>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <router-link tag="a" to="/help-center"><i class="fas fa-globe-asia icon-fixed"></i>VietNam</router-link>
                    </li>
                      <li>
                      <router-link tag="a" to="/help-center"><i class="fas fa-globe-asia icon-fixed"></i>England</router-link>
                    </li>
                      <li>
                      <router-link tag="a" to="/help-center"><i class="fas fa-globe-asia icon-fixed"></i>Japanese</router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- module navigation end -->
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
              <!-- <li>
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
              </li> -->
              <li>
                <a href="#">About us<i class="fas fa-chevron-down"></i></a>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <router-link tag="a" to="/about"
                        >About JSC Markets</router-link
                      >
                    </li>
                    <li>
                      <router-link tag="a" to="/blog-list"
                        >Advantages of JSC Markets</router-link
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Trading<i class="fas fa-chevron-down"></i></a>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <router-link tag="a" to="/about">Accounts</router-link>
                    </li>
                    <li>
                      <router-link tag="a" to="/blog-list"
                        >Conditions</router-link
                      >
                    </li>
                    <li>
                      <router-link tag="a" to="/about">Liquidity</router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link tag="a" to="/markets"
                  >Markets<i class="fas fa-chevron-down"></i
                ></router-link>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li><router-link tag="a" to="/">Forex</router-link></li>
                    <li>
                      <router-link tag="a" to="/">Commodities</router-link>
                    </li>
                    <li><router-link tag="a" to="/">Indices</router-link></li>
                    <li><router-link tag="a" to="/">Bonds</router-link></li>
                    <li>
                      <router-link tag="a" to="/">Crypto currency</router-link>
                    </li>
                    <li><router-link tag="a" to="/">Stocks</router-link></li>
                    <li><router-link tag="a" to="/">Futures</router-link></li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link tag="a" to="/Platform"
                  >Platform<i class="fas fa-chevron-down"></i
                ></router-link>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <router-link tag="a" to="/">MT4 Destop</router-link>
                    </li>
                    <li>
                      <router-link tag="a" to="/">MT4 Web Terminal</router-link>
                    </li>
                    <li>
                      <router-link tag="a" to="/">MT4 Iphone/Ipad</router-link>
                    </li>
                    <li>
                      <router-link tag="a" to="/">MT4 Androi</router-link>
                    </li>
                    <li><router-link tag="a" to="/">PAMM</router-link></li>
                    <li><router-link tag="a" to="/">MAM</router-link></li>
                    <li>
                      <router-link tag="a" to="/">Copy Trade</router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Partnership<i class="fas fa-chevron-down"></i></a>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <router-link tag="a" to="/about"
                        >IB & affiliate program</router-link
                      >
                    </li>
                    <li>
                      <router-link tag="a" to="/blog-list"
                        >Advantages when become IB of JSC Markets</router-link
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#"
                  >Support central<i class="fas fa-chevron-down"></i
                ></a>
                <div class="uk-navbar-dropdown">
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <router-link tag="a" to="/help-center">FAQ</router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <!-- <div class="uk-navbar-item uk-visible@m in-optional-nav">
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
            </div> -->
          </div>
        </div>
      </nav>
      <!-- module navigation end -->
    </div>
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
.icon-fixed {
  font-size: 18px !important;
  margin: 6px 8px 0 8px !important;
}
.button-fixed {
  border-right: none !important;
}
</style>