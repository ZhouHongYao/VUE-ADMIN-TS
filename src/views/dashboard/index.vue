<template>
  <div class="dashboard-container" :style="{height: height || 'auto'}">
    <div class="info-container">
      <div class="display_name">
        欢迎进入<span class="text-primary"> VUE-ADMIN-TS 系统</span>
      </div>
      <div class="display_title">
        {{ userInfo.name }}({{ userInfo.nickName }})祝您开心每一天！
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'

@Component
export default class Dashboard extends Vue {
  height: string = '';
  activated() {
    this.set()
  }

  get userInfo() {
    return UserModule.userInfo
  }

  set() {
    const userInfo = {
      name: 'admin',
      nickName: 'admin'
    }
    UserModule.setUser(userInfo)
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  position: relative;
}
.info-container {
  position: relative;
  margin-left: 150px;
  .display_name {
    font-size: 36px;
    height: 40px;
    line-height: 40px;
    color: #212121;
    position: absolute;
    top: 120px;
    overflow: hidden;
    white-space: nowrap;
  }
  .display_title {
    position: absolute;
    top: 190px;
    font-size: 18px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    color: gray;
  }
}
</style>
