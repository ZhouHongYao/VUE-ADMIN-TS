import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface IPageState {
  pageSize: number
}

@Module({ dynamic: true, store, name: 'page' })
class Page extends VuexModule implements IPageState {
  public pageSize = 10

  @Mutation
  private SET_PAGESIZE(pageSize: number) {
    this.pageSize = pageSize
  }
  @Action
  public SetpPageSize(pageSize: number) {
    this.SET_PAGESIZE(pageSize)
  }
}

export const PageModule = getModule(Page)
