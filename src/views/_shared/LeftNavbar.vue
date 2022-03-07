<template>
  <!-- menu vertical -->
  <div class="column is-2-mobile is-4-tablet is-3-desktop">
    <br />
    <aside class="menu">
      <ul class="menu-list">
        <li>
          <router-link
            to="/my-booking"
            v-bind:class="{ active: this.currentActive === 'my-booking' }"
            ><font-awesome-icon size="2x" :icon="['fas', 'suitcase']" /><span
              class="is-hidden-mobile"
              >&nbsp; Hotel information</span
            ></router-link
          >
        </li>
        <li>
          <router-link
            to="/bbq-fun"
            v-bind:class="{ active: this.currentActive === 'bbq-fun' }"
            ><font-awesome-icon size="2x" :icon="['fas', 'burn']" /><span
              class="is-hidden-mobile"
              >&nbsp; BBQ fun</span
            ></router-link
          >
        </li>
        <li>
          <router-link
            to="/picnic-basket"
            v-bind:class="{
              active: this.currentActive === 'picnic-basket',
            }"
            ><font-awesome-icon
              size="2x"
              :icon="['fas', 'shopping-basket']"
            /><span class="is-hidden-mobile"
              >&nbsp; Picnic basket</span
            ></router-link
          >
        </li>
        <li>
          <router-link
            to="/dining-options"
            v-bind:class="{
              active: this.currentActive === 'dining-options',
            }"
            ><font-awesome-icon size="2x" :icon="['fas', 'utensils']" /><span
              class="is-hidden-mobile"
              >&nbsp; Dining options</span
            ></router-link
          >
        </li>
        <li>
          <router-link
            to="/holiday-check"
            v-bind:class="{
              active: this.currentActive === 'holiday-check',
            }"
            ><font-awesome-icon
              size="2x"
              :icon="['fas', 'check-double']"
            /><span class="is-hidden-mobile"
              >&nbsp; Holiday check</span
            ></router-link
          >
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import {
  faSuitcase,
  faMapSigns,
  faBurn,
  faShoppingBasket,
  faUtensils,
  faInfoCircle,
  faCloud,
  faHotel,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faSuitcase);
library.add(faMapSigns);
library.add(faBurn);
library.add(faShoppingBasket);
library.add(faUtensils);
library.add(faInfoCircle);
library.add(faCloud);

library.add(faFacebookSquare);
library.add(faHotel);
library.add(faCheckDouble);

export default {
  name: "LeftNavbar",
  props: ["currentActive"],
};
</script>
