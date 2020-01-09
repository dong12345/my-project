<template>
  <div class="wrapper"
       ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import BScroll from 'better-scroll'
export default {
  components: {},
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    };
  },
  mounted () {
    //创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    console.log('this.scroll:', this.scroll);

    //监听滚动位置
    this.scroll.on('scroll', positon => {
      this.$emit('scroll', positon)
    })
    //监听上拉事件
    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多');
      this.$emit('pullingUp');
    })
  },
  watch: {},
  computed: {},
  methods: {
    scrollTo (x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh () {
      this.scroll && this.scroll.refresh();
    }
  },
  created () { }
};
</script>