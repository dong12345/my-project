<template>
  <div class="tab-bar-item">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created () { }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  font-size: 12px;
  cursor: pointer;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: -3px;
}
</style>
 