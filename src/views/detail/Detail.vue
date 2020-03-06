<template>
  <div>
    <h1>我是详情页</h1>
    {{ id }}
  </div>
</template>

<style scoped></style>

<script>
export default {
  components: {},
  data() {
    return {
      id: null,
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    console.log(this.$route.params);
    this.id = this.$route.params.id;
  },
};
</script>
