<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
.checkManage {
  .el-dialog--small {
    width: 420px;
  }
}
.accountManage {
  .el-form-item__content{
    width: 173px;
  }
  .el-dialog--small {
    width: 370px;
  }
}
.el-button+.el-button{
  margin-left: 0px;
}
</style>
