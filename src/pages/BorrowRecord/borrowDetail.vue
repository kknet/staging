<template>
  <div>
    <breadcrumb :items="breadcrumbText"></breadcrumb>
    <div class="base">
      <div class="detail_wrapper">
        <h1 class="font_size_22">基本信息</h1>
        <div class="detail_content">
          <div class="flex">
            <div>姓名:张三</div>
            <div>身份证号：330251199502126545</div>
            <div>性别：女</div>
            <div>手机号：18632445666</div>
          </div>
          <div class="flex">
            <div>借款总额：10,000</div>
            <div>借款期限：270天</div>
            <div>还款方式：等额本息</div>
            <div>借款用途：日常经营</div>
          </div>
          <div class="flex">
            <div>日利率：5%</div>
            <div>总利息：100.00</div>
            <div>管理费：100.00</div>
            <div>借款时间：2017-02-05 06:02:02</div>
          </div>
          <div class="flex">
            <div>合同编号：aq1253656001</div>
            <div>已签合同：
              <span>《XXX合同》</span>
            </div>
          </div>
        </div>
      </div>
      <div class="table_wrapper">
        <table class="baseTable">
          <thead>
            <tr>
              <th>期数</th>
              <th>本金（元）</th>
              <th>利息（元）</th>
              <th>罚息（元）</th>
              <th>逾期费用（元）</th>
              <th>逾期费用（元）</th>
              <th>状态</th>
              <th>到期日</th>
              <th>还款时间</th>
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
            </tr>
          </tbody>
        </table>
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
        title: '当前位置'
      }, {
        title: '借款记录',
        path: '/borrowRecord'
      }, {
        title: '借款详情'
      }]
    }
  },
  components: {
    breadcrumb
  }
}
</script>

<style lang="scss" scoped>
.base {
  width: 1040px;
  .detail_wrapper {
    padding: 20px;
    border: 1px solid #0099cc;
    background-color: #f0f4fb;
    h1 {
      color: #323232;
      font-weight: bolder;
    }
    .font_size_22 {
      font-size: 16px;
    }
    .detail_content {
      display: flex;
      margin-top: 10px;
      .flex {
        flex: 1;
        color: #646464;
        font-size: 13px;
        div {
          padding: 5px 0;
          span {
            color: #169bd5;
          }
        }
      }
    }
  }
  .table_wrapper {
    margin-top: 20px;
    font-size: 13px;
  }
}
</style>