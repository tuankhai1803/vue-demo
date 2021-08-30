<template lang="">
  <div>
    <b-card-group deck>
      <b-card
        :header="Button"
        :footer="cardFooter"
        header-tag="header"
        footer-tag="footer"
      >
        <slot />
        <!-- <b-card-text>Header and footers using props.</b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button> -->
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
  props: {
    headerText: {
      type: String,
      default: "",
    },
    // title: {
    //   type: String,
    // },
    cardFooter: {
      type: String,
      default: "",
    },
  },
};
</script>
