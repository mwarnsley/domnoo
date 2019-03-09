<template>
  <header>
    <div class="container clear">
      <div class="logo">
        <img :src="logoIcon" />
      </div>
      <div class="nav">
        <img
          :src="menuIcon"
          @click="drawerOpen = !drawerOpen"
        />
      </div>
      <md-drawer
        class="side-drawer"
        :md-active.sync="drawerOpen"
        :md-right="true"
      />
    </div>
  </header>
</template>

<script>
import Logo from "../../assets/images/logo.png";
import Menu from "../../assets/images/menu.png";

export default {
  name: "AppHeader",
  data() {
    return {
      drawerOpen: false,
      logoIcon: Logo,
      menuIcon: Menu
    };
  }
};
</script>