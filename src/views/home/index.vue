<template>
  <div></div>
</template>

<style scoped></style>

<script>
import { request } from '../../network/request'
export default {
  components: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    init() {
      request({
        url: '/user-agent'
      }).then(res => {
        console.log('请求的结果为:', res)
      })
    },
    init1() {
      request({
        url: '/anything'
      }).then(res => {
        console.log('请求的结果为:', res)
      })
    }
  },
  created() {
    this.init()
    this.init1()
  }
}
</script>
