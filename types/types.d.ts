export interface Customer {
  customerID?: number
  firstName?: string
  LastName?: string
  email?: string
  phone?: string
  dateOfBirth?: string
  gender?: string
}

export interface Testimonial {
  testimonialText: String
  customerName: String
  customerLocation: String
}

interface Product {
  productID: number
  title: string
  description: string
  price: number
  thumbnails: string[]
  images: string[]
}

interface Category {
  title: string
  description: string
  products: Product[]
}
