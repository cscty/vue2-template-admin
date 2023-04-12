<template>
  <div class="view-container micro-vue2" id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.micro-vue2 {
  --top-nav: #1d2831;
  --primary-color: #fff;
  --collapse-icon-color: #31b6e4;
  --menu-background-color: #1d2831;
  --menu-active-text-color: red;
  --menu-text-color: #fff;
  --main-background-color: #fff;
}

.view-container {
  width: 100vw;
  height: 100vh;
}
</style>
