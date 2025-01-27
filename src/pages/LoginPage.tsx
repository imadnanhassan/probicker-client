import images from '@/assets/images/images'
import { useAppDispatch } from '@/redux/hooks'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '@/redux/features/auth/authApi'
import { setUser } from '@/redux/features/auth/authSlice'
import { verifyToken } from '@/utils/verifyToken'
import { toast } from 'sonner'
import { JwtPayload } from 'jwt-decode'

const LoginPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<FormData>()
  const [login, { isLoading }] = useLoginMutation()

  interface FormData {
    email: string
    password: string
  }

  interface User extends JwtPayload {
    role?: string
  }

  interface LoginResponse {
    data: {
      accessToken: string
    }
  }

  const onSubmit = async (data: FormData) => {
    console.log('data', data)
    const toastId = toast.loading('Logging in')
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      }

      const res: LoginResponse = await login(userInfo).unwrap()
      const user: User = verifyToken(res.data.accessToken)
      dispatch(setUser({ user: user, token: res.data.accessToken }))
      toast.success('Logged in', { id: toastId, duration: 2000 })
      if (user?.role === 'admin') {
        navigate('/admin/dashboard')
      } else if (user?.role === 'customer') {
        navigate('/customer/dashboard')
      } else {
        navigate('/sign-in')
      }
    } catch {
      toast.error('Invalid email or password', { id: toastId, duration: 2000 })
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        <div className="text-center pb-8">
          <img width={150} className="mx-auto" src={images.headerlogo} />
          <div className="mt-5">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              {...register('password', { required: true })}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                id="remember-me-checkbox"
                className="checkbox-item peer hidden"
              />
              <label
                htmlFor="remember-me-checkbox"
                className="relative flex w-5 h-5 bg-white peer-checked:bg-green-600 rounded-md border ring-offset-2 ring-green-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
              ></label>
              <span>Remember me</span>
            </div>
            <a className="text-center text-green-600 hover:text-green-500">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-600 rounded-lg duration-150"
          >
            {isLoading ? 'Logging in...' : 'Sign in '}
          </button>
        </form>

        <p className="text-center">
          Don't have an account?{' '}
          <Link
            to={'/sign-up'}
            className="font-medium text-green-600 hover:text-green-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
