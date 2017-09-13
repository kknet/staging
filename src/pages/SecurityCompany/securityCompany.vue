<template>
  <div>
    <div class="nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>安保公司管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="security-company">
      <div class="element">
        <p>安保公司</p>
        <div>
          <el-input v-model="company" placeholder="请输入安保公司" class="input"></el-input>
        </div>
      </div>
      <div class="element">
        <p>地址</p>
        <v-distpicker></v-distpicker>
      </div>
    </div>
  </div>
</template>
<script>
// import { userLogin } from '../../api/index'
// import { statusFormatter } from 'common/js/status';
// import axios from 'config/http';
// import { param } from 'common/js/jsonp';
// import { Message } from 'element-ui';
import VDistpicker from 'v-distpicker'
export default {
  components: {
    VDistpicker
  },
  data() {
    return {
      company: ''
    }
  }
}
</script>

<style lang="scss">
.security-company {
  padding: 20px;
  .element {
    display: inline-block;
    margin-right: 15px;
    p {
      margin-bottom: 10px;
    }
    .input {
      width: 200px;
    }
  }
}
</style>

