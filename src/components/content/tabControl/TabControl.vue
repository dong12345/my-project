<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         :class="{active:index===currentIndex}"
         @click="itemClick(index)"
         class="tab-control-item"
         :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 2px solid var(--color-tint);
}
</style>

<script>
export default {
  components: {},
  props: {
    titles: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    itemClick (index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  },
  created () { }
};
</script>