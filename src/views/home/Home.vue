<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>

<script>
import { getHomeMultidata } from 'network/home'
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './components/HomeSwiper'
import RecommendView from './components/RecommendView'
export default {
  components: { NavBar, HomeSwiper, RecommendView },
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  watch: {},
  computed: {},
  methods: {

  },
  created () {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      console.log(this.banners);
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>
