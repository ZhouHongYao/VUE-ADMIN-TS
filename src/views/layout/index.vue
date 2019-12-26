<template>
  <div :class="classObj" class="app-wrapper">
    <app-main />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { DeviceType, AppModule } from '@/store/modules/app'
import ResizeMixin from './mixin/resize'
import AppMain from './components/AppMain.vue'

@Component({
  name: 'Layout',
  components: {
    AppMain
  }
})
export default class extends mixins(ResizeMixin) {
  get classObj() {
    return {
      hideSidebar: !this.sidebar.opened,
      openSidebar: this.sidebar.opened,
      withoutAnimation: this.sidebar.withoutAnimation,
      mobile: this.device === DeviceType.Mobile
    }
  }
}
</script>
