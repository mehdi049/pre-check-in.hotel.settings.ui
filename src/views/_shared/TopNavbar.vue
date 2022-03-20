<template>
  <!-- menu horizontal -->
  <div class="container">
    <div id="h-menu" class="columns is-mobile">
      <div class="column">
        <router-link to="/settings">
          <img
            src="https://cdn3.vectorstock.com/i/1000x1000/88/47/royal-hotel-logo-vector-31948847.jpg"
            class="image is-48x48"
          />
        </router-link>
      </div>
      <div class="column has-text-right">
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-lang"
            >
              <span
                ><font-awesome-icon size="2x" :icon="['fas', 'globe']"
              /></span>
              <span class="icon is-small">
                <font-awesome-icon :icon="['fas', 'angle-down']" />
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-lang" role="menu">
            <div class="dropdown-content">
              <router-link to="#" class="dropdown-item">
                <!-- <img src="./_assets/images/en-icon.png" alt="" /> -->
                &nbsp; English
              </router-link>
              <router-link to="#" class="dropdown-item">
                <!-- <img src="./_assets/images/ge-icon.png" alt="" /> -->
                &nbsp; German
              </router-link>
            </div>
          </div>
        </div>

        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-profile"
            >
              <span
                ><font-awesome-icon size="2x" :icon="['fas', 'user']"
              /></span>
              <span class="icon is-small">
                <font-awesome-icon :icon="['fas', 'angle-down']" />
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-profile" role="menu">
            <div class="dropdown-content">
              <a href="#" v-on:click="logout" class="dropdown-item">
                Log out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  faGlobe,
  faAngleDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGlobe);
library.add(faAngleDown);
library.add(faUser);

export default {
  name: "TopNavbar",
  methods: {
    logout: function() {
      localStorage.removeItem("booking");
      this.$router.push("/");
    },
  },
};
</script>
