<template>
  <div>
    <v-card :hover="cardHover" outlined rounded>
      <v-card-title class="justify-center">
        <v-list-item-avatar
          class="my-auto"
          size="80"
          color="grey"
        ></v-list-item-avatar>
      </v-card-title>
      <v-card-text class="card-title justify-center">
        Product {{ product.id }}
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn
          block
          rounded
          :color="product.selected ? 'primary' : ''"
          class="add-to-cart-btn"
          @click="product.selected = !product.selected"
        >
          {{ product.selected ? "Remove From Cart" : "Add To Cart" }}
        </v-btn>
      </v-card-actions>
    </v-card>
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

<style scoped>
.card-title {
  font-size: 18px;
}
.img-class {
  border-radius: 20px;
}
.add-to-cart-btn {
  border: black;
}
</style>
