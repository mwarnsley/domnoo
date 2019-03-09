<template>
  <div>
    <app-header></app-header>
    <div>
      <featured></featured>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/header-footer/Header.vue";
import AppFooter from "./components/header-footer/Footer.vue";
import Featured from "./components/featured/index.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    AppFooter,
    Featured
  }
};
</script>

<style>
@import "./assets/style.css";
</style>

