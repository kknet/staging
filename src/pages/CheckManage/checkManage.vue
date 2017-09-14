<template>
  <div class='checkManage'>
    <breadcrumb :items='breadcrumbText'></breadcrumb>
    <div class='base'>
      <div class='searchCondition'>
        <!-- <input type="text" @keyup.13="keyboardEvent($event)"> -->
        <el-form ref='form' :model='form' class='demo-ruleForm' label-position='left'>
          <el-row :gutter='20'>
            <el-col :span='7'>
              <el-form-item label='安保公司'>
                <el-input v-model='searchCompanyName' placeholder='请输入安保公司' @keyup.enter.native="keyboardEvent($event)"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span='6'>
              <el-form-item label='审核员'>
                <el-input v-model='searchEmployeeName' placeholder='请输入审核员' @keyup.enter.native="keyboardEvent($event)"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span='4'>
              <el-form-item>
                <div class='btnWrapper'>
                  <el-button class='searchBtn' type='primary' @click="searchBtnEvent">查询</el-button>
                </div>
              </el-form-item>
            </el-col>
            <el-col :span='7'>
              <el-form-item>
                <div class='btnWrapper'>
                  <el-button class='searchBtn' type='primary' @click='openAddForm'>添加</el-button>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <table class='tableIncludeBtn'>
        <thead>
          <tr>
            <th>姓名</th>
            <th>手机号</th>
            <th>所属安保公司</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(item, index) in getList' :key='item.employeeId'>
            <td>{{item.employeeName | isNull}}</td>
            <td>{{item.mobile}}</td>
            <td>{{item.companyName | isNull}}</td>
            <td>{{item.auditorStatus | status}}</td>
            <td>
              <el-button size='small' type='primary' :data-id="index" @click="openForbiddenBox(item.id, item.auditorStatus, item.employeeName)">{{item.auditorStatus | reverseStatus}}</el-button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class='block' style='margin-top:20px' v-show='showPageTag'>
        <el-pagination @current-change='handleCurrentChange' :current-page.sync='pageIndex' :page-size='pageSize' layout='prev, pager, next, jumper' :total='total'>
        </el-pagination>
      </div>
      <el-dialog title='添加审核员' :visible.sync='dialogVisible' class='demo-ruleForm dialogForm'>
        <el-form ref='addForm' :inline='true' :model='addForm' :rules='rules' class='demo-form-inline' label-position='left' label-width='120px'>
          <el-form-item label='审核员手机号' prop='phone'>
            <el-input v-model='addForm.phone' placeholder='请输入手机号' :maxlength="maxLen"></el-input>
          </el-form-item>
          <el-form-item label='审核员姓名' prop='checkMan'>
            <el-input v-model='addForm.checkMan' placeholder='请输入姓名'></el-input>
          </el-form-item>
          <el-form-item label='审核员身份证号' prop='identityId'>
            <el-input v-model='addForm.identityId' placeholder='请输入身份证号'></el-input>
          </el-form-item>
          <el-form-item label='所属安保公司' prop='company'>
            <el-select v-model="addForm.company" filterable placeholder="请选择" style="width:192px">
              <el-option v-for="item in companyList" :key="item.companyId" :label="item.companyName" :value="item.companyId">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="  " prop="btn">
            <el-button style="width:193px" type="primary" @click="submitAddForm('addForm')">保存</el-button>
          </el-form-item>
        </el-form>
        <!-- <div class='footer'>
                <el-button type='primary' @click="submitAddForm('addForm')" style="width:192px">添加</el-button>
              </div> -->
      </el-dialog>
    </div>
  </div>
</template>
<script>
import breadcrumb from '../../components/Breadcrumb'
import { getCheckers, addChecker, getCompanyList, forbiddenToggle } from '../../api/index'

export default {
  data() {
    return {
      breadcrumbText: [{
        title: '当前位置',
        path: ''
      }, {
        title: '审核员管理',
        path: ''
      }],
      form: {
        phone: '',
        checkMan: ''
      },
      addForm: {
        phone: '13958776325',
        checkMan: '林祺泰',
        identityId: '330327199207250810',
        company: null
      },
      rules: {
        phone:
        [
          { required: true, validator: this.checkPhone, trigger: 'blur' }
        ],
        checkMan:
        [
          { required: true, message: '请输入审核员', trigger: 'blur' },
          { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
        ],
        identityId:
        [
          { required: true, message: '请输入身份证号', trigger: 'blur' },
          { min: 18, max: 18, message: '长度在 18 个字符', trigger: 'blur' }
        ],
        company: [
          { type: 'number', required: true, message: '请输入安保公司', trigger: 'blur' }
        ]
      },
      dialogVisible: false,
      showPageTag: false,
      pageIndex: 1,
      pageSize: 10,
      total: 1,
      getList: '',
      companyList: [],
      searchEmployeeName: '',
      searchCompanyName: '',
      maxLen: 11
    }
  },
  methods: {
    keyboardEvent(e) {
      console.log(e.keyCode)
      this.searchBtnEvent()
      console.log('getDataEnd')
    },
    searchBtnEvent() {
      let data = {
        employeeName: this.searchEmployeeName,
        companyName: this.searchCompanyName,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }
      this.getCheckerList(data)
    },
    openAddForm() {
      let self = this
      this.dialogVisible = true
      getCompanyList().then(res => {
        if (res.code === 0) {
          self.companyList = res.list
          self.addForm.company = self.companyList[1].companyId
          console.log(self.addForm.company)
        } else {
          this.$message(res.error)
        }
      }).catch(res => {
        this.$message('系统故障或没有网络，错误代码为：' + res)
      })
    },
    openForbiddenBox(id, auditorStatus, account) {
      let status = auditorStatus ? '禁用' : '启用'
      this.$confirm(`此操作将${status}${account}的账号, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let data = {
          id: id,
          auditorStatus: auditorStatus ? 0 : 1
        }
        console.log(data)
        forbiddenToggle(data).then(res => {
          console.log(data)
          console.log('result:')
          console.log(res)
          if (res.code === 0) {
            let data = {
              pageIndex: this.pageIndex,
              pageSize: this.pageSize
            }
            this.getCheckerList(data)
          } else {
            this.$message(res.error)
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消禁用'
        })
      })
    },
    submitAddForm(formName) {
      // var self = this
      let data = {
        employeeName: this.addForm.checkMan,
        mobile: this.addForm.phone,
        companyId: this.addForm.company,
        idCard: this.addForm.identityId
      }
      console.log(data)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          addChecker(data).then(res => {
            console.log(res)
            if (res.code === 0) {
              let data = {
                pageIndex: this.pageIndex,
                pageSize: this.pageSize
              }
              this.getCheckerList(data)
            } else {
              this.$message(res.error)
            }
          }).catch(res => {
            this.$message('系统故障，错误代码为：' + res)
          })
          this.dialogVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getCheckerList(params) {
      getCheckers(params).then(res => {
        console.log(params)
        console.log(res)
        if (res.code === 0) {
          this.getList = res.list
          this.total = res.count
          if (this.total <= this.pageSize) {
            this.showPageTag = false
          } else {
            this.showPageTag = true
          }
        } else {
          this.$message(res.error)
        }
      }).catch(res => {
        this.$message('系统故障或没有网络，错误代码为：' + res)
      })
    },
    handleCurrentChange(currentPage) {
      console.log(currentPage)
      let params = {
        pageIndex: currentPage,
        pageSize: 10
      }
      this.getCheckerList(params)
    }
  },
  created() {
    let params = {
      pageIndex: 1,
      pageSize: 10
    }
    this.getCheckerList(params)
  },
  components: {
    breadcrumb
  }
}
</script>
<style lang='scss' scoped>
$main_width:800px;
.base {
  width: $main_width;
  .searchCondition {
    overflow: hidden;
    .btnWrapper {
      margin-top: 35px;
      .searchBtn {
        width: 94px;
        float: right;
      }
    }
  }
  .demo-ruleForm {
    text-align: center;
  } // .dialogForm{
  //   width: 410px;
  // }
}
</style>
