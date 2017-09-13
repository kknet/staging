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
        <m-address></m-address>
        <!-- <v-distpicker></v-distpicker> -->
      </div>
      <div class="btn" @click="search">
        <el-button type="primary">查询</el-button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>安保公司名称</th>
              <th>地址</th>
              <th>负责人</th>
              <th>联系电话</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in getList" :key="item.value" v-show="getList.length > 0">
              <td>{{item.companyName}}</td>
              <td>{{item.province}}{{item.city}}{{item.area}}{{item.detailAddress}}</td>
              <td>{{item.resPerson}}</td>
              <td>{{item.mobile}}</td>
              <td>1</td>
            </tr>
            <tr v-show="getList.length === 0">
              <td class="noData" colspan="6">暂无数据...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="block" style="margin-top:20px" v-show="showPageTag">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" layout="prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { companyList } from '../../api/index'
import { ERR_OK } from '../../common/js/config'
import mAddress from 'components/Address.vue'
import { mapGetters } from 'vuex'
// import { userLogin } from '../../api/index'
// import { statusFormatter } from 'common/js/status';
// import axios from 'config/http';
// import { param } from 'common/js/jsonp';
// import { Message } from 'element-ui';
import VDistpicker from 'v-distpicker'
export default {
  components: {
    VDistpicker,
    mAddress
  },
  data() {
    return {
      company: '',
      getList: [],
      showPageTag: false,
      pageIndex: 1,
      pageSize: 10,
      total: 1
    }
  },
  created() {
    this._getList()
  },
  computed: {
    ...mapGetters([
      'address'
    ])
  },
  methods: {
    _getList() {
      let params = {
        companyName: this.company,
        province: this.value

      }
      companyList(params).then((res) => {
        console.log(res)
        if (res.code === ERR_OK) {
          this.getList = res.list
          this.total = res.count
          if (this.total <= this.pageSize) {
            this.showPageTag = false
          } else {
            this.showPageTag = true
          }
        }
      })
    },
    // 查询
    search() {
      this._getList()
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.pageIndex = val
      this.getval()
    }
  }
}
</script>

<style lang="scss">
.security-company {
  padding: 20px;
  .noData {
    font-size: 16px;
    padding: 30px;
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
  table {
    border: 1px solid #e1e6ef;
    width: 1200px;
    margin-top: 30px;
    thead {
      background-color: #e1e6ef;
    }
    tr th,
    tr td {
      padding: 14px 16px;
      text-align: center;
    }
    tr:hover {
      background-color: #F1F2F7;
    }
  }
  .btn {
    display: inline-block;
  }
}
</style>

