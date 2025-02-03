import { selectCartItems } from '@/redux/features/cartSlice/cartSlice'
import { useAddOrderMutation } from '@/redux/features/order/orderSlice'
import { useAppSelector } from '@/redux/hooks'
import { useForm } from 'react-hook-form'

interface FormData {
  name: string
  postalCode: string
  paymentMethod: string
}
const CheckoutPage = () => {
  const { register, handleSubmit } = useForm<FormData>()
  const cartItems = useAppSelector(selectCartItems)
  const [addOrder, { isLoading, isError, isSuccess }] =
    useAddOrderMutation(undefined)

  const onSubmit = async (data: FormData) => {
    const orderData = {
      customerName: data.name,
      postalCode: data.postalCode,
      paymentMethod: data.paymentMethod,
      cartItems: cartItems.map(item => ({
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice: cartItems
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2),
    }

    try {
      const response = await addOrder(orderData).unwrap()
      console.log('Order placed successfully', response)
    } catch (error) {
      console.error('Order failed', error)
    }
  }

  return (
    <div className="font-[sans-serif] lg:flex lg:items-center lg:justify-center lg:h-screen max-lg:py-4">
      <div className="bg-green-100 p-8 w-full max-w-5xl max-lg:max-w-xl mx-auto rounded-md">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center">
          Checkout
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-3 gap-6 max-lg:gap-8 mt-16">
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold text-gray-800">
                Choose your payment method
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 mt-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="w-5 h-5 cursor-pointer"
                    id="card"
                    value="Card"
                    {...register('paymentMethod')}
                    defaultChecked
                  />
                  <label
                    htmlFor="card"
                    className="ml-4 flex gap-2 cursor-pointer"
                  >
                    <img
                      src="https://readymadeui.com/images/visa.webp"
                      className="w-12"
                      alt="card1"
                    />
                    <img
                      src="https://readymadeui.com/images/master.webp"
                      className="w-12"
                      alt="card2"
                    />
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="w-5 h-5 cursor-pointer"
                    id="paypal"
                    value="PayPal"
                    {...register('paymentMethod')}
                  />
                  <label
                    htmlFor="paypal"
                    className="ml-4 flex gap-2 cursor-pointer"
                  >
                    <img
                      src="https://readymadeui.com/images/paypal.webp"
                      className="w-20"
                      alt="paypalCard"
                    />
                  </label>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <input
                  type="text"
                  placeholder="Name of card holder"
                  {...register('name')}
                  className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md"
                />
                <input
                  type="number"
                  placeholder="Postal code"
                  {...register('postalCode')}
                  className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md"
                />
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  type="submit"
                  className="px-7 py-3.5 text-sm tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Submit Order'}
                </button>
              </div>

              {isSuccess && (
                <p className="text-green-500 mt-4">
                  Order placed successfully!
                </p>
              )}
              {isError && (
                <p className="text-red-500 mt-4">
                  Order submission failed. Try again.
                </p>
              )}
            </div>

            <div className="bg-white p-6 rounded-md max-lg:-order-1">
              <h3 className="text-lg font-bold text-gray-800">Summary</h3>
              <ul className="text-gray-800 mt-6 space-y-3">
                <li className="flex flex-wrap gap-4 text-sm">
                  Sub total
                  <span className="ml-auto font-bold">
                    $
                    {cartItems
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0,
                      )
                      .toFixed(2)}
                  </span>
                </li>
                <hr />
                <li className="flex flex-wrap gap-4 text-base font-bold">
                  Total
                  <span className="ml-auto">
                    $
                    {cartItems
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0,
                      )
                      .toFixed(2)}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CheckoutPage
