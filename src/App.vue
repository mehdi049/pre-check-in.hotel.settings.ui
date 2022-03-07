<template>
  <div id="app">
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loggedIn: false,
    };
  },
  mounted: function() {
    //this.loggedIn = localStorage.getItem("booking") != null;
  },
};
</script>
