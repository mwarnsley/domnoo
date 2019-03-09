<template>
  <footer>
    <div class="container">
      <div>
        <img :src="logoIcon" />
        <div class="contact">
          <div>Call Us</div>
          <div>777-777-7777</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "../../assets/images/logo.png";

export default {
  name: "AppFooter",
  data() {
    return {
      logoIcon: Logo
    };
  }
};
</script>
