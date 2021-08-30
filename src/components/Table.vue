<template>
  <b-table striped hover :items="filterTheCity"></b-table>
</template>

<script>
export default {
  computed: {
    filterTheCity() {
      return this.$store.getters.filterTheCity;
    },
  },
};
</script>
