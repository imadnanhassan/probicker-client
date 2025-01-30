import AdminBreadcrumbs from '@/components/common/AdminBreadcrumbs'
import {
  useGetSingleProductByIdQuery,
  useUpdateProductMutation,
} from '@/redux/features/product/product.api'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

interface FormData {
  name: string
  brand: string
  imageUrl: File | null 
  price: number
  model: string
  quantity: string
  description: string
}

const ProductUpdate = () => {
  const { id } = useParams<{ id: string }>()
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, reset } = useForm<FormData>()
  const { data: product, isLoading: productLoading } =
    useGetSingleProductByIdQuery(id)
  console.log('Product:', product?.data)
  const [updateProduct, { isLoading: updateLoading }] =
    useUpdateProductMutation()

  useEffect(() => {
    if (product?.data) {
      setValue('name', product?.data.name)
      setValue('brand', product?.data.brand)
      setValue('price', product?.data.price)
      setValue('model', product?.data.model)
      setValue('quantity', product?.data.quantity)
      setValue('description', product?.data.description)
      if (product?.data.imageUrl) {
        setImagePreview(product?.data.imageUrl)
      }
    }
  }, [product?.data, setValue])

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('brand', data.brand)
      if (data.imageUrl) {
        formData.append('imageUrl', data.imageUrl)
      }
      formData.append('price', data.price.toString())
      formData.append('model', data.model)
      formData.append('quantity', data.quantity)
      formData.append('description', data.description)

      await updateProduct({ id, data: formData }).unwrap()
      reset()
      navigate('/admin/product-list')
      setImagePreview(null)

      console.log('Product updated successfully')
    } catch (error) {
      console.error('Error updating product:', error)
    }
  }

  if (productLoading) {
    return <div>Loading product...</div>
  }

  return (
    <>
      <AdminBreadcrumbs
        pageTitle="Products Create "
        iconTitle="<></>"
        parentTitle="Products"
        childTitle="Products Create"
      />

      <section className="bg-gray-50">
        <div className="mx-auto container px-4 py-16 sm:px-6 lg:px-8">
          <div className="">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label className="sr-only">Product Name</label>
                    <input
                      type="text"
                      {...register('name', { required: true })}
                      placeholder="Product Name"
                      className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Brand
                    </label>
                    <input
                      type="text"
                      {...register('brand', { required: true })}
                      placeholder="Product Brand"
                      className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="imageUrl">
                      Product Image
                    </label>
                    <input
                      type="file"
                      {...register('imageUrl', { required: true })}
                      onChange={handleImageChange}
                      className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                    {imagePreview && (
                      <div className="mt-2">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="h-32 w-32 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="relative  text-gray-500">
                    <span className="h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
                      &#x24;
                    </span>
                    <input
                      type="number"
                      {...register('price', { required: true })}
                      placeholder="0.00"
                      className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Type
                    </label>
                    <input
                      type="text"
                      {...register('model', { required: true })}
                      placeholder="Typel"
                      className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Quantity
                    </label>
                    <input
                      type="text"
                      {...register('quantity', { required: true })}
                      placeholder="Quantity"
                      className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    {...register('description', { required: true })}
                    placeholder="Enter Description"
                    className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={updateLoading}
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    {updateLoading ? 'Updating...' : 'Update Product'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductUpdate
