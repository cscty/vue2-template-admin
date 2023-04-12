<template>
  <div>
    <Top @changeCollapse="changeCollapse" v-if="isDisplay"></Top>
    <el-container>
      <el-aside :class="{ 'el-collapse': isCollapse }" v-if="isDisplay">
        <el-menu
          :collapse="isCollapse"
          :collapse-transition="false"
          background-color="var(--menu-background-color)"
          text-color="var(--menu-text-color)"
          active-text-color="var(--menu-active-text-color)"
          router
        >
          <el-menu-item v-for="nav in sideData" :key="nav.id" :index="nav.path">
            <i :class="nav.icon"></i>
            <span slot="title">{{ nav.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
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
      isDisplay: !window.__POWERED_BY_QIANKUN__,
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
    ...mapGetters(['sideData']),
  },
}
</script>

<style lang="less">
.el-container {
  height: calc(100vh - 60px);
}
.el-main {
  background-color: var(--main-background-color);
}
.el-menu {
  border-right: 0;
}

.el-aside {
  width: 113px !important;
  height: var(100vh - 60px);
  transition: width 0.5s ease;
  background-color: var(--menu-background-color);
  overflow: hidden;
}

.el-collapse {
  width: 64px !important;
  border: 0;
}

.el-avatar {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
