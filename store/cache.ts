import { Module, VuexModule } from 'vuex-module-decorators'

@Module({ name: 'cache', stateFactory: true, namespaced: true })
export default class Cache extends VuexModule {}
