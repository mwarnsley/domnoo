<template>
  <div>
    <app-header></app-header>
    <div>
      <featured></featured>
      <Menu />
    </div>
    <app-footer></app-footer>
  </div>
</template>


<script>
import AppHeader from "./components/header-footer/Header.vue";
import AppFooter from "./components/header-footer/Footer.vue";
import Featured from "./components/featured/Featured.vue";
import Menu from "./components/menu/Menu.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    AppFooter,
    Featured,
    Menu
  }
};
</script>

<style>
@import "./assets/style.css";
</style>

