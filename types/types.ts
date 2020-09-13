export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Email: any
  Phone: any
  Url: any
  DateTime: any
  Username: any
  Password: any
  Upload: any
}

/** Represents a single address already in a customer's addrress book or waiting to be added there */
export type Address = {
  __typename?: 'Address'
  /** An autosequence number uniquely identifying each addrress in the addrress book */
  addressID: Scalars['ID']
  /** First line, possibly a street addrress */
  first_line: Scalars['String']
  /** Seccond line, possibly additional details */
  second_line?: Maybe<Scalars['String']>
  /** County */
  county: Scalars['String']
  /** City or town within the county */
  city: Scalars['String']
  /** Specific area within the mentioned city/town. Possibly an estate name..an area named after a landmark..e.t.c */
  area: Scalars['String']
  /** Reference to the Custmoer to whom this addrress belongs */
  customer: Customer
  /** Shipping options available for this customer */
  shipping_options: Array<ShippingOption>
}

export type AddressInput = {
  addressID?: Maybe<Scalars['ID']>
  firstLine?: Maybe<Scalars['String']>
  secondLine?: Maybe<Scalars['String']>
  county?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  area?: Maybe<Scalars['String']>
}

export enum AuthMethod {
  UsernamePassword = 'USERNAME_PASSWORD',
  Google = 'GOOGLE',
  Facebook = 'FACEBOOK',
}

export type AuthPayload = {
  username: Scalars['Username']
  password: Scalars['Password']
}

/** Strutured response from the auth service(firebase) */
export type AuthResponse = {
  __typename?: 'AuthResponse'
  /** Whether auth attempt was successful */
  wasSuccessful: Scalars['Boolean']
  /** A short success/error message */
  message: Scalars['String']
  /** The auth token to be sent along with api calls to the ERP/CRRM microservice */
  authToken?: Maybe<Scalars['String']>
  /** Thee customer details */
  customer?: Maybe<Customer>
}

/** A product that a customer has added to cart, plus configuration he has chosen */
export type CartItem = {
  __typename?: 'CartItem'
  /** An autosequence number uniquely identifying each CartItem */
  cartItemId: Scalars['ID']
  /** A referrence to the customer to whom this cart item belongs */
  customer: Customer
  /** A referrence to the product that was added to cart */
  product: Product
  /** The ConfigurableOptions the customer chose for this cart item */
  configurableOptions?: Maybe<Array<ConfigurableOption>>
  /** The date and time product was added to cart */
  dateAddedToCart: Scalars['DateTime']
}

export type CartItemInput = {
  productID: Scalars['Int']
  configuration?: Maybe<Array<ConfigurableInput>>
}

/** A category of products */
export type Category = {
  __typename?: 'Category'
  /** An autosequence number uniquely identifying each product */
  categoryID: Scalars['ID']
  /** Category title */
  title: Scalars['String']
  /** Category description */
  description: Scalars['String']
  /** Products in this category */
  products?: Maybe<Array<Product>>
}

/** A chat */
export type Chat = {
  __typename?: 'Chat'
  /** An autosequence number uniquely identifying each chat */
  chatID: Scalars['ID']
  /** The participants */
  participants: Array<ChatParticipant>
  /** All messages sent in this chat */
  messages: Array<Message>
}

/** A ChatParticipant */
export type ChatParticipant =
  | Seller
  | Customer
  | SystemNotificationsAgent
  | CustomerServiceAgent

/**
 * A set of 'configurable_options' for a particular product e.g color, material,
 * fabric. A product may have several 'configurables', each haing
 * a set of options. e.g Configurable `color`:: ConfigurableOptions red, blue,
 * green | Configurable `material`:: ConfigurableOptions wooden, metallic, ceramic
 */
export type Configurable = {
  __typename?: 'Configurable'
  /** An autosequence number uniquely identifying each configurable */
  configurableID: Scalars['ID']
  /** The type of configurable this is..like color, material, fabric */
  configurableType: Scalars['String']
  /** A list of available options this particular 'Configurable' for the particular product its attached to */
  optionsAvailable: Array<ConfigurableOption>
}

/** Configurable Option customer choose */
export type ConfigurableInput = {
  /** The name of the configurable e.g 'material' */
  configurableName: Scalars['String']
  /** Customer's choice e.g 'wooden' */
  customerPreferrence: Scalars['String']
}

/**
 * Configurable Options available for a particular  'Configurable' of a product e.g for configurable 'color'
 * available for a particular product, the configurable options may include red, blue, green. The customer then selects
 * one according to their preferrences
 */
export type ConfigurableOption = {
  __typename?: 'ConfigurableOption'
  /** An autosequence number uniquely identifying each configurable option */
  configurableOptionId: Scalars['ID']
  /** name (or label) of this particular configurable option. This will appear on the UI */
  name: Scalars['String']
  /**
   * URL to a thumbnail that accompananies the UI label for this configurable. e.g
   * for a configurable option 'red', a thumbnail of red
   */
  thumbnailUrl: Scalars['Url']
}

/** A customer, their biodata and everything related to them: their orders, history, payments they've made..e.t.c */
export type Customer = {
  __typename?: 'Customer'
  /** An autosequence number uniquely identifying each customer */
  customerID: Scalars['ID']
  /** Customer's first name */
  firstName: Scalars['String']
  /** Customer's last name */
  lastName: Scalars['String']
  /** Customer email */
  email?: Maybe<Scalars['Email']>
  /** Customer phone */
  phone?: Maybe<Scalars['Phone']>
  /** Url to customer's avatar */
  avatarUrl: Scalars['Url']
  /** List of addresses the customer has added to their address book */
  addresses?: Maybe<Array<Address>>
  /**
   * Token(possibly JWT or other) received from firebase auth  after successful authentication.
   * To be sent along with api calls to the ERP/CRRM microservice in order to
   * authorize requests for customer information retrieval.
   * A customer may retrieve only their own inforation, hence the token authorization
   */
  authToken?: Maybe<Scalars['String']>
  /** Male or Female */
  gender?: Maybe<Gender>
  /** Customer date of birth */
  dateOfBirth?: Maybe<Scalars['DateTime']>
  /** All orders made by this customer */
  orders?: Maybe<Array<Order>>
  /** All sellers a customer follows */
  sellersFollowing?: Maybe<Array<Seller>>
  /** Customer's email prreferences */
  emailPreferrencs: EmailPreferrencs
  /** All products customer has viewed in the past */
  viewedProducts?: Maybe<Array<ProductView>>
  /** All payments made by this customer */
  payments?: Maybe<Array<Payment>>
  /** All vouchers this customer is eligible for */
  vouchersEligible?: Maybe<Array<Voucher>>
  /** All vouchers this customer has used in the past */
  vouchersUsed?: Maybe<Array<Voucher>>
  /** Vouchers claimed by this customer but still unused */
  vouchersUnused?: Maybe<Array<Voucher>>
  /** Items in cart for this customer */
  cartItems?: Maybe<Array<CartItem>>
  /** All chats that this customer is a participant */
  chats?: Maybe<Array<Chat>>
  /** All product reviews by this custmoer */
  productReviews?: Maybe<Array<ProductReview>>
  /**
   * Categories that this  customer is 'watching' i.e wants to receive updates concerning products
   * in this category
   */
  watchedCategories?: Maybe<Array<Scalars['String']>>
  /**
   * Specific products that this  customer is 'watching' i.e wants to receive updates concerning these
   * specific products
   */
  watchedProducts?: Maybe<Array<Product>>
}

export type CustomerDetails = {
  customerID: Scalars['ID']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['Email']>
  phone?: Maybe<Scalars['Phone']>
  dateOfBirth?: Maybe<Scalars['DateTime']>
  gender?: Maybe<Gender>
}

export type CustomerServiceAgent = {
  __typename?: 'CustomerServiceAgent'
  /** An autosequence number uniquely identifying each agent */
  agentID: Scalars['ID']
  /** First Name */
  firstName: Scalars['String']
  /** Last Name */
  lastName: Scalars['String']
  /** The role of this agent e.g product manager */
  role: Scalars['String']
  /** Url to agent's avatar */
  avatarUrl: Scalars['Url']
}

/** A Discount */
export type Discount = {
  __typename?: 'Discount'
  /** Amount to be discountt */
  amount: Scalars['Float']
  /** Whether the amount specified should be handled as a percentage or a real value */
  discountType: DiscountType
}

/** The type of discount i.e percentage discount or a real value discount */
export enum DiscountType {
  Percentage = 'PERCENTAGE',
  Absolute = 'ABSOLUTE',
}

/**
 * A search filter that may be applied when searching products in a particular category.
 * Some filters may be applicable to certain categories of products but inapplicable to others
 */
export type DynamicFilter = {
  __typename?: 'DynamicFilter'
  /** The name of this filter i.e what it is filtering e.g color, material e.t.c */
  filterName: Scalars['String']
  /** Set of values that this filter presents to the customer for filtering e.g for a color filter: red, blue, green */
  values?: Maybe<Array<Scalars['String']>>
  /** Whether the user is allowed to select multiple values or only one i.e checkbox or radiobutton */
  multipleSelectionAllowed: Scalars['Boolean']
}

/** Customer's selection from a DynamicFilter */
export type DynamicFilterInput = {
  /** The name of the filter e.g color */
  filterName: Scalars['String']
  /** The value(s) customer chose e.g red, blue */
  values?: Maybe<Array<Scalars['String']>>
  /**
   * Condition to be used to filter products accordingg to customer's input
   * e.g where a user chose option '3 stars' from filter 'prroduct rating, the condition could be 'greater than'
   * to return products that have a rating of 3 stars or above
   */
  condition: FilterCondition
}

/**
 * An Instance of email preferrences for a certain customer.Each of the fields rrepresents
 * an option and whether its enabled for this user
 */
export type EmailPreferrencs = {
  __typename?: 'EmailPreferrencs'
  emailPreferrencsId: Scalars['ID']
  everythingFromAllSellers?: Maybe<Scalars['Boolean']>
  everythingFromFollowedSellers?: Maybe<Scalars['Boolean']>
  everythingFromWatchedCategories?: Maybe<Scalars['Boolean']>
  everythingFromWatchedProducts?: Maybe<Scalars['Boolean']>
  productUpdatesFromFollowedSellers?: Maybe<Scalars['Boolean']>
  allBlogPosts?: Maybe<Scalars['Boolean']>
  subscribedBlogPosts?: Maybe<Scalars['Boolean']>
  flashSales?: Maybe<Scalars['Boolean']>
  orderDeliveryNotifications?: Maybe<Scalars['Boolean']>
  systemNotifications?: Maybe<Scalars['Boolean']>
}

export enum FilterCondition {
  Equal = 'EQUAL',
  LessThanOrEqual = 'LESS_THAN_OR_EQUAL',
  LessThan = 'LESS_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  GreaterThan = 'GREATER_THAN',
}

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
}

/** GPS coordinates */
export type Location = {
  __typename?: 'location'
  /** latitude */
  latitude: Scalars['Float']
  /** longitude */
  longitude: Scalars['Float']
}

/** A message */
export type Message = {
  __typename?: 'Message'
  /** An autosequence number uniquely identifying each message */
  messageID: Scalars['ID']
  /** Recepient */
  to: ChatParticipant
  /** Sender */
  from: ChatParticipant
  /** Date and time message was sent */
  dateTime: Scalars['DateTime']
  /** The message contents */
  messageText: Scalars['String']
  /** Urls to attachments sent along with message */
  attachments?: Maybe<Array<Scalars['Url']>>
}

/** Set of payment methods that may be used to make a payment */
export enum MethodOfPayment {
  Bank = 'BANK',
  Mpesa = 'MPESA',
  Cash = 'CASH',
  Mastercard = 'MASTERCARD',
  Visa = 'VISA',
}

/** The method used to pay as well as mobile number or credit card number used */
export type ModeOfPayment = {
  __typename?: 'ModeOfPayment'
  /** The method used to pay */
  method: MethodOfPayment
  /** Mobile number or credit card number used */
  ref: Scalars['String']
}

/**
 * MethodOfPayment and mobile number or account number through which the money was sent
 * back to  the custtomer
 */
export type ModeOfRefund = {
  __typename?: 'ModeOfRefund'
  /** The method used to pay */
  method: MethodOfPayment
  /** mobile number or credit card number the money is reversed to */
  ref: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  logInCustomer: AuthResponse
  signUpCustomer: AuthResponse
  updateCustomer: Customer
  deleteCustomer?: Maybe<Scalars['Boolean']>
  changeCustomerPassword: Scalars['Boolean']
  enableorDisableTwoFactorAuthentication: Scalars['Boolean']
  updateEmailPreferences: EmailPreferrencs
  authorizeCustomerAction?: Maybe<Scalars['Boolean']>
  addAddress: Address
  updateAddress: Address
  removeAddress: Scalars['Boolean']
  updateCart: Array<CartItem>
  removeCartItem: Scalars['Int']
  addItemToCart: Scalars['Int']
  removeSavedItem: Scalars['Int']
  addProductToSavedItems: Scalars['Int']
  placeOrder: Scalars['String']
  updateOrder: Order
  cancelOrder: Scalars['Boolean']
  claimVoucher: Scalars['Boolean']
  applyVoucher: Scalars['Boolean']
  addProductReview: ProductReview
  deleteProductReview: Scalars['Boolean']
  sendMessage: Message
  deleteMessage: Scalars['Boolean']
  followSeller: Scalars['Boolean']
  unFollowSeller: Scalars['Boolean']
  makePayment: Payment
  applyRefund?: Maybe<Scalars['Boolean']>
  uploadPhotos?: Maybe<Array<Scalars['Url']>>
  watchCategory?: Maybe<Scalars['Boolean']>
  watchProduct?: Maybe<Scalars['Boolean']>
}

export type MutationLogInCustomerArgs = {
  authMethod: AuthMethod
  usernamePassword?: Maybe<AuthPayload>
}

export type MutationSignUpCustomerArgs = {
  authMethod: AuthMethod
  usernamePassword?: Maybe<AuthPayload>
}

export type MutationUpdateCustomerArgs = {
  customerDetails: CustomerDetails
}

export type MutationDeleteCustomerArgs = {
  customerID: Scalars['Int']
}

export type MutationChangeCustomerPasswordArgs = {
  customerId: Scalars['Int']
  username?: Maybe<Scalars['String']>
  oldPassword?: Maybe<Scalars['Password']>
  newPassword?: Maybe<Scalars['Password']>
}

export type MutationEnableorDisableTwoFactorAuthenticationArgs = {
  customerID: Scalars['Int']
  enable?: Maybe<Scalars['Boolean']>
}

export type MutationUpdateEmailPreferencesArgs = {
  customerID: Scalars['Int']
  emailPreferrencsId: Scalars['ID']
}

export type MutationAuthorizeCustomerActionArgs = {
  customerID: Scalars['Int']
}

export type MutationAddAddressArgs = {
  customerID: Scalars['Int']
  address: AddressInput
}

export type MutationUpdateAddressArgs = {
  customerID: Scalars['Int']
  address: AddressInput
}

export type MutationRemoveAddressArgs = {
  customerID: Scalars['Int']
  address: AddressInput
}

export type MutationUpdateCartArgs = {
  customerID: Scalars['Int']
  productID: Scalars['Int']
  configuration?: Maybe<Array<ConfigurableInput>>
}

export type MutationRemoveCartItemArgs = {
  customerID: Scalars['Int']
  cartItemId: Scalars['Int']
}

export type MutationAddItemToCartArgs = {
  customerID: Scalars['Int']
  item: CartItemInput
}

export type MutationRemoveSavedItemArgs = {
  customerID: Scalars['Int']
  savedItemId: Scalars['Int']
}

export type MutationAddProductToSavedItemsArgs = {
  customerID: Scalars['Int']
  productID: Scalars['Int']
}

export type MutationPlaceOrderArgs = {
  customerID: Scalars['Int']
  orderItems: Array<CartItemInput>
}

export type MutationUpdateOrderArgs = {
  customerID: Scalars['Int']
  orderID: Scalars['Int']
  orderItems: Array<CartItemInput>
}

export type MutationCancelOrderArgs = {
  customerID: Scalars['Int']
  orderID: Scalars['Int']
}

export type MutationClaimVoucherArgs = {
  customerID: Scalars['Int']
  voucherID: Scalars['Int']
}

export type MutationApplyVoucherArgs = {
  customerID: Scalars['Int']
  voucherID: Scalars['Int']
}

export type MutationAddProductReviewArgs = {
  customerID: Scalars['Int']
  productID: Scalars['Int']
  review: Scalars['String']
}

export type MutationDeleteProductReviewArgs = {
  customerID: Scalars['Int']
  productReviewId: Scalars['Int']
}

export type MutationSendMessageArgs = {
  senderID: Scalars['Int']
  recepientID: Scalars['Int']
  message: Scalars['String']
}

export type MutationDeleteMessageArgs = {
  deleterID: Scalars['Int']
  messageID: Scalars['Int']
}

export type MutationFollowSellerArgs = {
  customerID: Scalars['Int']
  sellerID: Scalars['Int']
}

export type MutationUnFollowSellerArgs = {
  customerID: Scalars['Int']
  sellerID: Scalars['Int']
}

export type MutationMakePaymentArgs = {
  customerID: Scalars['Int']
  paymentAmount: Scalars['Float']
  orderID: Scalars['Int']
}

export type MutationApplyRefundArgs = {
  customerID: Scalars['Int']
  orderItemId: Scalars['Int']
  reason: Scalars['String']
  attachments?: Maybe<Array<Scalars['Url']>>
}

export type MutationUploadPhotosArgs = {
  photos?: Maybe<Array<Scalars['Upload']>>
  purpose?: Maybe<PhotoPurpose>
}

export type MutationWatchCategoryArgs = {
  customerID: Scalars['Int']
  categoryName?: Maybe<Scalars['String']>
}

export type MutationWatchProductArgs = {
  customerID: Scalars['Int']
  productID?: Maybe<Scalars['Int']>
}

/** An Order information related to the order */
export type Order = {
  __typename?: 'Order'
  /** An autosequence number uniquely identifying each Order */
  orderID: Scalars['ID']
  /**
   * A unique alphanumeric sequence identifier for each order.Certain information on the
   * order and its delivery or any other info could be encoded into this identifier
   */
  orderNumber: Scalars['String']
  /** The specific items included in this order */
  orderItems?: Maybe<Array<OrderItem>>
  /** The date and time this order was placed */
  date: Scalars['DateTime']
  /** Payment(s) made for this order. Payments may be more than one in case of installments */
  payment?: Maybe<Array<Payment>>
  /** A referrence to the customer who placed this order */
  customer: Customer
  /** Amount customer was to pay before applying voucher */
  amountDueBeforeVoucher: Scalars['Float']
  /** Amount customer is to pay after applying voucher */
  amountDueAfterVoucher: Scalars['Float']
  /** Vouchers applied to the order as a whole rather than individual order items */
  vouchersApplied?: Maybe<Array<Voucher>>
}

/** A product included in an order, together  with the configuration options customer chose */
export type OrderItem = {
  __typename?: 'OrderItem'
  /** An autosequence number uniquely identifying each OrderItem */
  orderItemId: Scalars['ID']
  /** A referrence to the product that was ordered */
  product: Product
  /** The ConfigurableOptions the customer chose for this order item */
  configurableOptions?: Maybe<Array<ConfigurableOption>>
  /** Amount customer was to pay before applying voucher */
  amountDueBeforeVoucher: Scalars['Float']
  /** Amount customer is to pay after applying voucher */
  amountDueAfterVoucher: Scalars['Float']
  /**
   * Vouchers applied to a specific order item eg a discount voucher offered by a
   * particular seller for a particular kind of product
   */
  vouchersApplied?: Maybe<Array<Voucher>>
  /** List of all order status updates for this order-item */
  orderItemStatus?: Maybe<Array<OrderStatusUpdate>>
}

/** Set of statuses an order may be in */
export enum OrderStatus {
  PendingConfirmation = 'PENDING_CONFIRMATION',
  PendingFulfilment = 'PENDING_FULFILMENT',
  InTransit = 'IN_TRANSIT',
  AwaitingPickup = 'AWAITING_PICKUP',
  PendingReview = 'PENDING_REVIEW',
  Complete = 'COMPLETE',
}

/** A status update for an order */
export type OrderStatusUpdate = {
  __typename?: 'OrderStatusUpdate'
  /** An autosequence number uniquely identifying each OrderItem */
  orderStatusId: Scalars['ID']
  /** The status that the order has been updatee to */
  status: OrderStatus
  /** Time the OrderStatus has been updated */
  date: Scalars['DateTime']
}

/** A package. Contains several order items */
export type Package = {
  __typename?: 'Package'
  /** An autosequence number uniquely identifying each Package */
  packageID: Scalars['ID']
  /** The specific items included in this Package */
  orderItems: Array<OrderItem>
  /** Last reported location of this pacKage(Reported in GPS coordinates) */
  location?: Maybe<Location>
}

export type Pagination = {
  start?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
}

/** A payment made by a customer */
export type Payment = {
  __typename?: 'Payment'
  /** An autosequence number uniquely identifying each Payment */
  paymentID: Scalars['ID']
  /** Amount paid */
  amount: Scalars['Float']
  /** Unique alphanumeric code generated for this payment */
  transactionCode: Scalars['String']
  /** The date and time this payment was made */
  dateTime: Scalars['DateTime']
  /** A referrence to the customer who made this payment */
  paidBy: Customer
  /** A referrence to the seller who is to receive this payment */
  paidTo: Seller
  /** A referrence to the order for which this payment was made */
  order: Order
  /** shows the method used to pay as well as mobile number or credit card number used */
  modeOfPayment: ModeOfPayment
  /** Whether the payment was successfuly received and confirmed */
  paymentStatus: PaymentStatus
}

/** A record of a payment reversal */
export type PaymentReversal = {
  __typename?: 'PaymentReversal'
  /** An autosequence number uniquely identifying each Payment */
  paymentReversalId: Scalars['ID']
  /** The date and time this payment reversal was completed */
  dateTime: Scalars['DateTime']
  /** Reference to the payment this reversal was requested for */
  payment?: Maybe<Payment>
  /**
   * MethodOfPayment and mobile number or account number through which the money was sent
   * back to  the custtomer
   */
  modeOfRefund: ModeOfRefund
  /** Whether the payment reversal was successfuly processed */
  paymentReversalStatus: PaymentStatus
}

/** States that a payment could be in after submission by customer */
export enum PaymentStatus {
  Successful = 'SUCCESSFUL',
  Failed = 'FAILED',
  PendingConfirmation = 'PENDING_CONFIRMATION',
  Denied = 'DENIED',
}

/** Purpose for which a photo was uploaded. Determiines CDN directory where it is to be stored */
export enum PhotoPurpose {
  Avatar = 'AVATAR',
  ProductReview = 'PRODUCT_REVIEW',
  ApplyRefund = 'APPLY_REFUND',
  ApplyOtherAftersale = 'APPLY_OTHER_AFTERSALE',
}

/** A product listed in the catalogue */
export type Product = {
  __typename?: 'Product'
  /** An autosequence number uniquely identifying each product */
  productID: Scalars['ID']
  /** Product title */
  title: Scalars['String']
  /** Product short_description */
  shortDescription: Scalars['String']
  /** Product price */
  price: Scalars['Float']
  /** Product discount */
  discount?: Maybe<Discount>
  /** Urls to product images */
  images: Array<Scalars['Url']>
  /** Urls to product thumbnails */
  thumbnails: Array<Scalars['Url']>
  /** Urls to product description_document */
  descriptionDocument: Scalars['Url']
  /** Product description_text */
  descriptionText: Scalars['String']
  /** Configurables for this product..e.g color, material e.t.c */
  configurables?: Maybe<Array<Configurable>>
  /** Product reviews */
  productReviews?: Maybe<Array<ProductReview>>
  /** Reference to seller selling this product */
  seller: Seller
  /** Product overall_rating */
  productOverallRating: ProductOverallRating
  /** Products related to this one */
  relatedProducts: Array<Product>
  /** Similar products from other sellers */
  similarFromOtherSellers?: Maybe<Array<Product>>
  /** vouchers that may be applied to this product */
  vouchersApplicable?: Maybe<Array<Voucher>>
  /** Inventory items remaining for this produuct */
  inventoryRemaining: Scalars['Int']
  /** Categories and sub-categories this product falls under */
  categories?: Maybe<Array<Category>>
  /** Classification tags attached to this product */
  tags?: Maybe<Array<Scalars['String']>>
}

/** A Product's overral rating averaged over all its reviews */
export type ProductOverallRating = {
  __typename?: 'ProductOverallRating'
  /** Overrall score as a number between 0 and 5 */
  overallScore: Scalars['Float']
  /** Total number of ratings from customers that the overall score was averaged over */
  numberOfRatings: Scalars['Int']
  /** Total number of customers who gave a 5 star rating to the product this data represents */
  fiveStar: Scalars['Int']
  /** Total number of customers who gave a 4 star rating to the product this data represents */
  fourStar: Scalars['Int']
  /** Total number of customers who gave a 3 star rating to the product this data represents */
  threeStar: Scalars['Int']
  /** Total number of customers who gave a 2 star rating to the product this data represents */
  twoStar: Scalars['Int']
  /** Total number of customers who gave a 1 star rating to the product this data represents */
  oneStar: Scalars['Int']
}

/** An Instance of a product review done by a customer */
export type ProductReview = {
  __typename?: 'ProductReview'
  /** An autosequence number uniquely identifying each ProductReview */
  productReviewId: Scalars['ID']
  /** A referrence to the customer who did this review */
  customer: Customer
  /** The date this review was posted */
  date: Scalars['DateTime']
  /** The star rating given by the customer in this review; a number between 1 and 5 */
  starRating: Scalars['Int']
  /** The actual review written by the customer */
  reviewMessage: Scalars['String']
  /** Urls to Images the customer may have attached tow the review */
  attachments?: Maybe<Array<Scalars['Url']>>
  /** Reference to the reply given by this product's seller */
  reply?: Maybe<ProductReviewReply>
  /** Reference to the product reviewed */
  productReviewed: Product
}

/** A reply given for a product review */
export type ProductReviewReply = {
  __typename?: 'ProductReviewReply'
  /** an autosequence number uniquely identifying each ProductReviewReply */
  productReviewsReplyId: Scalars['ID']
  /** A referrence to the seller who gave this reply review */
  seller: Seller
  /** The date this reply was posted */
  date: Scalars['DateTime']
  /** The actual reply written by the seller */
  replyMessage: Scalars['String']
}

export type ProductsFilter = {
  category?: Maybe<Scalars['String']>
  maxPrice?: Maybe<Scalars['Int']>
  minPrice?: Maybe<Scalars['Int']>
  minSellerScore?: Maybe<Scalars['Int']>
  minProductRating?: Maybe<Scalars['Int']>
  minDiscountPercentage?: Maybe<Scalars['Int']>
  otherFilters?: Maybe<Array<DynamicFilterInput>>
}

/** An historical record of a particular customer viewing a particular item. */
export type ProductView = {
  __typename?: 'ProductView'
  /** An autosequence number uniquely identifying each ProductView */
  productViewId: Scalars['ID']
  /** When the customer began viewing the product */
  startView: Scalars['DateTime']
  /** When the customer finished viewing the product */
  stopView: Scalars['DateTime']
  /** A reference to the product that was viewed */
  product: Product
}

export type Query = {
  __typename?: 'Query'
  /** View everything related to a customer. Their profile, history, cart, saved items..e.t.c */
  customer?: Maybe<Customer>
  /** View everything related to a product. details, price, discounts, delivery info e.t.c */
  viewProductDetails: Product
  /** View everything related to a seller. Their profile, products, ..e.t.c */
  seller?: Maybe<Seller>
  /** View all products matching the criteria you specify */
  products?: Maybe<Array<Product>>
  /** Get a list of categories */
  categories: Array<Category>
  /** shipping options available for a given addrress */
  getShippingOptions: Array<ShippingOption>
  /** Get all search filters available for products in a given category */
  getAvailableFilters?: Maybe<Array<DynamicFilter>>
}

export type QueryCustomerArgs = {
  customerID: Scalars['Int']
}

export type QueryViewProductDetailsArgs = {
  productID: Scalars['Int']
}

export type QuerySellerArgs = {
  sellerID: Scalars['Int']
}

export type QueryProductsArgs = {
  filter: ProductsFilter
  sort?: Maybe<SortOptions>
  pagination?: Maybe<Pagination>
}

export type QueryCategoriesArgs = {
  categoryId?: Maybe<Scalars['Int']>
  pagination?: Maybe<Pagination>
}

export type QueryGetShippingOptionsArgs = {
  town: Scalars['String']
  area?: Maybe<Scalars['String']>
}

export type QueryGetAvailableFiltersArgs = {
  categoryId: Scalars['Int']
}

/** A seller */
export type Seller = {
  __typename?: 'Seller'
  /** An autosequence number uniquely identifying each seller */
  sellerID: Scalars['ID']
  /** Seller Name */
  sellerName: Scalars['String']
  /** Location from which seller dispatches goods */
  dispatchLocation: Scalars['String']
  /** Averaged seller score */
  sellerScore: Scalars['Float']
  /** All products this seller sells */
  products: Array<Product>
  /** Chats in which this seller is a participant */
  chats?: Maybe<Array<Chat>>
  /** Vouchers that this customer is offerring */
  vouchers?: Maybe<Array<Voucher>>
  /** Customers following this seller */
  customersFollowing?: Maybe<Array<Customer>>
}

/** Shipping options available for a particular addrress */
export type ShippingOption = {
  __typename?: 'ShippingOption'
  /** An autosequence number uniquely identifying each ShippingOption */
  shippingOptionId: Scalars['ID']
  /** The cost of this shipping option */
  cost: Scalars['Float']
  /** A description of this shipping option */
  description: Scalars['String']
  /** The title of this shipping option */
  title: Scalars['String']
  /** The estimated delivery date of this shipping option */
  estimatedDeliveryDate: Scalars['DateTime']
}

export enum SortOptions {
  PriceAscending = 'PRICE_ASCENDING',
  PriceDescending = 'PRICE_DESCENDING',
  Popularity = 'POPULARITY',
  ProductRating = 'PRODUCT_RATING',
  SellerRating = 'SELLER_RATING',
}

export type Subsription = {
  __typename?: 'Subsription'
  placeholder: Scalars['String']
}

/** An 'agent' sending system notifications to customer */
export type SystemNotificationsAgent = {
  __typename?: 'SystemNotificationsAgent'
  /** An autosequence number uniquely identifying each 'agent' */
  agentID: Scalars['ID']
  /** The role of this 'agent' */
  role: Scalars['String']
  /** The name of this 'agent' */
  name: Scalars['String']
  /** Url to 'agent's' avatar */
  avatarUrl: Scalars['Url']
}

/** A voucher */
export type Voucher = {
  __typename?: 'Voucher'
  /** An autosequence number uniquely identifying each Payment */
  voucherID: Scalars['ID']
  /** The voucher code the customer is to apply */
  voucherCode: Scalars['String']
  rule: Scalars['String']
  /** Short description of the terms of this voucher */
  description: Scalars['String']
  /** Products that this voucher may be applied to */
  productsApplicable: Array<Product>
  /** The sellers offering this discount */
  seller: Array<Seller>
  /** The date this voucher was made available to customers */
  dateStarted: Scalars['DateTime']
  /** The date this voucher is to expire */
  dateExpire: Scalars['DateTime']
  /** Whether this voucher can be used with others or has to be used alone */
  voucherType: VoucherType
  /** The discount offered by this  voucher */
  discount: Discount
  /** Whether to apply on an order or an order-item */
  applyOnOrder: Scalars['Boolean']
}

/** Whether a voucher can be used with several others or its use has been restricted */
export enum VoucherType {
  /** An exclusive voucher can only be applied if no other exclusive vouchers have been applied */
  Exclusive = 'EXCLUSIVE',
  /** An inclusive voucher can be applied alongside another exclusive one and other inclusive ones */
  Inclusive = 'INCLUSIVE',
}

export type LogInMutationVariables = Exact<{
  authMethod: AuthMethod
  authPayload?: Maybe<AuthPayload>
}>

export type LogInMutation = { __typename?: 'Mutation' } & {
  logInCustomer: { __typename?: 'AuthResponse' } & Pick<
    AuthResponse,
    'wasSuccessful' | 'message' | 'authToken'
  > & {
      customer?: Maybe<
        { __typename?: 'Customer' } & Pick<
          Customer,
          'customerID' | 'first_name' | 'last_name' | 'avatarUrl'
        >
      >
    }
}

export type CategoriesQueryVariables = Exact<{
  categoryId?: Maybe<Scalars['Int']>
  pagination?: Maybe<Pagination>
}>

export type CategoriesQuery = { __typename?: 'Query' } & {
  categories: Array<
    { __typename?: 'Category' } & Pick<Category, 'title' | 'description'> & {
        products?: Maybe<
          Array<
            { __typename?: 'Product' } & Pick<
              Product,
              | 'productID'
              | 'title'
              | 'short_description'
              | 'price'
              | 'thumbnails'
            >
          >
        >
      }
  >
}

export type CustomerQueryVariables = Exact<{
  customerID: Scalars['Int']
}>

export type CustomerQuery = { __typename?: 'Query' } & {
  customer?: Maybe<
    { __typename?: 'Customer' } & Pick<
      Customer,
      'first_name' | 'last_name' | 'email' | 'dateOfBirth' | 'gender'
    >
  >
}
