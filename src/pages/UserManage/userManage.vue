<template>
  <div>
    <breadcrumb :items="breadcrumbText"></breadcrumb>
    <div class="base">
      <div class="searchCondition">
        <el-form ref="form" :model="form" class="demo-ruleForm" :label-position="labelPosition">
          <el-row :gutter="20">
            <el-col :span="4">
              <el-form-item label="姓名">
                <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="手机号">
                <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="状态">
                <el-select v-model="form.status">
                  <el-option label="全部" value="0"></el-option>
                  <el-option label="逾期未结清" value="1"></el-option>
                  <el-option label="未结清" value="2"></el-option>
                  <el-option label="逾期结清" value="3"></el-option>
                  <el-option label="已结清" value="4"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="注册时间">
                <el-date-picker v-model="form.borrowTimer" type="daterange" placeholder="选择借款时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item>
                <div class="btnWrapper">
                  <el-button type="primary">查询</el-button>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <table class="tableIncludeBtn">
        <thead>
          <tr>
            <th>合同编号</th>
            <th>姓名</th>
            <th>手机号</th>
            <th>借款总额</th>
            <th>借款期限</th>
            <th>借款用途</th>
            <th>日利率</th>
            <th>状态</th>
            <th>借款时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>兑换人</td>
            <td>手机号码</td>
            <td>所在店铺</td>
            <td>使用方式</td>
            <td>使用/剩余积分</td>
            <td>礼品</td>
            <td>收货进度</td>
            <td>兑换时间</td>
            <td>操作</td>
            <td>
              <el-button type="primary" @click="toDetail">查看</el-button>
            </td>
          </tr>
          <tr>
            <td>兑换人</td>
            <td>手机号码</td>
            <td>所在店铺</td>
            <td>使用方式</td>
            <td>使用/剩余积分</td>
            <td>礼品</td>
            <td>收货进度</td>
            <td>兑换时间</td>
            <td>操作</td>
            <td>
              <el-button type="primary">查看</el-button>
            </td>
          </tr>
          <tr>
            <td>兑换人</td>
            <td>手机号码</td>
            <td>所在店铺</td>
            <td>使用方式</td>
            <td>使用/剩余积分</td>
            <td>礼品</td>
            <td>收货进度</td>
            <td>兑换时间</td>
            <td>兑换时间</td>
            <td>
              <el-button type="primary">查看</el-button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="block" style="margin-top:20px">
        <el-pagination layout="prev, pager, next, jumper" :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import breadcrumb from '../../components/Breadcrumb'
export default {
  data() {
    return {
      breadcrumbText: [{
        title: '当前位置',
        path: ''
      }, {
        title: '用户管理',
        path: ''
      }],
      labelPosition: 'top',
      form: {
        name: '',
        phone: '',
        borrowDeadline: '0',
        status: '0',
        borrowTimer: '',
        borrowUse: '0'
      }
    }
  },
  methods: {
    toDetail: function(params) {
      this.$router.push('/userDetail')
    }
  },
  components: {
    breadcrumb
  }
}
</script>
<style lang="scss" scoped>
$main_width:1040px;
.base {
  width: $main_width;
  .searchCondition {
    overflow: hidden;
    .btnWrapper {
      margin-top: 24px;
      margin-left: 64px;
    }
  }
}
</style>
