<template>
  <div>
    <h2>分类</h2>
    <div class="flex-container">
      <div class="flex-item">flex item 1</div>
      <div class="flex-item">flex item 2</div>
      <div class="flex-item">flex item 3</div>
    </div>
  </div>
</template>

<style scoped>
.flex-container {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-content: center;
  align-content: center;
  width: 300px;
  height: 300px;
  background-color: lightgrey;
}

.flex-item {
  background-color: cornflowerblue;
  width: 100px;
  height: 100px;
  margin: 10px;
}
</style>

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