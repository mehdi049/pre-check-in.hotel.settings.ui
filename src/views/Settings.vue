<template>
  <section>
    <TopNavbar></TopNavbar>

    <div class="container">
      <div class="columns is-mobile">
        <LeftNavbar currentActive="my-booking"></LeftNavbar>

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
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Email">
                    <b-input
                      type="text"
                      required="true"
                      placeholder="Email"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Website">
                    <b-input
                      type="text"
                      required="true"
                      placeholder="Website"
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
                      required="true"
                      placeholder="Street"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="City">
                    <b-input
                      type="text"
                      required="true"
                      placeholder="City"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Postcode">
                    <b-input
                      type="text"
                      required="true"
                      placeholder="Postcode"
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
                      type="text"
                      required="true"
                      placeholder="Email"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Phone">
                    <b-input
                      type="text"
                      required="true"
                      placeholder="Phone"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Fax">
                    <b-input
                      type="text"
                      required="true"
                      placeholder="Fax"
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
                      type="text"
                      required="true"
                      placeholder="facebook link"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Instagram link">
                    <b-input
                      type="text"
                      required="true"
                      placeholder="Instagram link"
                    ></b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Trip advisor link">
                    <b-input
                      type="text"
                      required="true"
                      placeholder="Trip advisor link"
                    ></b-input>
                  </b-field>
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
  name: "MyBooking",
  data() {
    return {
      booking: {},
    };
  },
  mounted() {
    /* let _booking = localStorage.getItem("booking");
    if (_booking !== null) this.booking = JSON.parse(_booking);
    else this.$router.push("/");*/
  },
  methods: {
    dateDifference(date1, date2) {
      return functions.differenceInDays(date1, date2);
    },
  },
  components: { TopNavbar, LeftNavbar, Footer },
};
</script>
