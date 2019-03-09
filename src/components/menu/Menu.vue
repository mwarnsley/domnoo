<template>
  <div class="container menu_container">
    <div class="top">
      <h2>Menu</h2>
    </div>
    <div class="buttons">
      <md-button
        :class="button.active ? 'md-raised' : ''"
        @click="changeMenu(button.name)"
        :key="`button_${index}`"
        v-for="(button, index) in buttons"
      >
        {{ button.name }}
      </md-button>
    </div>
  </div>
</template>


<script>
import map from "lodash/map";

export default {
  name: "Menu",
  data() {
    return {
      buttons: [
        {
          name: "pizza",
          active: true
        },
        {
          name: "burgers",
          active: false
        },
        {
          name: "salad",
          active: false
        },
        {
          name: "dessert",
          active: false
        }
      ]
    };
  },
  methods: {
    changeMenu(value) {
      this.buttons = map(this.buttons, button => {
        if (button.name === value) {
          return {
            ...button,
            active: true
          };
        }
        return {
          ...button,
          active: false
        };
      });
    }
  }
};
</script>
