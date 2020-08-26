<template>
  <div>
    <h1>{{ store }}</h1>
    <nuxt-link :to="switchLocalePath('sw')">swahili</nuxt-link>
    <h4>{{ availableLocales }}</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      store: this.$store.state.internationalization.locale,
    }
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },

  layout: 'alternative',
}
</script>
