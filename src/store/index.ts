import Vue from "vue"
import Vuex from "vuex"
// import TodoService from "@/services/TodoService"
import ProductModel from "./models/ProductModel"
import TodoService from "../services/ProductService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: Array<ProductModel>()
  },
  mutations: {
    FETCH_TODOS(state, todos: Array<ProductModel>) {
      state.todos = [...todos]
    },
    SET_TODOS(state, todos: Array<ProductModel>): void {
      todos.map(product => state.todos.push(product))
    },
    ADD_TODO(state, product: ProductModel): void {
      state.todos = [product, ...state.todos]
    }
  },
  actions: {
    async fetchTodos(context) {
      const response = await TodoService.getProducts()
      context.commit("FETCH_TODOS", response.data)
    },
    async addTodo(context, product: ProductModel) {
      return new Promise<void>((resolve, reject) => {
        try {
          context.commit("ADD_TODO", product)
          resolve()
        } catch (err) {
          reject(err)
        }
      })
    }
  },
  modules: {
    // TodoModule
  },
  getters: {
    getProducts(state) {
      const todos = state.todos
      return todos
    },
    singleTodo: state => (id: number) => {
      const product = state.todos.find(product => product.id === id)
      return product
    },
    getChosenProducts(state): Array<ProductModel> {
      const chosenOnes = state.todos.filter(product => product.selected)
      return chosenOnes
    }
  }
})
