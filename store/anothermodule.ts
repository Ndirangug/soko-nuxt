import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ name: 'anothermodule', stateFactory: true, namespaced: true })
export default class AnotherModule extends VuexModule {
  //   wheels = 2               -state
  //   @Mutation                -mutation
  //   incrWheels(extra: number) {
  //     this.wheels += extra
  //   }
  //   get axles() {            -getter
  //     return this.wheels / 2
  //   }
}
