<template>
  <div>
    <div class="nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>借款审核</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="base">
      <table>
        <thead>
          <tr>
            <th>兑换人</th>
            <th>手机号码</th>
            <th>所在店铺</th>
            <th>使用方式</th>
            <th>使用/剩余积分</th>
            <th>礼品</th>
            <th>收货进度</th>
            <th>兑换时间</th>
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
            <td>操作</td>
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
<style lang="scss">
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
</style>

