<template>
  <swiper class="detail-swiper" v-if="topImages.length > 0">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper';
export default {
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { Swiper, SwiperItem },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() { },
  created() {
    // console.log('ChildSwiper中topImages为:', this.topImages);
  },
};
</script>
