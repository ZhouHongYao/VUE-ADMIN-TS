import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface IUserState {
  userInfo: {
    name: string | null
    nickName: string | null
    phone?: number | null
    sex?: number | null
    email?: string | null
    address?: string | null
    [propName: string]: any
  },
  roles: any[]
}

@Module({ dynamic: true, store, name: 'User' })
class User extends VuexModule implements IUserState {
  public userInfo = {
    name: null,
    nickName: null
  }
  public roles = []

  @Mutation
  private SET_USER(userInfo: any) {
    this.userInfo = userInfo
  }

  @Action
  public setUser(userInfo: any) {
    this.SET_USER(userInfo)
  }
}

export const UserModule = getModule(User)
