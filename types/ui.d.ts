import { Customer } from './types'

export type Specifications = { [keys: string]: string }

export interface CustomerReviewSegment {
  productReviewId: number
  customer: Customer
  date: Date
  starRating: number
  reviewMessage: string
}
