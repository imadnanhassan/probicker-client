export type ProductData = {
  _id?: number | string | undefined
  id: number | string | undefined
  name: string
  model: string
  brand: string
  price: number
  quantity: string
  inStock: boolean
  description: string
  imageUrl: string
  createdAt: string
  updatedAt: string
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
