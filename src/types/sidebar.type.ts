import { JSX, ReactNode } from 'react'

export type TRoute = {
  path: string
  element: ReactNode
}


export type TUserPath = {
  path: string
  name: string
  element?: React.ReactNode
  children?: TUserPath[] | undefined
}

export type TSidebarItem = {
  key: string
  label: JSX.Element | string
  children?: TSidebarItem[]
}