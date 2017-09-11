<template>
  <div>
    <div class="nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>分期审核</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="base">
       <div class="element">
        <p>状态</p>
        <div>
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="element">
        <p>店名</p>
        <div>
          <el-input v-model="input" placeholder="请输入内容" class="input"></el-input>
        </div>
      </div>
       <div class="element">
        <p>申请时间</p>
        <div>
          <el-date-picker v-model="timer" type="daterange" placeholder="选择日期范围">
          </el-date-picker>
        </div>
      </div>
        <div class="element">
        <p>服务公司</p>
        <div>
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="element">
        <p>业务员姓名</p>
        <div>
          <el-input v-model="input" placeholder="请输入内容" class="input"></el-input>
        </div>
      </div>
     
      <div class="btn">
        <el-button type="primary">查询</el-button>
      </div>
      <table>
        <thead>
          <tr>
            <th>订单编号</th>
            <th>店名</th>
            <th>分期金额</th>
            <th>申请时间</th>
            <th>业务员姓名</th>
            <th>服务公司</th>
            <th>状态</th>
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
            <td>
              <el-button type="primary" @click="review(index)">审核</el-button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="block" style="margin-top:20px">
        <el-pagination layout="prev, pager, next, jumper" :total="10">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { userLogin } from '../../api/index'
export default {
  data() {
    return {
      input: '',
      options: [{
        value: '选项1',
        label: '未审核'
      }, {
        value: '选项2',
        label: '审核通过'
      }, {
        value: '选项3',
        label: '审核失败'
      }, {
        value: '选项4',
        label: '否决'
      }],
      value: '',
      timer: ''
    }
  },
  created() {
    this.getval()
  },
  methods: {
    getval() {
      let params = {
      }
      userLogin(params).then(res => {
        console.log(res)
        console.log(res.data)
      })
    },
    // 审核
    review() {
      this.$router.push('/detailReview')
    },
    // 查看
    look() {
      this.$router.push('/look')
    }
  }
}
</script>

<style lang="scss">
.base {
  table {
    border: 1px solid #e1e6ef;
    thead {
      background-color: #e1e6ef;
    }
    tr th,
    tr td {
      padding: 14px 16px;
    }
    tr:hover {
      background-color: #F1F2F7;
    }
  }
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
  .btn {
    display:inline-block;
  }
}
</style>

