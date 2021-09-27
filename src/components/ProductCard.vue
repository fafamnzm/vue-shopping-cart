<template>
  <div>
    <div class="main-product-card d-flex flex-column">
      <div class="product-image">
        <v-list-item-avatar
          class="ma-auto"
          size="150"
          color="grey"
        ></v-list-item-avatar>
      </div>
      <div class="product-details ma-auto">
        <div class="product-name">Product {{ product.id }}</div>
        <div>{{ product.price }}</div>
      </div>
      <div class="purchase-btn">
        <v-btn
          block
          rounded
          :outlined="!product.selected"
          color="primary"
          class="add-to-cart-btn"
          @click="product.selected = !product.selected"
        >
          {{ product.selected ? "Remove From Cart" : "Add To Cart" }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import ProductModel from "../store/models/ProductModel"

@Component
export default class ProductCard extends Vue {
  @Prop() private product!: ProductModel
  private cardHover = true
}
</script>

<style lang="scss" scoped>
.main-product-card {
  height: 300px;
  max-width: 250px;
  border-radius: 20px;
  align-items: center;
  border: solid 1px #1976d2;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.product-image {
  padding: 20px 0 10px;
}
.product-name {
  font-size: 16px;
  font-weight: bold;
}
.purchase-btn {
  width: 100%;
  padding: 10px;
}
</style>
