export default {
  methods: {
    $thousandMask(number) {
      return this.numberWithCommas(number);
    },
    numberWithCommas(x) {
      return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
