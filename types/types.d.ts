export interface Testimonial {
  testimonialText?: string
  customerName?: string
  customerLocation?: string
}

export interface Customer {
  customerID?: number
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  avatarUrl?: string
  addresses?: CustomerAddress[]
  authToken?: string
  gender?: Gender
  dateOfBirth?: Date
  orders?: Order[]
  sellersFollowing?: Seller[]
  emailPreferrencs?: EmailPreferrencs
  viewedProducts?: ProductView[]
  payments?: Payment[]
  vouchersEligible?: Voucher[]
  vouchersUsed?: Voucher[]
  vouchersUnused?: Voucher[]
  cartItems?: CartItem[]
  chats?: Chat[]
  productReviews?: ProductReview[]
  watchedCategories?: string[]
  watchedProducts?: Product[]
}

export enum Gender {
  MALE,
  FEMALE,
}

export interface CustomerAddress {
  addressID?: number
  firstName?: string
  lastName?: string
  phone?: string
  county?: string
  town?: string
  area?: string
  gpsLocation?: Location
  additionalInformation: string
  customer?: Customer
  shippingOptions?: ShippingOption[]
}

export interface AuthResponse {
  wasSuccessful?: boolean
  message?: string
  authToken?: string
  customer?: Customer
}

export interface EmailPreferrencs {
  emailPreferrencsId?: number
  everythingFromAllSellers?: boolean
  everythingFromFollowedSellers?: boolean
  everythingFromWatchedCategories?: boolean
  everythingFromWatchedProducts?: boolean
  productUpdatesFromFollowedSellers?: boolean
  allBlogPosts?: boolean
  subscribedBlogPosts?: boolean
  flashSales?: boolean
  orderDeliveryNotifications?: boolean
  systemNotifications?: boolean
}

export interface Product {
  productID: number
  title: string
  shortDescription: string
  price: number
  vat: number
  discount: Discount
  images?: string[]
  thumbnails: string[]
  descriptionDocument?: string[]
  descriptionText?: string
  demoUrl?: string
  keyFeatures?: string[]
  mass?: ProductMass
  dimensions?: ProductDimensions
  configurables?: Configurable[]
  productReviews?: ProductReview[]
  packageContents: PackageContent[]
  seller?: Seller
  brand: string
  productOverallRating?: ProductOverallRating
  relatedProducts?: Product[]
  similarFromOtherSellers?: Product[]
  vouchersApplicable?: Voucher[]
  inventoryRemaining?: number
  categories?: Category[]
  tags: string[]
  isFavorited: boolean
}

export interface PackageContent {
  packageContentID: string
  item: string
  quantity: number
}

export interface ProductDimensions {
  length: number
  width: number
  height: number
  units: ProductDimensionsUnits
}

export interface ProductMass {
  value: number
  units: ProductMassUnits
}

type ProductDimensionsUnits = 'M' | 'CM'

type ProductMassUnits = 'KG' | 'G'

export interface Category {
  categoryID?: number
  title?: string
  description?: string
  products?: Product[]
}

export interface DynamicFilter {
  filterName?: string
  values?: string[]
  multipleSelectionAllowed?: boolean
}

export interface ProductView {
  productViewId: number
  startView: Date
  stopView: Date
  product: Product
}

export interface Configurable {
  configurableID: number
  configurableType: string
  optionsAvailable: ConfigurableOption[]
}

export interface ConfigurableOption {
  configurableOptionId: number
  name: string
  thumbnailUrl: string
  configurable: Configurable
}

export interface ProductOverallRating {
  overallScore: number
  numberOfRatings: number
  fiveStar: number
  fourStar: number
  threeStar: number
  twoStar: number
  oneStar: number
}

export interface ProductReview {
  productReviewId: number
  customer: Customer
  date: Date
  starRating: number
  reviewMessage: string
  attachments?: string[]
  reply?: ProductReviewReply
  productReviewed: Product
}

export interface ProductReviewReply {
  productReviewsReplyId?: number
  seller?: Seller
  date?: Date
  replyMessage?: string
}

export interface CartItem {
  cartItemId: number
  customer: Customer
  product: Product
  configurableOptions: ConfigurableOption[]
  dateAddedToCart: Date
  quantity: number
}

export interface Order {
  orderID?: number
  orderNumber?: string
  orderItems?: OrderItem[]
  date?: Date
  payment?: Payment[]
  customer?: Customer
  amountDueBeforeVoucher?: number
  amountDueAfterVoucher?: number
  vouchersApplied?: Voucher[]
}

export interface OrderItem {
  orderItemId?: number
  product?: Product
  configurableOptions?: ConfigurableOption[]
  amountDueBeforeVoucher?: number
  amountDueAfterVoucher?: number
  vouchersApplied?: Voucher[]
  orderItemStatus?: OrderStatusUpdate[]
}

export interface OrderStatusUpdate {
  orderStatusId?: number
  status?: OrderStatus
  date?: Date
}

export enum OrderStatus {
  PENDING_CONFIRMATION,
  PENDING_FULFILMENT,
  IN_TRANSIT,
  AWAITING_PICKUP,
  PENDING_REVIEW,
  COMPLETE,
}

export interface Payment {
  paymentID?: number
  amount?: number
  transactionCode?: string
  dateTime?: Date
  paidBy?: Customer
  paidTo?: Seller
  order?: Order
  modeOfPayment?: ModeOfPayment
  paymentStatus?: PaymentStatus
}

export interface ModeOfPayment {
  method?: MethodOfPayment
  ref?: string // TODO better name
}

export enum MethodOfPayment {
  BANK,
  MPESA,
  CASH,
  MASTERCARD,
  VISA,
}

export enum PaymentStatus {
  SUCCESSFUL,
  FAILED,
  PENDING_CONFIRMATION,
  DENIED,
}

export interface PaymentReversal {
  paymentReversalId?: number
  dateTime?: Date
  payment?: Payment
  modeOfRefund?: ModeOfRefund
  paymentReversalStatus?: PaymentStatus
}

export interface ModeOfRefund {
  method?: MethodOfPayment
  ref?: string
}

export interface Voucher {
  voucherID: number
  voucherCode: string
  rule?: string // TODO  consider this
  description: string
  productsApplicable?: Product[]
  seller: Seller[]
  dateStarted: Date
  dateExpire: Date
  discount: Discount
  applyOnOrder: boolean
}

export interface Discount {
  amount: number
  discountType: DiscountType
}

export type DiscountType = 'PERCENTAGE' | 'ABSOLUTE'

export interface ShippingOption {
  shippingOptionId?: number
  cost: number
  description: string
  estimatedDeliveryDateMin: Date
  estimatedDeliveryDateMax: Date
  deliveryType: DeliveryType
  pickupStation: PickupStation
}

export type DeliveryType = 'DOORSTEP' | 'PICKUP_STATION'

export interface PickupStation {
  nationalID: number
  name: string
  phone: string
  county: string
  town: string
  area: string
  gpsLocation: Location
  operator: PickupStationOperator
}

export interface PickupStationOperator {
  pickupStationOperatorID: number
  firstName: string
  lastName: string
  email: string
  phone: string
  avatarUrl: string
  pickupStation: PickupStation
}

export interface Package {
  packageID?: number
  orderItems?: OrderItem[]
  location?: Location
}

export interface Location {
  latitude?: number
  longitude?: number
}

export interface Seller {
  sellerID?: number
  sellerName?: string
  dispatchLocation?: string
  sellerScore?: number
  products?: Product[]
  chats?: Chat[] // TODO PROBABLY MOVE TO SELLER-FACING API? MAY NOT BE APPROPRIATE IN THIS  CUSTOMER-FACING API
  vouchers?: Voucher[]
  customersFollowing?: Customer[] // TODO PROBABLY MOVE TO SELLER-FACING API? MAY NOT BE APPROPRIATE IN THIS  CUSTOMER-FACING API
}

export interface Chat {
  chatID?: number
  participants?: ChatParticipant[]
  messages?: Message[]
}

export interface Message {
  messageID?: number
  to?: ChatParticipant
  from?: ChatParticipant
  dateTime?: Date
  messageText?: string
  attachments?: string[]
}

export type ChatParticipant =
  | Seller
  | Customer
  | SystemNotificationsAgent
  | CustomerServiceAgent

export interface SystemNotificationsAgent {
  agentID?: number
  role?: string
  name?: string
  avatarUrl?: string
}

export interface CustomerServiceAgent {
  agentID?: number
  firstName?: string
  lastName?: string
  role?: string
  avatarUrl?: string
}

export interface BlogPost {
  blogPostID: number
  title: string
  content: string
  posterImage: string
  blogUrl: string
  tags: string[]
  author: string
  timePublished: Date
}

// Input Types
export enum PhotoPurpose {
  AVATAR,
  PRODUCT_REVIEW,
  APPLY_REFUND,
  APPLY_OTHER_AFTERSALE,
}

export interface AuthPayload {
  username?: string
  password?: string
}

export interface ProductsFilter {
  category?: string
  maxPrice?: number
  minPrice?: number
  minSellerScore?: number
  minProductRating?: number
  minDiscountPercentage?: number
  otherFilters?: DynamicFilterInput[]
}

export interface DynamicFilterInput {
  filterName: string
  values: string[]
  condition: FilterCondition
}

export type FilterCondition =
  | 'EQUAL'
  | 'LESS_THAN_OR_EQUAL'
  | 'LESS_THAN'
  | 'GREATER_THAN_OR_EQUAL'
  | 'GREATER_THAN'

export interface Pagination {
  start: number
  first: number
}

export type SortOptions =
  | 'PRICE_ASCENDING'
  | 'PRICE_DESCENDING'
  | 'POPULARITY'
  | 'PRODUCT_RATING'
  | 'SELLER_RATING'

export type DateSortOptions = 'NEWEST_FIRST' | 'OLDEST_FIRST'

export type ReviewsSortOptions = 'POSITIVE_FIRST' | 'NEGATIVE_FIRST'

export enum AuthMethod {
  USERNAME_PASSWORD,
  GOOGLE,
  FACEBOOK,
}

export interface CustomerDetails {
  customerID?: number
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  dateOfBirth?: Date
  gender?: Gender
}

export interface AddressInput {
  addressID?: number
  firstLine?: string
  secondLine?: string
  county?: string
  city?: string
  area?: string
}

export interface ConfigurableInput {
  configurableName: string
  customerPreferrence: string
}

export interface SponsoredContext {
  productId: number
  customerId: number
}

// Query Variables

export type ProductsQueryVariables = {
  filter: ProductsFilter
  pagination: Pagination
  sort: SortOptions
}

export type CategoriesQueryVariables = { pagination: Pagination }

export type CustomerQueryVariables = { customerId: number }

export type BlogPostQueryVariables = { blogPostID: number }

export type ProductDetailsQueryVariables = { productId: number }
export type ProductDetailsSummaryQueryVariables = ProductDetailsQueryVariables
export type ProductDescriptionQueryVariables = ProductDetailsQueryVariables

export type ProductReviewsQueryVariables = {
  productID: number
  sentiment: string[]
  stars: number[]
  sort: ReviewsSortOptions
  pagination: Pagination
}

export type CartItemsQueryVariables = CustomerQueryVariables

export type CheckVoucherQueryVariables = {
  voucherCode: string
  produdctIds?: string[]
}

export type RecentlyViewedQueryVariables = {
  customerId: number
  startDate: Date
  endDate: Date
  sort: DateSortOptions
}

export type SponsoredQueryVariables = { sponsoredContext: SponsoredContext }

export type MoreFromSameSellerQueryVariables = ProductDetailsQueryVariables

export type PairItUpWithQueryVariables = {
  customerId: number
  productId: number
}

export type CustomerAddressesQueryVariables =
  | CustomerQueryVariables
  | { customerId: number; defaultOnly: boolean }

export type ShippingOptionsQueryVariables = {
  customerId: number
  addressId: number
}

export interface AddAddressMutationVariables {
  customerId: number
  address: {
    firstName: string
    lastName: string
    phone: string
    county: string
    town: string
    area: string
    gpsLocation: {
      latitude: number
      longitude: number
    }
    additionalInformation: string
  }
}

export interface AddToCartMutationVariables {
  item: {
    customerId: number
    productId: number
    configuration: ConfigurableInput[]
  }
}
