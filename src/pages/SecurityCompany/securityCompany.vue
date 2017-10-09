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
        <m-address v-on:listenToChildEvent="ssss"></m-address>
        <!-- <v-distpicker></v-distpicker> -->
      </div>
      <div class="btn" @click="search">
        <el-button type="primary">查询</el-button>
      </div>
      <div>
        <div style="text-align: right;">
          <el-button @click="addbtn">添加</el-button>
        </div>
        <table>
          <thead>
            <tr>
              <th>安保公司名称</th>
              <th>关联ID</th>
              <th>地址</th>
              <th>负责人</th>
              <th>联系电话</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in getList" :key="item.value" v-show="getList">
              <td>{{item.companyName}}({{item.number}})</td>
              <td>{{item.companyId}}</td>
              <td>{{item.province}}{{item.city}}{{item.area}}{{item.detailAddress}}</td>
              <td>{{item.resPerson}}</td>
              <td>{{item.mobile}}</td>
              <td>
                <el-button type="text" @click="eidt(index)">编辑</el-button>
                <el-button type="text" @click="forbid(index)">{{item.status | reverseStatus}}</el-button>
              </td>
            </tr>
            <tr v-show="!getList">
              <td class="noData" colspan="6">暂无数据...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <el-dialog :visible.sync="dialogVisible" size="small" style="text-align: left">
        <div class="title">
          <span>安保公司名称　　　</span>
          <el-input v-model="companyName" placeholder="请输入安保公司名称" style="width:200px;"></el-input>
        </div>
        <div class="title" v-show="!addeidt">
          <span>关联ID　　　　　　</span>
          <el-input v-model="companyId" placeholder="请输入内容" style="width:200px;"></el-input>
        </div>
        <div class="title" v-show="addeidt">
          <span>关联ID　　　　　　</span>
          <span>{{id}}</span>
        </div>
        <div class="title">
          <span>地址　　　　　　　</span>
          <m-address v-on:listenToChildEvent="baddress" style="display:inline-block"></m-address>
        </div>
        <div class="title">
          <span>　　　　　　　　&nbsp&nbsp&nbsp</span>
          <el-input v-model="detailAddress" placeholder="请输入内容" style="width:200px;"></el-input>
        </div>
        <div class="title">
          <span>负责人　　　　　　</span>
          <el-input v-model="resPerson" placeholder="请输入内容" style="width:200px;"></el-input>
        </div>
        <div>
          <span>联系电话　　　　　</span>
          <el-input v-model="mobile" placeholder="请输入内容" style="width:200px;"></el-input>
        </div>
        <br/>
        <div style="text-align: center;">
          <el-button @click="add">添加</el-button>
        </div>
      </el-dialog>
      <div class="block" style="margin-top:20px" v-show="showPageTag">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageIndex" :page-size="pageSize" layout="prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { companyList, addCompany, eidtCompany } from '../../api/index'
import { ERR_OK } from '../../common/js/config'
import mAddress from 'components/Address.vue'
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
      dialogVisible: false,
      addeidt: false,
      pageIndex: 1,
      pageSize: 10,
      total: 1,
      params: {
        pageSize: this.pageSize,
        pageIndex: this.pageIndex
      },
      companyName: '',
      companyId: '',
      detailAddress: '',
      resPerson: '',
      mobile: '',
      province: '',
      city: '',
      area: '',
      id: '',
      a: '',
      b: '',
      c: ''
    }
  },
  created() {
    this.search()
  },
  methods: {
    _getList() {
      let params = this.params
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
    ssss(data) {
      console.log(data)
      this.a = data.province
      this.b = data.city
      this.c = data.area
      this.params = {
        companyName: this.company,
        province: data.province,
        city: data.city,
        area: data.area,
        pageSize: this.pageSize,
        pageIndex: this.pageIndex
      }
      console.log(data)
    },
    // 弹窗地址
    baddress(data) {
      this.province = data.province
      this.city = data.city
      this.area = data.area
    },
    // 查询
    search() {
      this.params = {
        companyName: this.company,
        province: this.a,
        city: this.b,
        area: this.c,
        pageSize: this.pageSize,
        pageIndex: this.pageIndex
      }
      this._getList()
    },
    // 启用禁用
    forbid(index) {
      this.$confirm('是否继续操作?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let companyId = this.getList[index].companyId
        let status = this.getList[index].status === 0 ? 1 : 0
        let params = {
          status: status,
          companyId: companyId
        }
        eidtCompany(params).then((res) => {
          if (res.code === ERR_OK) {
            this._getList()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    addbtn() {
      this.addeidt = false
      this.dialogVisible = true
    },
    eidt(index) {
      this.id = this.getList[index].companyId
      this.addeidt = true
      this.dialogVisible = true
    },
    // 添加
    add() {
      let params = {
        companyName: this.companyName,
        resPerson: this.resPerson,
        companyId: this.addeidt ? this.id : this.companyId,
        mobile: this.mobile,
        province: this.province,
        city: this.city,
        area: this.area,
        detailAddress: this.detailAddress
      }
      if (!this.addeidt) {
        addCompany(params).then((res) => {
          if (res.code === ERR_OK) {
            this._getList()
            this.dialogVisible = false
            window.location.reload()
          }
        })
      } else {
        eidtCompany(params).then((res) => {
          if (res.code === ERR_OK) {
            this._getList()
            this.dialogVisible = false
            window.location.reload()
          }
        })
      }
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.pageIndex = val
      this.search()
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
  .title {
    margin-bottom: 20px;
  }
}
</style>

