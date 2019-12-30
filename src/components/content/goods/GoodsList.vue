<template>
  <div class="goods">
    <goods-item v-for="(item,index) in goods"
                :key="index"
                :goodItem="item"></goods-item>
  </div>
</template>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>

<script>
import GoodsItem from './GoodsItem'
export default {
  components: { GoodsItem },
  props: {
    goods: {
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