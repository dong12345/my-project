<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created () { }
}
</script>

<style>
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
</style>
