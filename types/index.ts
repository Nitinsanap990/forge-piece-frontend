export interface Product {
  id: string
  name: string
  description: string
  price: number
  mrp: number
  images: string[]
  category: 'tshirt' | 'hoodie' | 'accessories'
  sizes: Size[]
  colors: Color[]
  fabric: string
  gsm: string
  weight: string
  features: string[]
  inStock: boolean
  featured: boolean
  slug: string
  video3d?: string // Optional 3D/360° product video URL
}

export interface Size {
  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'
  inStock: boolean
}

export interface Color {
  name: string
  hex: string
  inStock: boolean
}

export interface CartItem {
  product: Product
  quantity: number
  size: string
  color: string
}

export interface User {
  id: string
  name: string
  email: string
  phone?: string
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  shippingAddress: Address
  createdAt: Date
}

export interface Address {
  name: string
  phone: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  pincode: string
  country: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  author: string
  publishedAt: Date
  tags: string[]
}
