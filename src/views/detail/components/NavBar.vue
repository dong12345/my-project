<template>
  <div>
    <nav-bar>
      <div slot="left" @click="back">
        <
      </div>
      <div slot="center" class="center">
        <div
          v-for="(title, index) in titles"
          :class="{ active: currentIndex === index }"
          class="item"
          @click="titleClick(index)"
        >
          {{ title }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  font-size: 14px;
}

.item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>

<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
  components: { NavBar },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    };
  },
  watch: {},
  computed: {},
  methods: {
    back() {
      this.$router.back();
    },
    titleClick(index) {
      this.currentIndex = index;
    },
  },
  created() {},
};
</script>
