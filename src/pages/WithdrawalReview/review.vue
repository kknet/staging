<template>
  <div>
    <div class="nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>借款记录</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="review">
      <div class="element">
        <p>订单号</p>
        <div>
          <el-input v-model="indent" placeholder="请输入订单号" class="input"></el-input>
        </div>
      </div>
      <div class="element">
        <p>店名</p>
        <div>
          <el-input v-model="shopName" placeholder="请输入店名" class="input"></el-input>
        </div>
      </div>
      <div class="element">
        <p>状态</p>
        <div>
          <el-select v-model="statusValue" placeholder="请选择状态">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="element">
        <p>申请时间</p>
        <div>
          <el-date-picker v-model="chooseTime" type="daterange" format="yyyy-MM-dd" placeholder="选择日期范围">
          </el-date-picker>
        </div>
      </div>
      <div class="element">
        <p>服务公司</p>
        <div>
          <el-input v-model="serveCompany" placeholder="请输入服务公司" class="input"></el-input>
        </div>
      </div>
      <div class="element">
        <p>业务员姓名</p>
        <div>
          <el-input v-model="businessName" placeholder="请输入业务员姓名" class="input"></el-input>
        </div>
      </div>
      <div class="btn">
        <el-button type="primary" @click="getBillList">查询</el-button>
      </div>
      <table>
        <thead>
          <tr>
            <th>订单编号</th>
            <th>店名</th>
            <th>借款金额（元）</th>
            <th>申请时间</th>
            <th>业务员姓名</th>
            <th>服务公司</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-show="billList.length > 0" v-for="item in billList">
            <td>{{item.orderNo}}</td>
            <td>{{item.shopName}}</td>
            <td>{{item.amount}}</td>
            <td>{{item.dealTime}}</td>
            <td>{{item.employeeName}}</td>
            <td>{{item.companyName}}</td>
            <td>{{item.loadStatus | getStatus}}</td>
            <td>
              <el-button type="primary" @click="goDetail(item.id)">详情</el-button>
            </td>
          </tr>
          <tr v-show="billList.length === 0">
            <td class="noData" colspan="8">暂无数据...</td>
          </tr>
        </tbody>
        <button class="export" @click="exportList">导出</button>
      </table>
      <div class="block" v-show="billList.length > 0">
        <el-pagination layout="prev, pager, next, jumper" :total="10">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
// import { userLogin } from '../../api/index'
import { statusFormatter } from 'common/js/status';
// import axios from 'config/http';
import { param } from 'common/js/jsonp';
// import { Message } from 'element-ui';
export default {
  data() {
    return {
      options: [
        {
          value: 2,
          label: '还款中'
        },
        {
          value: 7,
          label: '有逾期'
        },
        {
          value: 5,
          label: '需代还'
        },
        {
          value: 6,
          label: '已结清'
        }
      ],
      statusValue: '',
      serveCompany: '',
      indent: '',
      shopName: '',
      businessName: '',
      chooseTime: [],
      billList: [],
      startTime: '',
      endTime: '',
      params: {
        orderNo: this.indent,
        shopName: this.shopName,
        loadStatus: this.statusValue,
        employeeName: this.businessName,
        companyName: this.serveCompany,
        _startTime: this.startTime,
        _endTime: this.endTime
      }
    }
  },
  filters: {
    getStatus(value) {
      return statusFormatter(value)
    }
  },
  methods: {
    // 获取账单列表
    getBillList() {
      if (this.chooseTime[0]) {
        this.startTime = Date.parse(this.chooseTime[0]);
        this.endTime = Date.parse(this.chooseTime[1]);
      } else {
        this.startTime = '';
        this.endTime = '';
      }
      // axios.post('/zsdsys/apply/applyView.json', {
      //   orderNo: this.indent,
      //   shopName: this.shopName,
      //   loadStatus: this.statusValue,
      //   employeeName: this.businessName,
      //   companyName: this.serveCompany,
      //   _startTime: this.startTime,
      //   _endTime: this.endTime
      // })
      //   .then((res) => {
      //     console.log(res.data)
      //     this.billList = res.data.list;
      //   })
      //   .catch((error) => {
      //     Message(error)
      //   })
    },
    // 跳转至详情
    goDetail(id) {
      this.$router.push({name: 'borrowDetail', params: { id }})
    },
    // 点击导出
    exportList() {
      if (this.chooseTime[0]) {
        this.startTime = Date.parse(this.chooseTime[0]);
        this.endTime = Date.parse(this.chooseTime[1]);
      } else {
        this.startTime = '';
        this.endTime = '';
      }
      var data = {
        orderNo: this.indent,
        shopName: this.shopName,
        loadStatus: this.statusValue,
        employeeName: this.businessName,
        companyName: this.serveCompany,
        _startTime: this.startTime,
        _endTime: this.endTime
      }
      window.location.href = '/zsdsys/apply/list/export.json?' + param(data)
    }
  },
  created() {
    this.getBillList()
  }
}
</script>

<style lang="scss">
.review {
  padding: 20px;
  .noData {
    font-size: 16px;
    padding: 30px;
  }
  .export {
    width: 90px;
    height: 40px;
    background-color: #ffffff;
    outline: none;
    position: absolute;
    top: -50px;
    left: 10px;
    border: 1px solid #666666;
    border-radius: 6px;
    cursor: pointer;
  }
  .block {
    margin: 10px 580px;
  }
  input {
    width: 180px;
  }
  table {
    border: 1px solid #e1e6ef;
    position: relative;
    thead {
      background-color: #e1e6ef;
      tr th,
      tr td {
        padding: 14px 0;
        width: 157px;
      }
    }
    tbody {
      td {
        padding: 14px 0;
        width: 157px;
        text-align: center;
      }
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
    margin: 30px 600px;
    width: 150px;
    border-radius: 20px;
  }
}
</style>

