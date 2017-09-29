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
          <span v-if="detailList">{{detailList.shopName}}</span>
        </div>
        <div class="title">
          <span class="first-span">店主</span>
          <span v-if="detailList">{{detailList.name}}</span>
        </div>
        <div class="title">
          <span class="first-span">借款金额</span>
          <span v-if="detailList">{{detailList.amount/100}}</span>
        </div>
        <div class="title">
          <span class="first-span">还款期数</span>
          <span v-if="detailList">{{detailList.alreadyRepayTimes}}期/{{detailList.repayTotalTimes}}期</span>
        </div>
        <div class="title">
          <span class="first-span">生成时间</span>
          <span v-if="detailList">{{detailList.secondCheckTime |getTime}}</span>
        </div>
        <div class="title">
          <span class="first-span">借款时间</span>
          <span v-if="detailList">{{detailList.dealTime |getTime}}</span>
        </div>
        <div class="title">
          <span class="first-span">订单号</span>
          <span v-if="detailList">{{detailList.orderNo}}</span>
        </div>
        <div class="title">
          <span class="first-span">服务公司</span>
          <span v-if="detailList">{{detailList.companyName}}</span>
        </div>
        <div class="title">
          <span class="first-span">申请信息</span>
          <span class="color-blue" @click="look">查看</span>
        </div>
        <div class="title">
          <span class="first-span">开户人</span>
          <span v-if="detailList">{{detailList.name}}</span>
        </div>
        <div class="title">
          <span class="first-span">开户行</span>
          <span v-if="detailList">{{detailList.bankName}}</span>
        </div>
        <div class="title">
          <span class="first-span">卡号</span>
          <span v-if="detailList">{{detailList.bankCardNo}}</span>
        </div>
        <div>
          <div class="pdf"><a :href="imgUrl1" target="_blank">借款合同</a></div>
          <div class="pdf"><a :href="imgUrl2" target="_blank">付款委托与确认书</a></div>
          <div class="pdf"><a :href="imgUrl3" target="_blank">个人信息查询授权书</a></div>
          <div class="pdf"><a :href="imgUrl4" target="_blank">委托代理确认书</a></div>
          <div class="pdf"><a :href="imgUrl5" target="_blank">担保合同</a></div>
          <div ></div>
          <div></div>
        </div>
      </div>
      <h2>还款计划</h2>
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
          <tr v-for="(item,index) in repayList" v-show="repayList" :key="item.key">
            <td>{{item.repayPeriod}}</td>
            <td>{{item.amount/100}}</td>
            <td>{{item.repayDate}}</td>
            <td>{{item.status | getStatus(item.overDueDays)}}</td>
            <td>
              <el-button type="primary" @click="repayMoney(index)" v-show="item.overDueDays > 10 &&item.status === 3">代还款</el-button>
            </td>
          </tr>
          <tr v-show="!repayList">
            <td class="noData" colspan="5">暂无数据...</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
// import axios from 'config/http';
import { applyDetail, repay, repayMony } from '../../api/index'
import { statusFormatter } from 'common/js/status'
import { ERR_OK } from 'common/js/config'
import { format } from '../../common/js/times'
// import { Message } from 'element-ui';
export default {
  data() {
    return {
      detailList: {},
      repayList: [],
      id: '',
      repay: '',
      urlList: [],
      imgUrl1: 'javascript:void(0)',
      imgUrl2: 'javascript:void(0)',
      imgUrl3: 'javascript:void(0)',
      imgUrl4: 'javascript:void(0)',
      imgUrl5: 'javascript:void(0)'
    }
  },
  filters: {
    getStatus(value, n) {
      return statusFormatter(value, n)
    },
    getTime(t) {
      if (t) {
        return format(t)
      }
    }
  },
  methods: {
    // 获取详情
    getDetail(id) {
      let params = {
        id: id
      }
      applyDetail(params).then((res) => {
        if (res.code === ERR_OK) {
          console.log(res)
          this.detailList = res.list[0]
          let urlList = res.obj.contractUrl
          if (urlList) {
            for (let k of urlList) {
              if (k.contractType === 1) {
                this.imgUrl1 = k.viewpfdUrl
              }
              if (k.contractType === 2) {
                this.imgUrl2 = k.viewpfdUrl
              }
              if (k.contractType === 3) {
                this.imgUrl3 = k.viewpfdUrl
              }
              if (k.contractType === 4) {
                this.imgUrl4 = k.viewpfdUrl
              }
              if (k.contractType === 5) {
                this.imgUrl5 = k.viewpfdUrl
              }
            }
          }
          console.log(urlList)
        }
      })
    },
    // 查看
    look() {
      let id = this.id
      this.$router.push('/detailReview?id=' + id)
      localStorage.setItem('ms_username', 7)
    },
    // 代还款
    repayMoney(index) {
      let applyId = this.repayList[index].applyId
      this.$confirm('是否确认代还款?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let params = {
          id: this.id,
          applyId: applyId
        }
        repayMony(params).then((res) => {
          if (res.code === ERR_OK) {
            this.getDetail(this.id);
            this.getRepayPaln(this.repay)
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 还款计划
    getRepayPaln(id) {
      let params = {
        repaymentNo: id
      }
      repay(params).then((res) => {
        if (res.code === ERR_OK) {
          this.repayList = res.list
          console.log(this.repayList)
          console.log(21)
        }
      })
    },
    // 返回上一级
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    this.id = this.$route.query.id
    this.repay = this.$route.query.repay
    this.getDetail(this.id);
    this.getRepayPaln(this.repay);
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
  .pdf{
    margin:15px 0 0 15px;
  }
}
</style>

