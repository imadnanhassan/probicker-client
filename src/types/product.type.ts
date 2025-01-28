export type ProductData = {
  _id: string
  imageUrl: string
  name: string
  brand: string
  price: number
  quantity: number
  model: string | undefined
  description?: string
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
