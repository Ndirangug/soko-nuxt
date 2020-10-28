import { Customer } from './types'

export type Specifications = { [keys: string]: string }

export interface CustomerReviewSegment {
  productReviewId: number
  customer: Customer
  date: Date
  starRating: number
  reviewMessage: string
}

export interface CountyAndTowns {
  name: string
  towns: string[]
}

export interface RadioOption {
  label: string
  value: string
}

export interface PaymentMethodBadge {
  src: string
  alt: string
}
