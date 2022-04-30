<template>
  <!-- menu horizontal -->
  <div class="container">
    <div id="h-menu" class="columns is-mobile">
      <div class="column">
        <router-link to="/settings">
          <span
            v-if="hoteSettings.hotelImages.logo === null"
            class="p-2 has-background-dark has-text-white"
          >
            {{ hoteSettings.name.substr(0, 1).toUpperCase() }}
          </span>
          <span v-if="hoteSettings.hotelImages.logo !== null">
            logo not null
          </span>
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
    logout: function() {
      localStorage.removeItem("hotelSettings_original");
      localStorage.removeItem("hotelSettings");
      this.$router.push("/");
    },
  },
};
</script>
