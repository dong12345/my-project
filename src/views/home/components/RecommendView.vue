<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends"
         class="recommend-item"
         :key="index">
      <a :href="item.link">
        <img :src="item.image"
             alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<style scoped>
.recommend {
  display: flex;
  font-size: 12px;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 5px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
}
</style>

<script>
export default {
  components: {},
  props: {
    recommends: {
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