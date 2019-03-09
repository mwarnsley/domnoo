<template>
  <div>
    <app-header></app-header>
    <div>
      <md-button>HELLO WORLD</md-button>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/header-footer/Header.vue";
import AppFooter from "./components/header-footer/Footer.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style>
@import "./assets/style.css";
</style>

