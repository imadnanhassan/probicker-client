import AdminBreadcrumbs from '@/components/common/AdminBreadcrumbs'
import { useAddProductMutation } from '@/redux/features/product/product.api'
import { ProductFormData } from '@/types'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const ProductCreate = () => {
  const navigate = useNavigate()
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setImagePreview(URL.createObjectURL(file))
    }
  }
  const { register, handleSubmit, reset } = useForm<ProductFormData>()
  const [addProduct] = useAddProductMutation()

  const onSubmit: SubmitHandler<ProductFormData> = async data => {
    const toastId = toast.loading('Creating...')
    console.log(data)
    try {
      const formData = new FormData()
      formData.append('image', data.imageUrl[0])
      formData.append('name', data.name)
      formData.append('brand', data.brand)
      formData.append('price', data.price)
      formData.append('model', data.model)
      formData.append('quantity', data.quantity)
      formData.append('description', data.description)

      await addProduct(formData).unwrap()

      toast.success('Product created successfully')
      reset()
      setImagePreview(null)
      navigate('/admin/product-list')
    } catch {
      toast.error('Failed to create product')
    } finally {
      toast.dismiss(toastId)
    }
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
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Submit
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

export default ProductCreate
