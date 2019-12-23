<template>
  <div class="dashboard-container" :style="{height:height||'auto'}">
    <div class="info-container">
      <div class="display_name">欢迎进入<span class="text-primary"> VUE-ADMIN-TS 系统</span></div>
      <div class="display_title">祝您开心每一天！</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DashboardAdmin',
  data() {
    return {
      height: null
    }
  },
//   computed: {
//     ...mapState({
//       name: state => state.user.name,
//       username: state => state.user.username
//     })
//   },
  mounted() {
    this.height = document.documentElement.clientHeight - 105 + 'px'
  },
  methods: {
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
