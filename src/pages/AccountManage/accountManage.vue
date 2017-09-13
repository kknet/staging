<template>
  <div class="accountManage">
    <breadcrumb :items="breadcrumbText"></breadcrumb>
    <div class="base">
      <div class="btnWrapper">
        <el-button class="searchBtn" type="primary" @click="dialogVisible = true">添加</el-button>
        <!-- <el-button class="searchBtn" type="primary" @click="loginEvent">login</el-button> -->
      </div>
      <table class="tableIncludeBtn">
        <thead>
          <tr>
            <th>姓名</th>
            <th>账号</th>
            <th>角色</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in accountList" :key="index">
            <td>{{item.adminerName}}</td>
            <td>{{item.account}}</td>
            <td>{{item.role | role}}</td>
            <td>{{item.adminerStatus | adminerStatus}}</td>
            <td style="width: 200px">
              <el-button size="small" type="primary" @click="openForbiddenBox(item.id, item.adminerStatus, item.adminerName)">{{item.adminerStatus | reverseStatus}}</el-button>
              <el-button size="small" type="primary" @click="openSureResetBox(item.id, item.account)">重置密码</el-button>
              <el-button size="small" type="primary" @click="openEditBox(item.id, item.adminerName, item.account)">编辑</el-button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="block" style="margin-top:20px" v-show="showPageTag">
        <el-pagination @current-change='handleCurrentChange' :current-page.sync='pageIndex' :page-size='pageSize' layout='prev, pager, next, jumper' :total='total'>
        </el-pagination>
      </div>
    </div>
    <el-dialog title="添加账号" :visible.sync="dialogVisible" class="demo-ruleForm">
      <el-form ref="addForm" :inline="true" :model="addForm" :rules="rules" class="demo-form-inline" label-position="left" label-width="120px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="addForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="addForm.phone" placeholder="请输入手机号" :maxlength="maxLen"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="type">
          <el-select v-model="addForm.type" placeholder="请选择">
            <el-option label="管理员" value="1">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="  " prop="btn">
          <el-button style="width:173px" type="primary" @click="submitAddForm('addForm')">添加</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="编辑账号" :visible.sync="editDialogVisible" class="demo-ruleForm">
      <el-form ref="editForm" :inline="true" :model="editForm" :rules="rulesEdit" class="demo-form-inline" label-position="left" label-width="120px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="editForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="editForm.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="  " prop="btn">
          <el-button style="width:173px" type="primary" @click="submitEditForm('editForm')">保存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import breadcrumb from '../../components/Breadcrumb'
import { accountManage, addManage, forbiddenToggleAdmin, editAccount, resetPassword } from '../../api/index'

export default {
  data() {
    return {
      param: {
        pageIndex: 1,
        pageSize: 10,
        role: 1
      },
      accountList: [],
      options: [{
        value: '1',
        label: '管理员'
      }],
      value: '',
      breadcrumbText: [{
        title: '当前位置',
        path: ''
      }, {
        title: '账号管理',
        path: ''
      }],
      addForm: {
        name: '张三',
        phone: '13912345678',
        type: ''
      },
      editForm: {
        name: '',
        phone: '',
        editId: null
      },
      dialogVisible: false,
      editDialogVisible: false,
      showPageTag: false,
      pageIndex: 1,
      pageSize: 10,
      currentPage: 1,
      total: 1,
      maxLen: 11,
      rules: {
        name:
        [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 1, max: 12, message: '长度在 1 到 12 个字符', trigger: 'blur' }
        ],
        phone:
        [
          { required: true, validator: this.checkPhone, trigger: 'blur,change' }
        ],
        type:
        [
          { required: true, message: '请选择角色', trigger: 'blur' }
        ]
      },
      rulesEdit: {
        name:
        [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
        ],
        phone:
        [
          { required: true, validator: this.checkPhone, trigger: 'blur,change' }
        ]
      }
    }
  },
  created() {
    this.getAccountList(this.param)
  },
  methods: {
    addManageEvent() {
      let data = {
        adminerName: this.addForm.name,
        account: this.addForm.phone,
        role: parseInt(this.addForm.type)
      }
      addManage(data).then(res => {
        console.log(data)
        console.log(res)
        if (res.code === 0) {
          let data = {
            pageIndex: 1,
            pageSize: 10,
            role: 1
          }
          this.getAccountList(data)
          this.$message('添加成功！')
        } else {
          this.$message(res.error)
        }
      }).catch(res => {
        this.$message('系统故障或没有网络，错误代码为：' + res)
      })
    },
    getAccountList(data) {
      accountManage(data).then(res => {
        console.log(data)
        console.log(res)
        if (res.code === 0) {
          this.accountList = res.list
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
      this.currentPage = currentPage
      let data = {
        pageIndex: this.currentPage,
        pageSize: 10,
        role: 1
      }
      console.log(data)
      this.getAccountList(data)
    },
    openForbiddenBox(id, adminerStatus, account) {
      this.$confirm(`此操作将禁用${account}的账号, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let data = {
          id: id,
          adminerStatus: adminerStatus ? 0 : 1
        }
        console.log(data)
        forbiddenToggleAdmin(data).then(res => {
          console.log(data)
          console.log('result:')
          console.log(res)
          if (res.code === 0) {
            let data = {
              pageIndex: this.currentPage,
              pageSize: 10,
              role: 1
            }
            this.getAccountList(data)
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
    openSureResetBox(id, account) {
      this.$confirm(`此操作将重置${account}的密码, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let data = {
          adminerId: id,
          account: account
        }
        resetPassword(data).then(res => {
          if (res.code === 0) {
            this.$message({
              type: 'success',
              message: '重置成功!'
            })
          } else {
            this.$message(res.error)
          }
        }).catch(res => {
          this.$message(res.error)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消重置'
        })
      })
    },
    submitAddForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = {
            adminerName: this.addForm.name,
            account: this.addForm.phone,
            role: parseInt(this.addForm.type)
          }
          addManage(data).then(res => {
            console.log(data)
            console.log(res)
            if (res.code === 0) {
              let data = {
                pageIndex: 1,
                pageSize: 10,
                role: 1
              }
              this.getAccountList(data)
              this.$message('添加成功！')
            } else {
              this.$message(res.error)
            }
          }).catch(res => {
            this.$message('系统故障或没有网络，错误代码为：' + res)
          })
          this.dialogVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    openEditBox(id, name, account) {
      this.editDialogVisible = true
      this.editForm.editId = id
      this.editForm.name = name
      this.editForm.phone = account
    },
    submitEditForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = {
            adminerName: this.editForm.name,
            account: this.editForm.phone,
            id: parseInt(this.editForm.editId)
          }
          editAccount(data).then(res => {
            console.log(data)
            console.log(res)
            if (res.code === 0) {
              let data = {
                pageIndex: this.currentPage,
                pageSize: 10,
                role: 1
              }
              this.getAccountList(data)
              this.$message('编辑成功！')
            } else {
              this.$message(res.error)
            }
          }).catch(res => {
            this.$message('系统故障或没有网络，错误代码为：' + res)
          })
          this.editDialogVisible = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  components: {
    breadcrumb
  }
}
</script>
<style lang="scss">
.accountManage {
  .base {
    width: 700px;
    .btnWrapper {
      .searchBtn {
        width: 94px;
      }
    }
    .tableIncludeBtn {
      margin-top: 20px;
    }
    .dialogForm {
      width: 500px;
    }
  }
}
</style>

