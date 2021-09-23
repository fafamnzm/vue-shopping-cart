<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="4" v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </v-col>
      </v-row>
      <cart-summary />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import ProductCard from "../components/ProductCard.vue"
import CartSummary from "../components/CartSummary.vue"
import ProductModel from "../store/models/ProductModel"
import store from "@/store"

@Component({
  components: { ProductCard, CartSummary }
})
export default class ItemsList extends Vue {
  private model: ProductModel = new ProductModel()
  private products: Array<ProductModel> = []
  private limit = 18
  private limitOptions = ["all", 10, 20, 50, 100]
  private newTodo = this.model

  async mounted() {
    const checkTodos = store.getters.getProducts
    if (checkTodos.length < this.limit) {
      await store.dispatch("fetchTodos", this.limit)
    }
    this.Paginate()
  }

  Paginate() {
    const products = this.getProductsLocal()
    if (this.limit < products.length)
      this.products = products.slice(0, this.limit)
    else this.products = products
  }

  getProductsLocal(): Array<ProductModel> {
    const products = store.getters.getProducts
    return products
  }

  async AddTodo() {
    // this.newTodo.id = Math.floor(Math.random() * 1000000000)  // In case for a random ID
    this.newTodo.id = this.getProductsLocal().length + 1
    const value = {
      id: this.newTodo.id,
      title: this.newTodo.title,
      selected: this.newTodo.selected
    }
    if (this.newTodo.title.length > 1) {
      // We can have more accurate input validation
      this.newTodo.id = this.products.length + 1
      await store.dispatch("addTodo", value)
      this.newTodo.title = ""
    }
    this.Paginate()
  }
}
</script>

<style scoped>
.cart-summary {
  background-color: #1976d2;
}
</style>
