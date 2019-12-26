import Vue from 'vue'
import Vuex from 'vuex'
import { IAppState } from './modules/app'
import { ITagsViewState } from './modules/tags-view'
import { IErrorLogState } from './modules/error-log'
import { IPermissionState } from './modules/permission'
import { ISettingsState } from './modules/settings'
import { IPageState } from './modules/page'
import { IUserState } from './modules/user'

Vue.use(Vuex)

export interface IRootState {
  app: IAppState
  tagsView: ITagsViewState
  errorLog: IErrorLogState
  permission: IPermissionState
  settings: ISettingsState
  page: IPageState
  user: IUserState
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
