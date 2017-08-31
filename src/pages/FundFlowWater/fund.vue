<template>
  <div>
      <breadcrumb></breadcrumb>
  </div>
</template>
<script>
import breadcrumb from '../../components/Breadcrumb'
export default {
  data() {
    return {}
  },
  methods: {
    toDetail: function(params) {
      this.$router.push('/borrowDetail')
    }
  },
  components: {
    breadcrumb
  }
}
</script>