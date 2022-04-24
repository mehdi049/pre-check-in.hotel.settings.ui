<template>
  <section>
    <TopNavbar></TopNavbar>

    <div class="container">
      <div class="columns is-mobile">
        <LeftNavbar currentActive="image-update"></LeftNavbar>

        <div class="column is-9">
          <div id="main-content">
            <!-- date info -->
            <div class="box">
              <h1 class="title is-1">
                Hotel images
              </h1>

              <h3 class="has-text-weight-semibold is-size-4 mb-3">
                Hotel logo
              </h3>
              <div class="columns">
                <div class="column">
                  <label class="label">Hotel logo</label>
                  <div class="file">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <font-awesome-icon :icon="['fa', 'upload']" />
                        </span>
                        <span class="file-label">
                          Choose a file…
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <h3 class="has-text-weight-semibold is-size-4 mb-3 mt-5">
                Room images
              </h3>
              <div class="columns">
                <div class="column">
                  <label class="label">Single room</label>
                  <div class="file">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <font-awesome-icon :icon="['fa', 'upload']" />
                        </span>
                        <span class="file-label">
                          Choose a file…
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
                <div class="column">
                  <label class="label">Double room</label>
                  <div class="file">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <font-awesome-icon :icon="['fa', 'upload']" />
                        </span>
                        <span class="file-label">
                          Choose a file…
                        </span>
                      </span>
                    </label>
                  </div>
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
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faArrowRight);
library.add(faArrowDown);
library.add(faExclamationCircle);
library.add(faCheck);
library.add(faUpload);

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
