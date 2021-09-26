import Vue from "vue"
import Vuex from "vuex"
// import ProductService from "@/services/ProductService"
import ProductModel from "./models/ProductModel"
import ProductService from "../services/ProductService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: Array<ProductModel>()
  },
  mutations: {
    FETCH_PRODUCTS(state, products: Array<ProductModel>) {
      state.products = [...products]
    },
    SET_PRODUCTS(state, products: Array<ProductModel>): void {
      products.map(product => state.products.push(product))
    },
    ADD_PRODUCTS(state, product: ProductModel): void {
      state.products = [product, ...state.products]
    }
  },
  actions: {
    async fetchProduct(context) {
      const response = await ProductService.getProducts()
      context.commit("FETCH_PRODUCTS", response.data)
    },
    async addProduct(context, product: ProductModel) {
      return new Promise<void>((resolve, reject) => {
        try {
          context.commit("ADD_PRODUCTS", product)
          resolve()
        } catch (err) {
          reject(err)
        }
      })
    }
  },
  modules: {
    // ProductModule
  },
  getters: {
    getProducts(state) {
      const products = state.products
      return products
    },
    singleProduct: state => (id: number) => {
      const product = state.products.find(product => product.id === id)
      return product
    },
    getChosenProducts(state): Array<ProductModel> {
      const chosenOnes = state.products.filter(product => product.selected)
      return chosenOnes
    }
  }
})
