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
  data () {
    return {};
  },
  mounted () {
    let scroll = new BScroll(this.$refs.wrapper, {
      click: true
    });
  },
  watch: {},
  computed: {},
  methods: {},
  created () { }
};
</script>