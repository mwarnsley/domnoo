<template>
  <div class="call_us_container">
    <div class="container">
      <div
        class="first"
        vue-scroll-reveal.reset="{ delay: 200, scale: 2}"
      >
        <h1>Hungry ?</h1>
      </div>
      <div
        class="second"
        vue-scroll-reveal.reset="{ delay: 400, scale: 2}"
      >
        <Anim />
      </div>
      <div
        class="third"
        vue-scroll-reveal.reset="{ delay: 600, scale: 2}"
      >
        <span>Give us a call</span>
        <span>555-555-5555</span>
      </div>
    </div>
  </div>
</template>


<script>
import Anim from "./Anim.vue";

export default {
  name: "CallUs",
  components: {
    Anim
  }
};
</script>
