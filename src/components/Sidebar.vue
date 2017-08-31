<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
            <template slot="title">
              <i :class="item.icon"></i>{{ item.title }}</template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :title="item.title">
            <i :class="item.icon"></i>{{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: [],
      items: [
        {
          icon: 'el-icon-setting',
          index: 'base',
          title: '借款审核'
        },
        {
          icon: 'el-icon-menu',
          index: 'review',
          title: '提款审核'
        },
        {
          icon: 'el-icon-date',
          index: 'fund',
          title: '资金流水'
        },
        {
          icon: 'el-icon-star-on',
          index: 'borrowRecord',
          title: '借款记录'
        },
        {
          icon: 'el-icon-upload2',
          index: 'waitRefundRecord',
          title: '待还款记录'
        },
        {
          icon: 'el-icon-upload2',
          index: 'userManage',
          title: '用户管理'
        },
        {
          icon: 'el-icon-upload2',
          index: 'DataStatistics',
          title: '数据统计'
        },
        {
          icon: 'el-icon-upload2',
          index: 'accountManage',
          title: '账号管理'
          // subs: [
          //   {
          //     index: 'baseform',
          //     title: '基本表单'
          //   },
          //   {
          //     index: 'vueeditor',
          //     title: '编辑器'
          //   },
          //   {
          //     index: 'markdown',
          //     title: 'markdown'
          //   },
          //   {
          //     index: 'upload',
          //     title: '文件上传'
          //   }
          // ]
        }
      ]
    }
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {}
}
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  width: 200px;
  left: 0;
  top: 70px;
  bottom: 0;
  background: #2E363F;
}

.sidebar>ul {
  height: 100%;
}
</style>
