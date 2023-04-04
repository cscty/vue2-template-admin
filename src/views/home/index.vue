<template>
  <div>
    <Top @changeCollapse="changeCollapse" v-if="isDisplay"></Top>
    <el-container>
      <el-menu
        v-if="isDisplay"
        :collapse="isCollapse"
        background-color="#212d38"
        text-color="#fff"
        active-text-color="red"
        router
      >
        <el-menu-item v-for="nav in sideData" :key="nav.id" :index="nav.path">
          <i :class="nav.icon"></i>
          <span slot="title">{{ nav.name }}</span>
        </el-menu-item>
      </el-menu>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Top from '@/components/Top'
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      isCollapse: false,
      isDisplay: window.__POWERED_BY_QIANKUN__,
    }
  },
  components: {
    Top,
  },
  created() {},
  methods: {
    changeCollapse(isCollapse) {
      this.isCollapse = isCollapse
    },
    collapse() {
      this.isCollapse = !this.isCollapse
    },
  },
  computed: {
    ...mapGetters(['displayMenu', 'sideData']),
  },
}
</script>

<style lang="less">
.el-container {
  height: calc(100vh - 60px);
}
.el-main {
  background-color: #fff;
}
.el-menu {
  border-right: 0;
}
.el-avatar {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
