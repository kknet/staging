<template>
  <div>
    <breadcrumb :items="breadcrumbText"></breadcrumb>
    <div class="base">
      <div class="searchCondition">
        <el-form ref="form" :model="form" class="demo-ruleForm" label-position="top">
          <el-row :gutter="20">
            <el-col :span="7">
              <el-form-item label="安保公司">
                <el-input v-model="form.company" placeholder="请输入安保公司"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="审核员">
                <el-input v-model="form.checkMan" placeholder="请输入审核员"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item>
                <div class="btnWrapper">
                  <el-button class="searchBtn" type="primary">查询</el-button>
                </div>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item>
                <div class="btnWrapper">
                  <el-button class="searchBtn" type="primary" @click="dialogVisible = true">添加</el-button>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <table class="tableIncludeBtn">
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
          <tr>
            <td>兑换人</td>
            <td>手机号码</td>
            <td>所在店铺</td>
            <td>启用</td>
            <td>
              <el-button size="small" type="primary">禁用</el-button>
            </td>
          </tr>
          <tr>
            <td>兑换人</td>
            <td>手机号码</td>
            <td>所在店铺</td>
            <td>启用</td>
            <td>
              <el-button size="small" type="primary">禁用</el-button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="block" style="margin-top:20px">
        <el-pagination layout="prev, pager, next, jumper" :total="1000">
        </el-pagination>
      </div>
      <el-dialog title="添加审核员" :visible.sync="dialogVisible" class="demo-ruleForm">
        <el-form ref="addForm" :inline="true" :model="addForm" :rules="rules" class="demo-form-inline" label-position="left" label-width="120px">
          <el-form-item label="审核员手机号" prop="phone">
            <el-input v-model="addForm.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="审核员姓名" prop="checkMan">
            <el-input v-model="addForm.checkMan" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="所属安保公司" prop="company">
            <el-input v-model="addForm.company" placeholder="请输入安保公司"></el-input>
          </el-form-item>
        </el-form>
        <div class="footer">
          <el-button type="primary" @click="submitAddForm('addForm')">添加</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import breadcrumb from '../../components/Breadcrumb'
export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      } else {
        if (/^1[3|4|5|7|8][0-9]\d{8}$/.test(value)) {
          callback()
        } else {
          return callback(new Error('手机号不合法'))
        }
      }
    }
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
        phone: null,
        checkMan: '',
        company: ''
      },
      dialogVisible: false,
      rules: {
        phone:
        [
          { required: true, validator: checkPhone, trigger: 'blur,change' }
        ],
        checkMan:
        [
          { required: true, message: '请输入审核员', trigger: 'blur' },
          { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
        ],
        company: [
          { required: true, message: '请输入安保公司', trigger: 'blur' },
          { max: 12, message: '公司名称不能超过12个字', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitAddForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogVisible = false
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
<style lang="scss" scoped>
$main_width:700px;
.base {
  width: $main_width;
  .searchCondition {
    overflow: hidden;
    .btnWrapper {
      margin-top: 24px;
      .searchBtn {
        width: 94px;
        float: right;
      }
    }
  }
  .demo-ruleForm {
    text-align: center;
  }
}
</style>
