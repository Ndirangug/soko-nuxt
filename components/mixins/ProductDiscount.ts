// @ts-nocheck
export const ProductDiscountMixin = {
  computed: {
    percentageDiscountPresent(): boolean {
      return (
        this.product.discount !== undefined &&
        this.product.discount.discountType === 'PERCENTAGE'
      )
    },

    priceBeforeDiscount(): number {
      return this.product.price
    },

    priceAfterDiscount(): number {
      let price = this.priceBeforeDiscount

      if (this.percentageDiscountPresent) {
        const discountValue = price * (this.product.discount.amount / 100)
        price = price - discountValue
      }
      return price
    },

    productPrice(): number {
      let productPrice = this.priceBeforeDiscount

      if (this.percentageDiscountPresent) {
        productPrice = this.priceAfterDiscount
      }

      return productPrice
    },
  },
}
