import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
const tabletMaxPx = 768
const phoneMaxPx = 600

enum ScreenSize {
  LARGE_SCREEN,
  TABLET,
  PHONE,
}

export const ScreenSizeMixin = {
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  data() {
    return {
      ScreenSize,
    }
  },
  computed: {
    screenSize(): ScreenSize {
      // @ts-ignore
      if (this.$vssWidth > tabletMaxPx) {
        return ScreenSize.LARGE_SCREEN
        // @ts-ignore
      } else if (this.$vssWidth > phoneMaxPx && this.$vssWidth <= tabletMaxPx) {
        return ScreenSize.TABLET
      } else {
        return ScreenSize.PHONE
      }
    },
  },
}
