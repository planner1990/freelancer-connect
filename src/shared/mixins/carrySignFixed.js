export default {
  methods: {
    $carrySignFixed(number1, number2, symbol) {
      let number1Point = number1.toString().split(".")[1]
        ? number1.toString().split(".")[1].length
        : 0;
      let number2Point = number2.toString().split(".")[1]
        ? number2.toString().split(".")[1].length
        : 0;
      if (symbol === "+") {
        return number1Point >= number2Point
          ? (number1 + number2).toFixed(number1Point)
          : (number1 + number2).toFixed(number2Point);
      } else if (symbol === "-") {
        return number1Point >= number2Point
          ? (number1 - number2).toFixed(number1Point)
          : (number1 - number2).toFixed(number2Point);
      } else if (symbol === "/") {
        return number1 % number2 === 0
          ? (number1 / number2).toFixed(0)
          : number1 / number2;
      } else if (symbol === "*") {
        return (number1 * number2).toFixed(number1Point + number2Point);
      }
      // if (number.toString().length > 15) {
      //   let stringNumber = number.toFixed(15).toString();
      //   let length = stringNumber.length - 1;
      //   if (stringNumber[length] === "1") {
      //     stringNumber = parseFloat(stringNumber)
      //       .toFixed(length - 4)
      //       .toString();
      //     length = stringNumber.length - 1;
      //   }
      //   let certainLength = null;
      //   for (let i = length; i >= 0; i--) {
      //     if (stringNumber[i] !== "0" && stringNumber[i] !== "9") {
      //       certainLength = i;
      //       break;
      //     }
      //   }
      //   return stringNumber.slice(0, certainLength + 1);
      // } else {
      //   return number;
      // }
    }
  }
};
