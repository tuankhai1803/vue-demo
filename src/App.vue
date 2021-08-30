<template>
  <div id="app">
    <TitleScreen />
    <TableScreen />
  </div>
</template>

<script>
import TableScreen from "./components/Table.vue";
import TitleScreen from "./components/Title.vue";

export default {
  name: "App",
  components: {
    TableScreen,
    TitleScreen,
  },
};
</script>

<style scoped>
#app {
  margin: 1rem;
}
</style>
