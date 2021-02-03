<template>
  <div>
    <!-- section content begin -->
    <div class="uk-section uk-padding-remove-vertical">
      <div class="uk-container uk-container-expand">
        <div class="uk-grid" data-uk-height-viewport="expand: true">
          <div
            class="uk-width-3-5@m uk-background-cover uk-background-center-right uk-visible@m uk-box-shadow-xlarge"
            style="background-image: url(img/in-signin-image.jpg)"
          ></div>
          <div class="uk-width-expand@m uk-flex uk-flex-middle">
            <div class="uk-grid uk-flex-center">
              <div class="uk-width-3-5@m">
                <div class="in-padding-horizontal@s">
                  <!-- module logo begin -->
                  <a class="uk-logo" href="index.html">
                    <img
                      class="in-offset-top-10"
                      src="img/in-lazy.svg"
                      data-src="img/in-logo-1.svg"
                      alt="logo"
                      width="130"
                      height="36"
                      data-uk-img
                    />
                  </a>
                  <!-- module logo begin -->
                  <p class="uk-text-lead uk-margin-top uk-margin-remove-bottom">
                    Log into your account
                  </p>
                  <p
                    class="uk-text-small uk-margin-remove-top uk-margin-medium-bottom"
                  >
                    Don't have an account? <router-link to="signup" >Register here</router-link>
                  </p>
                  <!-- login form begin -->
                  <form class="uk-grid uk-form">
                    <div class="uk-margin-small uk-width-1-1 uk-inline">
                      <span
                        class="uk-form-icon uk-form-icon-flip fas fa-user fa-sm"
                      ></span>
                      <input
                        class="uk-input uk-border-rounded"
                        id="username"
                        value=""
                        v-model="username"
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                    <div class="uk-margin-small uk-width-1-1 uk-inline">
                      <span
                        class="uk-form-icon uk-form-icon-flip fas fa-lock fa-sm"
                      ></span>
                      <input
                        class="uk-input uk-border-rounded"
                        id="password"
                        v-model="password"
                        value=""
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div class="uk-margin-small uk-width-1-1 uk-inline">
                      <p class="text-danger text-left">{{ error }}</p>
                    </div>
                    <div class="uk-margin-small uk-width-auto uk-text-small">
                      <label
                        ><input
                          class="uk-checkbox uk-border-rounded"
                          type="checkbox"
                        />
                        Remember me</label
                      >
                    </div>
                    <div class="uk-margin-small uk-width-expand uk-text-small">
                      <label class="uk-align-right"
                        ><a class="uk-link-reset" href="#"
                          >Forgot password?</a
                        ></label
                      >
                    </div>
                    <div class="uk-margin-small uk-width-1-1">
                      <button
                        class="uk-button uk-width-1-1 uk-button-primary uk-border-rounded uk-float-left"
                        type="submit"
                        name="submit"
                        @click="login"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                  <!-- login form end -->
                  <p class="uk-heading-line uk-text-center">
                    <span>Or sign in with</span>
                  </p>
                  <div class="uk-margin-medium-bottom uk-text-center">
                    <a
                      class="uk-button uk-button-small uk-border-rounded in-brand-google"
                      href="#"
                      ><i class="fab fa-google uk-margin-small-right"></i
                      >Google</a
                    >
                    <a
                      class="uk-button uk-button-small uk-border-rounded in-brand-facebook"
                      href="#"
                      ><i class="fab fa-facebook-f uk-margin-small-right"></i
                      >Facebook</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section content end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      this.error = "";
      if (!this.username || !this.password) {
        this.error = "Vui lòng diền đầy đủ thông tin.";
        return;
      }
      if(!this.validEmail(this.username)) {
        this.error = "Username không hợp lệ.";
        return ;
      }
      let data = {
        username: this.username,
        password: this.password,
      };
      this.CallAPI(
        "post",
        "login",
        data,
        (response) => {
          let token = response.data.data.token;
          localStorage.setItem("token", token);
          this.$toast.success("Đăng nhập thành công!");
        },
        (error) => {
          let errors = error.data.error;
          if(typeof errors != "undefined") {
            if(errors.username === "The username is not exist.") {
              this.error = "Tài khoản không tồn tại.";
            }
          }
          if(typeof errors != "undefined") {
            if(errors.password === "The password is wrong.") {
              this.error = "Mật khẩu chưa chính xác.";
            }
          }
        }
      );
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style>
</style>