<template>
  <!-- menu vertical -->
  <div class="column is-2-mobile is-4-tablet is-3-desktop">
    <br />
    <aside class="menu">
      <ul class="menu-list">
        <li>
          <router-link
            to="/settings"
            v-bind:class="{ active: this.currentActive === 'settings' }"
            ><font-awesome-icon size="2x" :icon="['fas', 'suitcase']" /><span
              class="is-hidden-mobile"
              >&nbsp; Hotel information</span
            ></router-link
          >
        </li>
        <li>
          <router-link
            to="/image-update"
            v-bind:class="{ active: this.currentActive === 'image-update' }"
            ><font-awesome-icon size="2x" :icon="['fas', 'image']" /><span
              class="is-hidden-mobile"
              >&nbsp; Images update</span
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
  faImage,
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
library.add(faImage);

export default {
  name: "LeftNavbar",
  props: ["currentActive"],
};
</script>
