<template>
  <div class="accountManage">
    <breadcrumb :items="breadcrumbText"></breadcrumb>
    <div class="base">
      <div class="btnWrapper">
        <el-button class="searchBtn" type="primary" @click="dialogVisible = true">添加</el-button>
      </div>
      <table class="tableIncludeBtn">
        <thead>
          <tr>
            <th>姓名</th>
            <th>账号</th>
            <th>手机号</th>
            <th>角色</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>兑换人</td>
            <td>账号</td>
            <td>手机号</td>
            <td>角色</td>
            <td>状态</td>
            <td style="width: 200px">
              <el-button size="small" type="primary" @click="openForbiddenBox('514917919')">禁用</el-button>
              <el-button size="small" type="primary" @click="openSureResetBox('514917919')">重置密码</el-button>
              <el-button size="small" type="primary" @click="editDialogVisible = true">编辑</el-button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="block" style="margin-top:20px">
        <el-pagination layout="prev, pager, next, jumper" :total="1000">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="添加账号" :visible.sync="dialogVisible" class="demo-ruleForm">
      <el-form ref="addForm" :inline="true" :model="addForm" :rules="rules" class="demo-form-inline" label-position="left" label-width="120px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="addForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="addForm.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="type">
          <el-select v-model="addForm.type" placeholder="请选择">
            <el-option label="管理员" value="manage">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="  " prop="btn">
          <el-button style="width:173px" type="primary" @click="submitAddForm('addForm')">添加</el-button>
        </el-form-item>
      </el-form>
      <!-- <div class="footer">
              <el-button type="primary" @click="submitAddForm('addForm')">添加</el-button>
            </div> -->
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
import utils from '../../common/js/phone'
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
        title: '账号管理',
        path: ''
      }],
      addForm: {
        name: '',
        phone: '',
        type: ''
      },
      editForm: {
        name: '',
        phone: ''
      },
      dialogVisible: false,
      editDialogVisible: false,
      rules: {
        name:
        [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
        ],
        phone:
        [
          { required: true, validator: utils.checkPhone, trigger: 'blur,change' }
        ],
        type:
        [
          { required: true, message: '请选择角色', trigger: 'blur' }
        ],
        btn:
        [
          { trigger: '' }
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
          { required: true, validator: utils.checkPhone, trigger: 'blur,change' }
        ]
      }
    }
  },
  methods: {
    openForbiddenBox(account) {
      this.$confirm(`此操作将禁用${account}的账号, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '禁用成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消禁用'
        })
      })
    },
    openSureResetBox(account) {
      this.$confirm(`此操作将重置${account}的密码, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '重置成功!'
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

