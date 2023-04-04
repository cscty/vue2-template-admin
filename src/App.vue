<template>
  <div class="view-container" id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  props: ['displayMenu'],
  created() {
    // 主应用传值的话
    if (window.__POWERED_BY_QIANKUN__) {
      this.$store.dispatch('changeDisplayMenu', this.displayMenu)
    }
  },
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}

.view-container {
  width: 100vw;
  height: 100vh;
}
</style>
