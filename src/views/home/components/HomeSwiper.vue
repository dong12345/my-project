<template>
  <div>
    <swiper v-if="banners.length">
      <swiper-item v-for="(item, index) in banners"
                   :key="index">
        <a :href="item.link">
          <img :src="item.image"
               alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<style scoped>
</style>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  components: { Swiper, SwiperItem },
  props: {
    banners: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  data () {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created () { }
};
</script>