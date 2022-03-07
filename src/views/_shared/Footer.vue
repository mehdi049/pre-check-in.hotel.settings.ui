<template>
  <!-- footer -->
  <footer class="footer">
    <div class="content">
      <p>
        © Copyright {{ this.currentYear }} Pre-Check-In system. All Rights
        Reserved
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
