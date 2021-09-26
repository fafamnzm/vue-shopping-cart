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
  private newProduct = this.model

  async mounted() {
    const checkProducts = store.getters.getProducts
    if (checkProducts.length < this.limit) {
      await store.dispatch("fetchProduct", this.limit)
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

  async addProduct() {
    // this.newProduct.id = Math.floor(Math.random() * 1000000000)  // In case for a random ID
    this.newProduct.id = this.getProductsLocal().length + 1
    const value = {
      id: this.newProduct.id,
      title: this.newProduct.title,
      selected: this.newProduct.selected
    }
    if (this.newProduct.title.length > 1) {
      // We can have more accurate input validation
      this.newProduct.id = this.products.length + 1
      await store.dispatch("addProduct", value)
      this.newProduct.title = ""
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
