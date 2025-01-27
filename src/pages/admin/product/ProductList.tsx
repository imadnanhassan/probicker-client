import AdminBreadcrumbs from '@/components/common/AdminBreadcrumbs'
import { useGettAllProductQuery } from '@/redux/features/product/product.api'
import { ProductData } from '@/types'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const { data, isError, isLoading } = useGettAllProductQuery({})

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  return (
    <>
      <AdminBreadcrumbs
        pageTitle="Products Brand "
        iconTitle="<></>"
        parentTitle="Products"
        childTitle="Products Brand List"
      />
      <div className="container mx-auto px-4 md:px-8">
        <div className="items-start justify-end md:flex">
          <div className="mt-3 md:mt-0">
            <Link
              to={'/'}
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-green-600 rounded-lg hover:bg-green-500 active:bg-green-700 md:text-sm"
            >
              Add product
            </Link>
          </div>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Product Name</th>
                <th className="py-3 px-6">Brand</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Quantity</th>
                <th className="py-3 px-6">Model</th>
                <th className="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {data?.data.map((item: ProductData, idx: number) => (
                <tr key={idx}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    <img
                      src={item.imageUrl}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <span className="block text-gray-700 text-sm font-medium">
                        {item.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.brand}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.model}</td>

                  <td className="text-left px-6 whitespace-nowrap">
                    <a className="py-2 px-3 font-medium text-green-600 hover:text-green-500 duration-150 hover:bg-gray-50 rounded-lg">
                      Edit
                    </a>
                    <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ProductList
