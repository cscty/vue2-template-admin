<template>
  <div class="top">
    <div class="left">
      <i class="el-icon-s-operation" @click="changeCollapse"></i>
    </div>
    <div class="right">
      <div class="userInfo">
        <el-avatar :src="''"></el-avatar>
        <span>{{ username }}</span>
        <el-switch
          v-model="dark"
          active-icon-class="el-icon-moon"
          inactive-icon-class="el-icon-sunny"
          active-color="#003856f"
        >
        </el-switch>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isCollapse: false,
      dark: true,
    }
  },
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse
      this.$emit('changeCollapse', this.isCollapse)
    },
  },
  computed: {
    ...mapGetters(['username']),
  },
  watch: {
    dark: {
      handler(newDark) {
        const app = document.querySelector('.micro-vue2')
        if (newDark) {
          console.log(1)
          app.style.setProperty('--top-nav', '#1d2831')
          app.style.setProperty('--primary-color', '#fff')
          app.style.setProperty('--collapse-icon-color', '#31b6e4')
          app.style.setProperty('--menu-background-color', '#1d2831')
          app.style.setProperty('--menu-active-text-color', 'red')
          app.style.setProperty('--menu-text-color', '#fff')
          app.style.setProperty('--main-background-color', '#fff')
        } else {
          app.style.setProperty('--top-nav', '#cda')
          app.style.setProperty('--primary-color', '#000')
          app.style.setProperty('--collapse-icon-color', '#000')
          app.style.setProperty('--menu-background-color', '#cda')
          app.style.setProperty('--menu-active-text-color', 'red')
          app.style.setProperty('--menu-text-color', '#000')
          app.style.setProperty('--main-background-color', '#fff')
        }
      },
      immediate: true,
    },
  },
}
</script>

<style lang="less" scoped>
.el-avatar {
  img {
    width: 100%;
    height: 100%;
  }
}

.top {
  display: flex;
  height: 60px;
  background-color: var(--top-nav);
}

.left {
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 30px;
    cursor: pointer;
    color: var(--collapse-icon-color);
  }
}

.right {
  flex-grow: 1;
  display: flex;
  justify-content: right;
  .userInfo {
    display: flex;
    align-items: center;
    margin-right: 100px;
    height: 100%;
    color: var(--primary-color);
    .el-avatar {
      margin-right: 20px;
    }
    .el-switch {
      margin-left: 20px;
    }
  }
}
</style>
