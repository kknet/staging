<template>
  <div>
    <div class="nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: 'review'}">借款记录</el-breadcrumb-item>
        <el-breadcrumb-item>详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="borrow-detail">
      <h2>借款信息</h2>
      <div class="anbao">
        <div class="null"></div>
        <div class="title">
          <span class="first-span">门头店名</span>
          <span>{{detailList.shopName}}</span>
        </div>
        <div class="title">
          <span class="first-span">店主</span>
          <span>{{detailList.nameame}}</span>
        </div>
        <div class="title">
          <span class="first-span">借款金额</span>
          <span>{{detailList.amount}}</span>
        </div>
        <div class="title">
          <span class="first-span">还款期数</span>
          <span>{{detailList.alreadyRepayTimes}}期/{{detailList.repayTotalTimes}}期</span>
        </div>
        <div class="title">
          <span class="first-span">生成时间</span>
          <span>{{detailList.updated}}</span>
        </div>
        <div class="title">
          <span class="first-span">借款时间</span>
          <span>15822</span>
        </div>
        <div class="title">
          <span class="first-span">订单号</span>
          <span>{{detailList.orderNo}}</span>
        </div>
        <div class="title">
          <span class="first-span">服务公司</span>
          <span>{{detailList.companyName}}</span>
        </div>
        <div class="title">
          <span class="first-span">申请信息</span>
          <span class="color-blue">查看</span>
        </div>
        <div class="title">
          <span class="first-span">开户人</span>
          <span>{{detailList.name}}</span>
        </div>
        <div class="title">
          <span class="first-span">开户行</span>
          <span>{{detailList.bankName}}</span>
        </div>
        <div class="title">
          <span class="first-span">卡号</span>
          <span>{{detailList.bankCardNo}}</span>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <h2>安保套餐信息</h2>
      <table>
        <thead>
          <tr>
            <th>期数</th>
            <th>应还金额</th>
            <th>到期日</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="item in repayList">
              <td>{{item.repayPeriod}}</td>
              <td>{{item.amount}}</td>
              <td>{{item.repayDate}}</td>
              <td>{{item.status | getStatus}}</td>
              <td>
                <el-button type="primary" @click="goDetail(item.id)">详情</el-button>
              </td>
            </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>
<script>
// import axios from 'config/http';
import { statusFormatter } from 'common/js/status';
// import { Message } from 'element-ui';
export default {
  data() {
    return {
      detailList: {},
      repayList: []
    }
  },
  filters: {
    getStatus(value) {
      return statusFormatter(value)
    }
  },
  methods: {
    // 获取详情
    // getDetail(id) {
    //   axios.post('/zsdsys/apply/checkView.json', {
    //     id: id
    //   })
    //     .then((res) => {
    //       this.detailList = res.data.list[0];
    //     })
    //     .catch((error) => {
    //       Message(error)
    //     })
    // },
    // 还款计划
    // getRepayPaln(id) {
    //   axios.post('/zsdsys/apply/repaymentView.json', {
    //     id: id
    //   })
    //     .then((res) => {
    //       console.log(res.data)
    //       this.repayList = res.data.list;
    //     })
    //     .catch((error) => {
    //       Message(error)
    //     })
    // },
    // 返回上一级
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    this.getDetail(this.$route.params.id);
    this.getRepayPaln(this.$route.params.id);
  }
}
</script>

<style lang="scss">
.borrow-detail {
  padding: 20px;
  background: rgb(242, 242, 242);
  h2 {
    font-size: 16px;
    margin-bottom: 15px;
  }
  .null {
    height: 5px;
  }
  .color-blue {
    color: rgb(22, 155, 213);
    cursor: pointer;
  }
  .title {
    margin: 10px 0 20px 20px;
    height: 10px;
    .first-span {
      display: inline-block;
      width: 80px;
      height: 20px;
      line-height: 20px;
      text-align: left;
    }
  }
  .anbao {
    width: 1060px;
    background: white;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  table {
    border: 1px solid #e1e6ef;
    position: relative;
    background-color: #ffffff;
    thead {
      background-color: #e1e6ef;
      tr th,
      tr td {
        padding: 14px 0;
        width: 210px;
      }
    }
    tbody {
      td {
        padding: 10px 0;
        width: 210px;
        text-align: center;
        border-bottom: 1px solid #dddddd;
      }
    }
  }
}
</style>

