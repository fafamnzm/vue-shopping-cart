import axios from "axios"

const apiClient = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`
  // headers: {
  //   Accept: "application/json",
  //   "Content-Type": "application/json",
  //   common: [{ "Access-Control-Allow-Origin": "*" }]
  // }
})

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"

export default {
  getProducts() {
    return {
      data: [
        {
          id: 1,
          title: "product",
          selected: false,
          price: 15000
        },
        {
          id: 2,
          title: "product",
          selected: false,
          price: 15000
        },
        {
          id: 3,
          title: "product",
          selected: false,
          price: 15000
        },
        {
          id: 4,
          title: "product",
          selected: false,
          price: 15000
        },
        {
          id: 5,
          title: "product",
          selected: false,
          price: 15000
        },
        {
          id: 6,
          title: "product",
          selected: false,
          price: 15000
        },
        {
          id: 7,
          title: "product",
          selected: false,
          price: 15000
        },
        {
          id: 8,
          title: "product",
          selected: false,
          price: 15000
        },
        {
          id: 9,
          title: "product",
          selected: false,
          price: 15000
        },
        {
          id: 10,
          title: "product",
          selected: false,
          price: 15000
        },
        {
          id: 11,
          title: "product",
          selected: false,
          price: 15000
        },
        {
          id: 12,
          title: "product",
          selected: false,
          price: 15000
        },
        {
          id: 13,
          title: "product",
          selected: false,
          price: 15000
        },
        {
          id: 14,
          title: "product",
          selected: false,
          price: 15000
        },
        {
          id: 15,
          title: "product",
          selected: false,
          price: 15000
        },
        {
          id: 16,
          title: "product",
          selected: false,
          price: 15000
        },
        {
          id: 17,
          title: "product",
          selected: false,
          price: 15000
        },
        {
          id: 18,
          title: "product",
          selected: false,
          price: 15000
        }
      ]
    }
    // return apiClient.get(`/todos`)
  }
}
