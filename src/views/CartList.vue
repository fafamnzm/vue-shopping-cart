<template>
  <div class="cart-list-main">
    <h1 class="mb-10">
      Cart Report
    </h1>
    <div v-for="product in chosenProducts" :key="product.id">
      <v-card class="mx-auto chosen-cards " max-width="500px">
        <v-list-item
          three-line
          class="d-flex flex-row 
    justify-content-center align-center"
        >
          <v-list-item-avatar
            class="my-auto"
            size="80"
            color="grey"
          ></v-list-item-avatar>
          <v-list-item-content class="d-flex flex-column align-center ">
            <v-card-title class="flex-column price-name-card my-auto">
              <div>Product {{ product.id }}</div>
              <div>{{ product.price }}</div>
            </v-card-title>
            <v-card-title>
              <v-btn
                block
                rounded
                :color="product.selected ? 'primary' : ''"
                class="add-to-cart-btn"
                @click="product.selected = !product.selected"
              >
                {{ product.selected ? "Remove From Cart" : "Add To Cart" }}
              </v-btn>
            </v-card-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <br />
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

  GoToTheDevelopersPage() {
    window.location.href = "https://www.faramarz-monazami.com/"
  }
}
</script>

<style scoped>
chosen-cards {
}
.card-internal {
  border-radius: 50px;
}
.v-sheet.v-card {
  border-radius: 40px;
}
.price-name-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
