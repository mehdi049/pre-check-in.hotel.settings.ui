<template>
  <section>
    <TopNavbar></TopNavbar>

    <div class="container">
      <div class="columns is-mobile">
        <LeftNavbar currentActive="settings"></LeftNavbar>

        <div class="column is-9">
          <div id="main-content">
            <!-- date info -->
            <div class="box">
              <h1 class="title is-1">
                Hotel information
              </h1>

              <h3 class="has-text-weight-semibold is-size-4 mb-3">
                General information
              </h3>
              <div class="columns">
                <div class="column">
                  <b-field label="Hotel name">
                    <b-input
                      type="text"
                      required="true"
                      placeholder="Hotel name"
                      v-model="hoteSettings.name"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Email">
                    <b-input
                      type="email"
                      required="true"
                      placeholder="Email"
                      v-model="hoteSettings.email"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Website">
                    <b-input
                      type="url"
                      placeholder="Website"
                      v-model="hoteSettings.website"
                    ></b-input>
                  </b-field>
                </div>
              </div>

              <h3 class="has-text-weight-semibold is-size-4 mb-3 mt-5">
                Location
              </h3>
              <div class="columns">
                <div class="column">
                  <b-field label="Street">
                    <b-input
                      type="text"
                      placeholder="Street"
                      v-model="hoteSettings.street"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="City">
                    <b-input
                      type="text"
                      placeholder="City"
                      v-model="hoteSettings.city"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Postcode">
                    <b-input
                      type="text"
                      placeholder="Postcode"
                      v-model="hoteSettings.postcode"
                    ></b-input>
                  </b-field>
                </div>
              </div>

              <h3 class="has-text-weight-semibold is-size-4 mb-3 mt-5">
                Contact
              </h3>
              <div class="columns">
                <div class="column">
                  <b-field label="Website">
                    <b-input
                      type="url"
                      placeholder="website"
                      v-model="hoteSettings.website"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Phone">
                    <b-input
                      type="text"
                      placeholder="Phone"
                      v-model="hoteSettings.phone"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Fax">
                    <b-input
                      type="text"
                      placeholder="Fax"
                      v-model="hoteSettings.fax"
                    ></b-input>
                  </b-field>
                </div>
              </div>

              <h3 class="has-text-weight-semibold is-size-4 mb-3 mt-5">
                Social network links
              </h3>
              <div class="columns">
                <div class="column">
                  <b-field label="Facebook link">
                    <b-input
                      type="url"
                      placeholder="facebook link"
                      v-model="hoteSettings.facebookLink"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Instagram link">
                    <b-input
                      type="url"
                      placeholder="Instagram link"
                      v-model="hoteSettings.instagramLink"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Trip advisor link">
                    <b-input
                      type="url"
                      placeholder="Trip advisor link"
                      v-model="hoteSettings.tripAdvisorLink"
                    ></b-input>
                  </b-field>
                </div>
              </div>

              <h3 class="has-text-weight-semibold is-size-4 mb-3 mt-5">
                Useful links
              </h3>
              <div class="columns">
                <div class="column">
                  <b-field label="BBQ fun">
                    <b-input
                      type="text"
                      placeholder="BBQ fun"
                      v-model="hoteSettings.bbqFun"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Picnic basket">
                    <b-input
                      type="text"
                      placeholder="Picnic basket"
                      v-model="hoteSettings.picnicBasket"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Dining options">
                    <b-input
                      type="text"
                      placeholder="Dining options"
                      v-model="hoteSettings.diningOptions"
                    ></b-input>
                  </b-field>
                </div>
              </div>

              <div class="columns">
                <div class="column is-12 has-text-right">
                  <button class="button is-info" v-on:click="update">
                    UPDATE
                  </button>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
        </div>
      </div>

      <Footer></Footer>
    </div>
  </section>
</template>

<script>
import * as functions from "./_sharedFunctions/functions.js";

import TopNavbar from "./_shared/TopNavbar.vue";
import LeftNavbar from "./_shared/LeftNavbar.vue";
import Footer from "./_shared/Footer.vue";

import {
  faArrowRight,
  faExclamationCircle,
  faCheck,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faArrowRight);
library.add(faArrowDown);
library.add(faExclamationCircle);
library.add(faCheck);

export default {
  name: "Settings",
  data() {
    return {
      hoteSettings: {},
    };
  },
  mounted() {
    let _hoteSettings = localStorage.getItem("hotelSettings");
    if (_hoteSettings !== null) this.hoteSettings = JSON.parse(_hoteSettings);
    else this.$router.push("/");
  },
  methods: {
    dateDifference(date1, date2) {
      return functions.differenceInDays(date1, date2);
    },
    update: function() {
      if (!this.validateForm()) {
        let _hoteSettings = { ...this.hoteSettings };
        this.axios
          .post(
            process.env.VUE_APP_PRECHECKIN_API_ENDPOINT +
              "/hotelsettings/updateHotelSettings",
            _hoteSettings
          )
          .then((response) => {
            if (response.data.status === 200) {
              functions.refreshHotelSettings();
              this.success("Hotel settings updated successfully!");
            } else this.danger(response.data.message);
          })
          .catch(() => {
            this.danger("Error occurred, please try again.");
          });
      } else this.danger("Please fill all the required fields.");
    },
    validateForm: function() {
      let error = false;
      const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

      if (
        this.hoteSettings.name === "" ||
        this.hoteSettings.email === "" ||
        !reg.test(this.hoteSettings.email.replace(/\+/gi, "."))
      )
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

    success(msg) {
      this.$buefy.toast.open({
        duration: 5000,
        message: msg,
        position: "is-top",
        type: "is-success",
      });
    },
  },
  components: { TopNavbar, LeftNavbar, Footer },
};
</script>
