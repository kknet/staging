<template>
  <div class="accountManage">
    <breadcrumb :items="breadcrumbText"></breadcrumb>
    <div class="base">
      <table class="tableIncludeBtn">
        <thead>
          <tr>
            <th>姓名</th>
            <th>账号</th>
            <th>手机号</th>
            <th>角色</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>兑换人</td>
            <td>账号</td>
            <td>手机号</td>
            <td>角色</td>
            <td>
              <el-button size="small" type="primary" @click="openModifyPasswordBox">修改密码</el-button>
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
          <el-button style="width:173px" type="primary" @click="submitModifyForm('modifyPasswordForm')">添加</el-button>
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
export default {
  data() {
    return {
      options: [{
        value: 'manage',
        label: '管理员'
      }],
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
        newPassword2: ''
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
  methods: {
    openModifyPasswordBox(account) {
      this.dialogVisible = true
    },
    submitModifyForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
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

