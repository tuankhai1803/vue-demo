<template lang="">
  <b-button variant="danger" @click="getInfo">Get Info</b-button>
</template>
<script>
export default {
  textBtn: {
    type: String,
  },
  methods: {
    getInfo: function() {
      this.$store.dispatch("getInfo");
    },
  },
};
</script>
