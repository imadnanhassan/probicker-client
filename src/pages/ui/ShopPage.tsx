// import { StarIcon as Star } from '@heroicons/react/solid'
import UiBrreadcrumbs from '@/components/common/UiBrreadcrumbs'
import {
  addToCart,
  selectCartItems,
} from '@/redux/features/cartSlice/cartSlice'

import { useGettAllProductQuery } from '@/redux/features/product/product.api'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

import { ProductData } from '@/types'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { Heart } from 'lucide-react'

const breadcrumbsData = [{ label: 'Home' }, { label: 'Shop', isActive: true }]

interface RatingProps {
  rating: number
  maxStars?: number
}
interface Product {
  _id: string
  name: string
  description: string
  price: number
  imageUrl: string
}

 interface CartProduct extends Product {
   quantity: number
 }
export const Rating: React.FC<RatingProps> = ({ rating, maxStars = 5 }) => {
  const renderStars = () => {
    return Array.from({ length: maxStars }, (_, index) => {
      const starFill =
        index < Math.floor(rating)
          ? 'text-yellow-400'
          : index < Math.ceil(rating)
            ? 'text-yellow-300'
            : 'text-gray-300'

      return <StarFilledIcon key={index} className={`w-4 h-4 ${starFill}`} />
    })
  }

  return <div className="flex items-center gap-1">{renderStars()}</div>
}

const ShopPage = () => {
  const { data: product, isLoading } = useGettAllProductQuery(undefined)
  console.log('Product Data:', product)

  const dispatch = useAppDispatch()
  const cart = useAppSelector(selectCartItems)

 

  const handleAddToCart = product => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1, 
      }),
    )
  }

  console.log('Cart:', cart)
  if (isLoading) return <div>Loading...</div>

  const renderStars = (rating: number) => {
    return <Rating rating={rating} maxStars={5} />
  }

  return (
    <div>
      <UiBrreadcrumbs breadcrumbs={breadcrumbsData} />
      <div className="font-sans max-w-screen-xl mx-auto md:px-8 ">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 py-20">
          {product?.data?.map((product: ProductData) => (
            <div
              key={product._id}
              className="bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-md transition-all"
            >
              {/* Product Image */}
              <div className="w-full">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full object-cover object-top aspect-[230/307]"
                />
              </div>

              {/* Product Details */}
              <div className="p-2 flex-1 flex flex-col">
                <div className="flex-1">
                  {/* Name and Description */}
                  <h5 className="text-sm sm:text-base font-bold text-gray-800 truncate">
                    {product.name}
                  </h5>
                  <p className="mt-1 text-gray-500 truncate">
                    {product.description}
                  </p>

                  {/* Price and Ratings */}
                  <div className="flex flex-wrap justify-between gap-2 mt-2">
                    <div className="flex gap-2">
                      <h6 className="text-sm sm:text-base font-bold text-gray-800">
                        ${product.price}
                      </h6>
                      <h6 className="text-sm sm:text-base text-gray-500">
                        <s>${(product.price * 1.2).toFixed(2)}</s>
                      </h6>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {renderStars(4)} {/* Example: Static 4-star rating */}
                    </div>
                  </div>
                </div>

                {/* Wishlist and Add to Cart */}
                <div className="flex items-center gap-2 mt-4">
                  <button
                    className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer"
                    title="Wishlist"
                  >
                    <Heart className="w-5 h-5 text-pink-500" />
                  </button>
                  <button
                    onClick={() => handleAddToCart(product)}
                    type="button"
                    className="text-sm px-2 min-h-[36px] w-full bg-green-600 hover:bg-green-700 text-white tracking-wide ml-auto outline-none border-none rounded"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopPage
