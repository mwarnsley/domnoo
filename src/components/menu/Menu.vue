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
    <div class="product_items">
      <md-card
        :key="`products_${index}`"
        v-for="(product, index) in products"
        v-show="product.type === activeProduct"
      >
        <md-card-media md-ratio="16:9">
          <img :src="require(`../../assets/images/products/${product.img}`)" />
        </md-card-media>
        <md-card-header>
          <h2 class="md-title">
            {{ product.name }}
          </h2>
          <div class="md-subhead">
            <span>$ {{ product.price }}</span>
          </div>
        </md-card-header>

        <md-card-content>
          {{ product.desc }}
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>


<script>
import map from "lodash/map";
import { firebaseLooper } from "../../helpers";

export default {
  name: "Menu",
  data() {
    return {
      activeProduct: "pizza",
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
          name: "salat",
          active: false
        },
        {
          name: "dessert",
          active: false
        }
      ],
      products: []
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      // Fetching the products from firebase
      const fetchProducts = await this.$http.get("products.json");
      // Turning the products into json format
      const returnedProducts = await fetchProducts.json();
      // Formatting the firebase database json products into an array of objects with an ID
      const products = firebaseLooper(returnedProducts);
      // Setting this products to the products returned
      this.products = products;
    },
    changeMenu(value) {
      // Looping through the buttons and changing the active state
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
      this.activeProduct = value;
    }
  }
};
</script>

<style scoped>
.md-card {
  margin-bottom: 20px;
  width: 32%;
}
.product_items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
