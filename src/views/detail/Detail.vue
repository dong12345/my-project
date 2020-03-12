<template>
  <div id="detail">
    <nav-bar class="nav-bar"></nav-bar>
    <scroll class="content" ref="scroll">
      <swiper :top-images="topImages"></swiper>
      <detail-baseInfo :goods="goods"></detail-baseInfo>
      <shop-info :shop="shopInfo"></shop-info>
      <detail-goodsInfo
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goodsInfo>
    </scroll>
  </div>
</template>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 60px;
}
.nav-bar {
  position: relative;
  background-color: #fff;
  z-index: 1;
}
</style>

<script>
import NavBar from './components/NavBar';
import Swiper from './components/Swiper';
import DetailBaseInfo from './components/DetailBaseInfo';
import ShopInfo from './components/ShopInfo';
import DetailGoodsInfo from './components/DetailGoodsInfo';

import Scroll from 'components/common/scroll/Scroll';

import { getDetail, Goods, Shop } from 'network/detail';
export default {
  name: 'Detail',
  components: {
    NavBar,
    Swiper,
    DetailBaseInfo,
    ShopInfo,
    DetailGoodsInfo,
    Scroll,
  },
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
    };
  },
  watch: {},
  computed: {},
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
  },
  created() {
    console.log('进入了Detail页面');
    this.id = this.$route.params.id;
    getDetail(this.id).then(res => {
      const data = res.result;
      //获取顶部轮播数据
      this.topImages = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //创建店铺信息
      this.shopInfo = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
    });
  },
};
</script>
