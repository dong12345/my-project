<template>
  <div id="app">
    <Home></Home>
    <tab-bar>
      <tab-bar-item>
        <img slot="item-icon"
             src="./assets/img/tabbar/home.svg"
             alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon"
             src="./assets/img/tabbar/category.svg"
             alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon"
             src="./assets/img/tabbar/shopcart.svg"
             alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon"
             src="./assets/img/tabbar/profile.svg"
             alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>

    </tab-bar>
  </div>
</template>

<script>
import Home from './views/home/index'
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'

export default {
  components: { Home, TabBar, TabBarItem },
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created () { }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
