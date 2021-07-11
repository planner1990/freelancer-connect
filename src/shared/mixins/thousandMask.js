export default {
  methods: {
    $thousandMask(number) {
      const spl = number?.toString().split(".");

      if (spl && spl[1]) {
        //is decimal
        return this.numberWithCommas(spl[0]) + "." + spl[1];
      } else {
        //is real
        return this.numberWithCommas(number);
      }
    },
    numberWithCommas(x) {
      return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
