<template>
  <div class="title">
    <Button />
    <div class="search">
      <b-form>
        <b-form-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Input name..."
          v-model="textString"
        />
      </b-form>
      <b-button variant="primary" class="search-button" @click="onFilterByName"
        >Search</b-button
      >
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  data() {
    return {
      textString: "",
      textStringClientSide: "",
    };
  },
  components: {
    Button,
  },
  methods: {
    onFilterByName: function() {
      this.$store.dispatch("searchByName", this.textString);
    },
  },
};
</script>
<style scoped>
.title {
  display: flex;
  justify-content: space-between;
}
.search {
  display: flex;
}

.search-button {
  margin-left: 0.5rem;
}
</style>
