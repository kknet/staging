<template>
  <div class="accountManage">
    <breadcrumb :items="breadcrumbText"></breadcrumb>
    <div class="base">
      <table class="tableIncludeBtn">
        <thead>
          <tr>
            <th>姓名</th>
            <th>账号</th>
            <th>角色</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in infoList" :key="item.id">
            <td>{{item.adminerName}}</td>
            <td>{{item.account}}</td>
            <td>{{item.role | role}}</td>
            <td>
              <el-button size="small" type="primary" @click="openModifyPasswordBox(item.id,item.account)">修改密码</el-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <el-dialog title="修改密码" :visible.sync="dialogVisible" class="demo-ruleForm">
      <el-form ref="modifyPasswordForm" :inline="true" :model="modifyPasswordForm" :rules="rules" class="demo-form-inline" label-position="left" label-width="120px">
        <el-form-item label="旧密码" prop="oldPassword">
          <el-input v-model="modifyPasswordForm.oldPassword" placeholder="旧密码"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input v-model="modifyPasswordForm.newPassword" placeholder="新密码"></el-input>
        </el-form-item>
        <el-form-item label="再次确认密码" prop="newPassword2">
          <el-input v-model="modifyPasswordForm.newPassword2" placeholder="再次确认密码"></el-input>
        </el-form-item>
        <el-form-item label="  " prop="btn">
          <el-button style="width:173px" type="primary" @click="submitModifyForm('modifyPasswordForm')">确认</el-button>
        </el-form-item>
      </el-form>
      <!-- <div class="footer">
                    <el-button type="primary" @click="submitAddForm('addForm')">添加</el-button>
                  </div> -->
    </el-dialog>
  </div>
</template>
<script>
import breadcrumb from '../../components/Breadcrumb'
import { personInfo, modifyPassword } from '../../api/index'
export default {
  data() {
    return {
      infoList: '',
      value: '',
      breadcrumbText: [{
        title: '当前位置',
        path: ''
      }, {
        title: '系统管理',
        path: ''
      }, {
        title: '个人信息',
        path: ''
      }],
      modifyPasswordForm: {
        oldPassword: '',
        newPassword: '',
        newPassword2: '',
        id: '',
        account: ''
      },
      dialogVisible: false,
      rules: {
        oldPassword:
        [
          { required: true, message: '请输入旧密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        newPassword:
        [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        newPassword2:
        [
          { required: true, message: '请再次确认密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        btn:
        [
          { trigger: '' }
        ]
      }
    }
  },
  created() {
    this.getPersonInfo()
  },
  methods: {
    getPersonInfo() {
      personInfo(null).then(res => {
        console.log(res)
        if (res.code === 0) {
          this.infoList = res.list
          console.log(this.infoList)
        } else {
          this.$message(res.error)
        }
      }).catch(res => {
        this.$message('系统故障或没有网络，错误代码为：' + res)
      })
    },
    openModifyPasswordBox(id, account) {
      this.dialogVisible = true
      this.modifyPasswordForm.id = id
      this.modifyPasswordForm.account = account
    },
    submitModifyForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let parmas = {
            oldPassword: this.modifyPasswordForm.oldPassword,
            password: this.modifyPasswordForm.newPassword,
            againPassword: this.modifyPasswordForm.newPassword2,
            id: this.modifyPasswordForm.id,
            account: this.modifyPasswordForm.account
          }
          modifyPassword(parmas).then(res => {
            console.log(res)
            if (res.code === 0) {
              this.$message('修改成功！')
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
    submitEditForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
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

