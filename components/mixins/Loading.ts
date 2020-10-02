/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
export const IsLoadingMixin = {
  data() {
    return {
      isLoading: true,
    }
  },

  created() {
    if (process.browser) {
      window.onNuxtReady((app) => {
        this.isLoading = false
      })
    }
  },
}
