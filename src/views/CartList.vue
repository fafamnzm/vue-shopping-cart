<template>
  <div class="cart-list-main">
    <h1 class="cart-report my-10">
      Cart Report
    </h1>
    <div v-for="product in chosenProducts" :key="product.id">
      <div class="card-wrapper d-flex flex-row mx-auto my-4">
        <div class="product-image pa-2">
          <v-list-item-avatar
            class="my-auto"
            size="80"
            color="grey"
          ></v-list-item-avatar>
        </div>
        <div class="product-details flex-row">
          <div class="product-name">Product {{ product.id }}</div>
          <div>{{ product.price }}</div>
        </div>
        <div class="cancel-button">
          <v-btn
            block
            rounded
            :color="product.selected ? 'primary' : ''"
            class="add-to-cart-btn"
            @click="product.selected = !product.selected"
          >
            {{ product.selected ? "Remove From Cart" : "Add To Cart" }}
          </v-btn>
        </div>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="bottom-cart-list">
      <div class="details-price d-flex flex-row">
        <div class="px-2">
          TOTAL PRICE
        </div>
        <div class="px-2">
          ---------------------------------------------------
        </div>
        <div class="px-2">
          {{ totalAmount }}
        </div>
      </div>
      <div class="details-price d-flex flex-row">
        <div class="px-2">
          TOTAL COUNT
        </div>
        <div class="px-2">
          ----------------------------------------------------------
        </div>
        <div class="px-2">
          {{ totalCount }}
        </div>
      </div>
      <div class="pay-btn"><v-btn block class="primary">Pay</v-btn></div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store"
import { Component, Prop, Vue } from "vue-property-decorator"
import ProductModel from "../store/models/ProductModel"

@Component
export default class CartList extends Vue {
  get chosenProducts() {
    return store.getters.getChosenProducts
  }
  get totalAmount() {
    return this.chosenProducts.reduce((acc, item) => acc + item.price, 0)
  }
  get totalCount() {
    return this.chosenProducts.length
  }
}
</script>

<style lang="scss" scoped>
.cart-report {
  font-size: 63px;
}
.cart-list-main {
  max-width: 700px;
  margin: auto;
}
.card-wrapper {
  max-width: 637px;
  border-radius: 40px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.product-details {
  padding: 0 80px 0 0;
}
.product-name {
  font-size: 24px;
  font-weight: bold;
}
.cancel-button {
  padding-right: 8px;
}
.details-price {
  padding: 20px 10px;
  justify-content: space-around;
}
.pay-btn {
  padding: 20px 50px;
}
</style>
