<template>
  <div>
    <v-navigation-drawer
      permanent
      clipped
      app
      right
      width="30%"
      height="100vh"
      color="primary"
    >
      <v-list-item
        justify-center
        align-center
        fill-height
        class="flex flex-column  align-center justify-center "
      >
        <div class="inside-list mb-5 pb-5">
          <v-list-item-avatar
            class="my-auto"
            size="100"
            color="grey"
          ></v-list-item-avatar>
          <p>slected Itmes: {{ chosenProductsCount }}</p>
          <p>total price:</p>
          <h1>
            {{ totalAmount }}
          </h1>
        </div>
        <v-btn block app bottom x-large to="/cart-list">Create Report</v-btn>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import store from "@/store"
import ProductModel from "@/store/models/ProductModel"
import { Component, Vue } from "vue-property-decorator"

@Component
export default class CartSummary extends Vue {
  get chosenProductsCount() {
    return store.getters.getChosenProducts?.length
  }
  get totalAmount() {
    return store.getters.getChosenProducts?.reduce(
      (acc: number, item: ProductModel) => {
        if (item.selected) return acc + item.price
      },
      0
    )
  }
}
</script>

<style scoped>
.inside-list {
  margin-top: 70%;
  color: white;
}
</style>
