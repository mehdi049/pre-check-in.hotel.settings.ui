<template>
  <div id="login-container">
    <div class="content-center bg-gray">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div
            class="column is-10-mobile is-6-tablet is-5-widescreen is-4-fullhd box"
          >
            <b-field label="Hotel name">
              <b-input
                type="text"
                required="true"
                placeholder="Hotel name"
                v-model="signInModel.bookingReference"
              ></b-input>
            </b-field>

            <b-field label="Password">
              <b-input
                placeholder="Password"
                required="true"
                type="password"
                v-model="signInModel.lastname"
              ></b-input>
            </b-field>

            <div class="field">
              <div class="columns is-mobile">
                <div class="column is-6">
                  <b-field>
                    <b-select placeholder="Language" icon="earth">
                      <option value="en">English</option>
                      <option value="ge">German</option>
                    </b-select>
                  </b-field>
                </div>
                <div class="column is-6">
                  <div class="control has-text-right">
                    <b-button type="is-info" v-on:click="authenticate"
                      >Login</b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import * as functions from "./_sharedFunctions/functions.js";

export default {
  name: "Login",
  data() {
    return {
      locale: undefined, // Browser locale,
      signInModel: {
        hotelName: "",
        password: "",
      },
    };
  },
  methods: {
    authenticate: function() {
      this.$router.push("/settings");
      /*
      if (!this.validateForm()) {
        let _signIn = { ...this.signInModel };
        this.axios
          .post(
            process.env.VUE_APP_PRECHECKIN_API_ENDPOINT +
              "/hotelsettings/signin",
            _signIn
          )
          .then((response) => {
            if (response.data.status === 200) {
               let _booking = functions.setBooking(response.data.body);
              localStorage.setItem(
                "booking_original",
                JSON.stringify(response.data.body)
              );
              localStorage.setItem("booking", JSON.stringify(_booking));
              this.$router.push("/settings");
            } else {
              this.danger(response.data.message);
            }
          })
          .catch(() => {
            this.danger("Error occurred, please try again.");
          });
      } else this.danger("Please fill all the required fields.");*/
    },

    validateForm: function() {
      let error = false;
      if (this.signInModel.hotelName === "" || this.signInModel.password === "")
        error = true;

      return error;
    },

    danger(msg) {
      this.$buefy.toast.open({
        duration: 5000,
        message: msg,
        position: "is-top",
        type: "is-danger",
      });
    },
  },
};
</script>
<style scoped>
#login-container {
  height: 100%;
  position: absolute;
  width: 100%;
}
.field .columns .column {
  padding-left: 0px;
  padding-right: 5px;
  margin-right: 5px;
}
</style>
