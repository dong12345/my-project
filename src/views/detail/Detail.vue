<template>
  <div>
    <child-nav-bar></child-nav-bar>
    <child-swiper :top-images="topImages"></child-swiper>
  </div>
</template>

<style scoped></style>

<script>
import ChildNavBar from './components/ChildNavBar';
import ChildSwiper from './components/ChildSwiper';

import { getDetail } from 'network/detail';
export default {
  name: 'Detail',
  components: { ChildNavBar, ChildSwiper },
  data() {
    return {
      id: null,
      topImages: [],
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    console.log('进入了Detail页面');
    this.id = this.$route.params.id;
    getDetail(this.id).then(res => {
      // console.log(res);
      this.topImages = res.result.itemInfo.topImages;
    });
  },
};
</script>
