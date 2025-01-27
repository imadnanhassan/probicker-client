export type ProductData = {
  imageUrl: string
  name: string
  brand: string
  price: number
  quantity: number
  model: string
}
export type ProductFormData = {
  name: string
  brand: string
  price: string
  model: string
  quantity: string
  description: string
  imageUrl: FileList
}
