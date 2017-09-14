<template>
  <div class="sidebar" :data-role="role">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>{{ item.title }}</template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :title="item.title" :key="item.index">
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
      role: '',
      titles: [],
      items: sessionStorage.getItem('role') === '1' ? [{
        icon: 'el-icon-setting',
        index: 'stageReview',
        title: '分期审核'
      },
      {
        icon: 'el-icon-menu',
        index: 'review',
        title: '借款记录'
      },
      {
        icon: 'el-icon-date',
        index: 'securityCompany',
        title: '安保公司管理'
      },
      {
        icon: 'el-icon-star-on',
        index: 'checkManage',
        title: '审核员管理'
      }
      ] : [{
        icon: 'el-icon-setting',
        index: 'stageReview',
        title: '分期审核'
      },
      {
        icon: 'el-icon-menu',
        index: 'review',
        title: '借款记录'
      },
      {
        icon: 'el-icon-date',
        index: 'securityCompany',
        title: '安保公司管理'
      },
      {
        icon: 'el-icon-star-on',
        index: 'checkManage',
        title: '审核员管理'
      },
      {
        icon: 'el-icon-document',
        index: 'accountManage',
        title: '账号管理'
      }
      ]
    }
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {},
  mounted() {
    this.role = sessionStorage.getItem('role')
    console.log('role:' + sessionStorage.getItem('role'))
  }
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
