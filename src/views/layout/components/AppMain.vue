<template>
  <section class="app-main" style="min-height: 100%">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "AppMain"
})
export default class extends Vue {
//   get cachedViews() {
//     return this.$store.state.tagsView.cachedViews;
//   }

  get key() {
    return this.$route.path;
  }
}
</script>

<style lang="scss" scoped>

</style>
