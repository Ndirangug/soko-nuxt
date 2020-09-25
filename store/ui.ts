import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ name: 'ui', stateFactory: true, namespaced: true })
export default class UI extends VuexModule {
  isNavDrawerOpen = false
  darkMode = false

  @Mutation
  toggleNavDrawer(isOpen: boolean) {
    this.isNavDrawerOpen = isOpen
  }

  @Mutation
  toggleDarkMode(isDarkMode: boolean) {
    this.darkMode = isDarkMode
  }
}
