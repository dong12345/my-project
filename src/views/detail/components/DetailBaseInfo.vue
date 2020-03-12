<template>
  <div class="detail-Info" v-if="Object.keys(goods).length !== 0">
    <div class="title">
      {{ goods.title }}
    </div>
    <div class="detail-center">
      <span>{{ goods.newPrice }}</span>
      <span>{{ goods.oldPrice }}</span>
      <span>{{ goods.discount }}</span>
    </div>
    <div class="detail-bottom">
      <!-- <span class="flex-item">销量1580</span>
      <span class="flex-item">收藏33人</span>
      <span class="flex-item">72小时发货</span> -->
      <span
        class="flex-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index].icon" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.detail-Info {
  font-size: 12px;
}
.title {
  margin: 10px 5px;
  font-weight: 700;
}
.detail-center span {
  margin: 0 5px;
}
.detail-center span:first-child {
  font-size: 16px;
  color: #ff6677;
}

.detail-center span:nth-child(2) {
  text-decoration: line-through;
}
.detail-center span:last-child {
  background-color: #ff6677;
  color: #ffffff;
  padding: 3px;
  border-radius: 10px;
}

.detail-bottom {
  margin: 30px 5px;
  display: flex;
  justify-content: space-between;
}

.detail-bottom .flex-item {
  margin: 0 2px;
}
.flex-item img {
  height: 10px;
}
</style>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() { }
};
</script>