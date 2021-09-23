export default class ProductModel {
  id: number
  title: string
  selected: boolean
  price: number

  constructor() {
    this.id = 1
    this.title = ""
    this.selected = false
    this.price = 15000
  }
}
