export default {
  methods: {
    $exponent(number, exponent) {
      let res = number.toString();
      if (res.includes("e")) {
        res = this.removeExpo(number);
      }
      if (exponent || exponent === 0) {
        if (res.includes(".")) {
          const arr = res.split(".");
          const real = arr[0];
          let decimal = arr[1];
          while (decimal.length > exponent) {
            decimal = decimal.substring(0, decimal.length - 1);
          }
          res = decimal.length ? real + "." + decimal : real;
        }
      }

      return res;
    },

    removeThousand(value) {
      const str = value.toString();
      return str?.replaceAll(",", "");
    },

    removeExpo(number) {
      const str = number.toString();
      const arr = str.split("e");
      const float = parseFloat(arr[0]);
      const floatReal = float.toString().split(".")[0];
      const floatRealLength =
        float < 0 ? floatReal.length - 1 : floatReal.length;
      const floatDecimal = float.toString().split(".")[1];
      const floatDecimalLength =
        float < 0 ? floatDecimal.length - 1 : floatDecimal?.length;
      const pow = parseInt(arr[1]);

      if (pow < 0) {
        let zeros = "";
        let res;
        for (let i = floatRealLength; i < -pow; i++) {
          zeros = zeros + "0";
        }
        if (number < 0) {
          res = "-0." + zeros + -floatReal + floatDecimal;
        } else if (number > 0) {
          res = "0." + zeros + floatReal + floatDecimal;
        }
        return res;
      } else if (pow > 0) {
        let res;
        if (floatDecimal) {
          let zeros = "";
          for (let i = floatRealLength; i <= pow - floatDecimalLength; i++) {
            zeros = zeros + "0";
          }
          res = float.toString().replace(".", "") + zeros;
        } else {
          let zeros = "";
          for (let i = floatRealLength; i <= pow; i++) {
            zeros = zeros + "0";
          }
          res = res = float + zeros;
        }
        return res;
      }
    }
  }
};
