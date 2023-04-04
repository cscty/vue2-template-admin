<template>
  <div class="top">
    <div class="left" v-if="displayMenu">
      <i class="el-icon-s-operation" @click="changeCollapse"></i>
    </div>
    <div class="right">
      <div class="userInfo">
        <el-avatar :src="''"></el-avatar>
        <span>{{ username }}</span>
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
    }
  },
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse
      this.$emit('changeCollapse', this.isCollapse)
    },
  },
  created() {
    console.log(this.displayMenu)
  },
  computed: {
    ...mapGetters(['username', 'displayMenu']),
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
}

.left {
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 30px;
    cursor: pointer;
    color: #31b6e4;
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
    color: #fff;
    .el-avatar {
      margin-right: 20px;
    }
  }
}
</style>
