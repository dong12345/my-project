<template>
  <div id="app">
    <keep-alive>
      <router-view> </router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>

import MainTabBar from 'components/content/mainTabBar/MainTabBar'
export default {
  components: { MainTabBar },
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
@import "assets/css/base.css";
</style>
