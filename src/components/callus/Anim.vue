<template>
  <div class="anim_container">
    <transition
      appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
    >
      <div
        class="icon icon_phone"
        delay="0"
        left="100"
      ></div>
    </transition>
    <transition
      appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
    >
      <div
        class="plus one"
        delay="100"
        left="310"
      >+</div>
    </transition>
    <transition
      appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
    >
      <div
        class="icon icon_delivery"
        delay="200"
        left="480"
      ></div>
    </transition>
    <transition
      appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
    >
      <div
        class="plus"
        delay="300"
        left="750"
      >=</div>
    </transition>
    <transition
      appear
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
    >
      <div
        class="icon icon_pizza"
        delay="400"
        left="900"
      ></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Anim",
  methods: {
    beforeEnter(el) {
      el.style.left = "-200px";
      el.style.opacity = 0;
    },
    enter(el, done) {
      const delay = parseInt(el.getAttribute("delay"), 10);
      const left = parseInt(el.getAttribute("left"), 10);

      Velocity(
        el,
        { opacity: 1, left },
        { delay, duration: 500 },
        { complete: done }
      );
    }
  }
};
</script>

<style>
.anim_container {
  max-height: 200;
  position: relative;
}
.icon {
  background-size: cover !important;
  position: absolute;
}
.plus {
  color: #ffffff;
  font-size: 160px;
  position: absolute;
  top: 90px;
}
.icon_phone {
  background: url("../../assets/images/icons/icon-phone.png");
  height: 130px;
  top: 30px;
  width: 130px;
}
.icon_delivery {
  background: url("../../assets/images/icons/icon-delivery.png");
  height: 200px;
  width: 200px;
}
.icon_pizza {
  background: url("../../assets/images/icons/icon-pizza.png");
  height: 200px;
  width: 200px;
}
</style>
