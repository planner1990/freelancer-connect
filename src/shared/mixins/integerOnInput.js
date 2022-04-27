export default {
  methods: {
    $integerOnInput(value) {
      if (isNaN(this.$removeThousand(value)) === true) {
        return value = "";
      } else {
        value = this.$removeThousand(value);
        value = this.$thousandMask(value);
      }
    }
  }
};
