<template>
  <div id="app">
    <!-- <h2>webpack初始化的项目</h2> -->
    <Home></Home>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import Home from './views/home/index'
import TabBar from './components/tabbar/TabBar'

export default {
  components: { Home, TabBar },
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created() {}
}
</script>
