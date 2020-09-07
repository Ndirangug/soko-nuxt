import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
const tabletMaxPx = 768
const phoneMaxPx = 600

export const ScreenSizeMixin = {
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  computed: {
    isLargeScreen(): boolean {
      // @ts-ignore
      return this.$vssWidth > tabletMaxPx
    },
    isTablet(): boolean {
      // @ts-ignore
      return this.$vssWidth > phoneMaxPx && this.$vssWidth <= tabletMaxPx
    },
    isPhone(): boolean {
      // TODO maybe find better fix?
      // @ts-ignore
      return this.$vssWidth <= phoneMaxPx
    },
  },
}
