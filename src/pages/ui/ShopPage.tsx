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
import { useEffect, useState } from 'react'

const breadcrumbsData = [{ label: 'Home' }, { label: 'Shop', isActive: true }]

interface RatingProps {
  rating: number
  maxStars?: number
}

interface SelectedFilters {
  [key: string]: string[]
}

interface FilterOption {
  category: string
  options: string[]
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
  const [filters, setFilters] = useState<FilterOption[]>([])
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({})

  const { data: product = [], isLoading } = useGettAllProductQuery(undefined)
  console.log('Product Data:', product.data)

  const dispatch = useAppDispatch()
  const cart = useAppSelector(selectCartItems)

  useEffect(() => {
    if (!isLoading && product?.data.length > 0) {
      const extractedFilters: FilterOption[] = [
        {
          category: 'Brand',
          options: [
            ...new Set(
              product?.data.map(
                (productD: ProductData) => productD.brand as string,
              ),
            ),
          ],
        },
        {
          category: 'Model',
          options: [
            ...new Set(
              product?.data.map(
                (productD: ProductData) => productD.model as string,
              ),
            ),
          ],
        },
        {
          category: 'Price Range',
          options: ['Below $100', '$100 - $500', '$500 - $1000', 'Above $1000'],
        },
        {
          category: 'In Stock',
          options: ['In Stock', 'Out of Stock'],
        },
      ]
      setFilters(extractedFilters)
    }
  }, [product, isLoading])

  const toggleFilter = (category: string, option: string) => {
    setSelectedFilters((prevFilters: SelectedFilters) => {
      const categoryFilters = prevFilters[category] || []
      if (categoryFilters.includes(option)) {
        return {
          ...prevFilters,
          [category]: categoryFilters.filter(item => item !== option),
        }
      } else {
        return {
          ...prevFilters,
          [category]: [...categoryFilters, option],
        }
      }
    })
  }

  console.log('Cart:', cart)
  if (isLoading) return <div>Loading...</div>

  const renderStars = (rating: number) => {
    return <Rating rating={rating} maxStars={5} />
  }

  return (
    <div>
      <UiBrreadcrumbs breadcrumbs={breadcrumbsData} />
      <div className="font-sans  max-w-screen-2xl mx-auto md:px-8 ">
        <section className="lg:flex gap-5">
          {/* category filter */}
          <div className="lg:w-[25%] lg:block hidden py-20">
            <div className="p-4 w-64 bg-white border rounded-md shadow">
              {filters.map(filter => (
                <div key={filter.category} className="mb-4">
                  {/* Category Title */}
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-semibold">{filter.category}</h3>
                    <button className="text-sm text-gray-500 hover:text-gray-700">
                      -
                    </button>
                  </div>
                  <hr className="mb-3" />
                  {/* Filter Options */}
                  <div className="space-y-2">
                    {filter.options.map(option => (
                      <div key={option} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={`${filter.category}-${option}`}
                          onChange={() => toggleFilter(filter.category, option)}
                          className="h-4 w-4 text-blue-500 rounded border-gray-300 focus:ring-2 focus:ring-blue-300"
                        />
                        <label
                          htmlFor={`${filter.category}-${option}`}
                          className="text-sm text-gray-800 cursor-pointer"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* category products */}
          <div className="lg:w-[75%]">
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
                          {renderStars(4)}
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
                        onClick={() => dispatch(addToCart(product))}
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
        </section>
      </div>
    </div>
  )
}

export default ShopPage
