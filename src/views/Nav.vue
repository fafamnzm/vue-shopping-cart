<template>
  <div>
    <router-link v-for="nav in navOptions" :key="nav.text" :to="nav.address">
      <v-btn text rounded
        >{{ nav.text }}
        <p v-if="ChosenProductsLength > 0" class="UndoneTodo">
          {{ nav.text === "CartList" ? ChosenProductsLength : "" }}
        </p>
      </v-btn>
    </router-link>
  </div>
</template>

<script lang="ts">
import store from "@/store"
import ProductModel from "@/store/models/ProductModel"
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Nav extends Vue {
  private navOptions = [
    {
      text: "Home",
      address: "/"
    },
    {
      text: "ProductList",
      address: "/product-list"
    },
    {
      text: "CartList",
      address: "/cart-list"
    }
  ]
  private incompleteTodos: Array<ProductModel> = []

  get ChosenProductsLength() {
    return store.getters.getChosenProducts?.length
  }
}
</script>

<style scoped>
.UndoneTodo {
  background-color: crimson;
}
</style>
