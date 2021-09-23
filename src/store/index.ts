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
      todos.map(todo => state.todos.push(todo))
    },
    ADD_TODO(state, todo: ProductModel): void {
      state.todos = [todo, ...state.todos]
    }
  },
  actions: {
    async fetchTodos(context) {
      const response = await TodoService.getProducts()
      context.commit("FETCH_TODOS", response.data)
    },
    async addTodo(context, todo: ProductModel) {
      return new Promise<void>((resolve, reject) => {
        try {
          context.commit("ADD_TODO", todo)
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
      const todo = state.todos.find(todo => todo.id === id)
      return todo
    },
    getChosenProducts(state): Array<ProductModel> {
      const chosenOnes = state.todos.filter(todo => todo.selected)
      return chosenOnes
    }
  }
})
