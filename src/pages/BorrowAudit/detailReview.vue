<template>
  <div>
    <div class="nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>分期审核</el-breadcrumb-item>
        <el-breadcrumb-item>审核</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="base">
      <h2>安保套餐信息</h2>
      <div class="anbao">
        <div class="null"></div>
        <div class="title">
          <span>套餐金额　　　　</span>
          <span>15822</span>
        </div>
        <div class="title">
          <span>套餐金额　　　　</span>
          <span>15822</span>
        </div>
        <div class="title">
          <span>套餐金额　　　　</span>
          <span>15822</span>
        </div>
        <div class="title">
          <span>套餐金额　　　　</span>
          <span>15822</span>
        </div>
        <div class="title">
          <span>套餐金额　　　　</span>
          <span>15822</span>
        </div>
        <div class="title">
          <span>套餐金额　　　　</span>
          <span>15822</span>
        </div>
      </div>
      <h2>安保套餐信息</h2>
      <div class="anbao">
        <div class="null"></div>
        <div class="title">
          <span>套餐金额　　　　</span>
          <span>15822</span>
        </div>
        <div class="title">
          <span>套餐金额　　　　</span>
          <span>15822</span>
        </div>
        <div class="title">
          <span>套餐金额　　　　</span>
          <span>15822</span>
        </div>
        <div class="title">
          <span>套餐金额　　　　</span>
          <span>15822</span>
        </div>
        <div class="title">
          <span>套餐金额　　　　</span>
          <span>15822</span>
        </div>
        <div class="title">
          <span>套餐金额　　　　</span>
          <span>15822</span>
        </div>
      </div>
    </div>
    <div class="block" style="margin-top:20px">
      <el-pagination layout="prev, pager, next, jumper" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
.base {
  background: rgb(242, 242, 242);
  h2 {
    font-size: 16px;
    margin-bottom: 15px;
  }
  .null {
    height: 5px;
  }
  .title {
    margin: 10px 0 20px 20px;
    height: 10px;
  }
  .anbao {
    background: white;
    height: 200px;
  }
}
</style>

