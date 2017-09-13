<template>
  <div>
    <el-select v-model="address.province" placeholder="省" style="width:150px;" @change="firstLeve">
      <el-option v-for="item in province" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="address.city" placeholder="市" style="width:150px;" @change="secLeve">
      <el-option v-for="item in city" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="address.area" placeholder="区" style="width:150px;" @change="getthir">
      <el-option v-for="item in area" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>
<script>
import { ERR_OK } from '../common/js/config'
import { getProvince, getCity } from '../api/index'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      address: {
        province: '',
        city: '',
        area: ''
      },
      province: [],
      city: [],
      area: []
    }
  },
  created() {
    this.getFirst()
  },
  methods: {
    getFirst() {
      let params = {}
      getProvince(params).then((res) => {
        if (res.code === ERR_OK) {
          this.province = this.getAddress(res.list)
        }
      })
    },
    firstLeve() {
      let params = {
        areaCode: this.address.province
      }
      getCity(params).then((res) => {
        if (res.code === ERR_OK) {
          this.address.city = ''
          this.address.area = ''
          this.area = []
          this.city = this.getAddress(res.list)
        }
      })
    },
    secLeve() {
      let params = {
        areaCode: this.address.city
      }
      getCity(params).then((res) => {
        if (res.code === ERR_OK) {
          this.area = this.getAddress(res.list)
          this.address.area = ''
        }
      })
    },
    getthir() {
      this.$emit('listenToChildEvent', this.address)
      this.setAddress(this.address)
    },
    getAddress(lists) {
      let pro = {
        items: []
      }
      let list = lists
      list.forEach((item) => {
        pro.items.push({
          value: item.areaCode,
          label: item.areaName
        })
      })
      return pro.items
    },
    ...mapMutations({
      setAddress: 'SET_ADDRESS'
    })
  }
}
</script>