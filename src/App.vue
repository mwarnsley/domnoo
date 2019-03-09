<template>
  <div>
    <app-header />
    <div>
      <featured />
      <Menu />
      <call-us />
      <news-letter />
    </div>
    <app-footer />
  </div>
</template>


<script>
import AppHeader from "./components/header-footer/Header.vue";
import AppFooter from "./components/header-footer/Footer.vue";
import CallUs from "./components/callus/CallUs.vue";
import Featured from "./components/featured/Featured.vue";
import Menu from "./components/menu/Menu.vue";
import NewsLetter from "./components/newsletter/Newsletter.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    AppFooter,
    CallUs,
    Featured,
    Menu,
    NewsLetter
  }
};
</script>

<style>
@import "./assets/style.css";
</style>

