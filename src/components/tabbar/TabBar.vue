<template>
  <div id="tab-bar">
    <div class="tab-bar-item">首页</div>
    <div class="tab-bar-item">分类</div>
    <div class="tab-bar-item">购物车</div>
    <div class="tab-bar-item">我的</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created() {}
}
</script>

<style>
@import '../../assets/css/base.css';

#tab-bar {
  display: flex;
  text-align: center;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.08);
}

.tab-bar-item {
  flex: 1;
  height: 49px;
}
</style>
