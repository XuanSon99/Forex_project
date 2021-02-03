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
                    Register an account
                  </p>
                  <p
                    class="uk-text-small uk-margin-remove-top uk-margin-medium-bottom"
                  >
                    Have an account? <router-link to="signin">Login here</router-link>
                  </p>
                  <!-- login form begin -->
                  <form class="uk-grid uk-form">
                     <div class="uk-margin-small uk-width-1-1 uk-inline">
                      <span
                        class="uk-form-icon uk-form-icon-flip fas fa-user fa-sm"
                      ></span>
                      <input
                        class="uk-input uk-border-rounded"
                        id="display_name"
                        value=""
                        v-model="display_name"
                        type="text"
                        placeholder="Display name"
                      />
                    </div>
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
                      <span
                        class="uk-form-icon uk-form-icon-flip fas fa-lock fa-sm"
                      ></span>
                      <input
                        class="uk-input uk-border-rounded"
                        id="confirm_password"
                        v-model="confirm_password"
                        value=""
                        type="password"
                        placeholder="Confirm password"
                      />
                    </div>
                    <div class="uk-margin-small uk-width-1-1 uk-inline">
                      <p class="text-danger text-left">{{ error }}</p>
                    </div>
                   
                    <div class="uk-margin-small uk-width-1-1">
                      <button
                        class="uk-button uk-width-1-1 uk-button-primary uk-border-rounded uk-float-left"
                        type="submit"
                        name="submit"
                        @click="register"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                  <!-- login form end -->
                  
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
      display_name: "",
      username: "",
      confirm_password: "",
      password: "",
      error: "",
    };
  },
  methods: {
    register(e) {
      e.preventDefault();
      this.error = "";
      if (!this.username || !this.password || !this.confirm_password) {
        this.error = "Vui lòng diền đầy đủ thông tin.";
        return;
      }
      if(!this.validEmail(this.username)) {
        this.error = "Username không hợp lệ.";
        return ;
      }
      let data = {
        display_name: this.display_name,
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password
      };
      this.CallAPI(
        "post",
        "register",
        data,
        (response) => {
          if(response.data.status === true) {
           this.$toast.success("Đăng ký thành công!");
            this.$router.push({name: 'Signin'});
          }
        },
        (error) => {
          let errors = error.data.error;
          if(typeof errors != "undefined") {
            if(errors.username === "username is already exist.") {
              this.error = "Tài khoản đã tồn tại.";
            }
          }
          if(typeof errors != "undefined") {
            if(errors.password === "password and confirm password must be match.") {
              this.error = "Mật khẩu và xác nhận không trùng khớp.";
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