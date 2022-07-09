import Vue from "vue";

Vue.filter("persianDigit", function(value) {
  const persian = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹"
  };
  let result = value ? value.toString() : value;
  for (let i = 0; i <= 9; i++) {
    result = result
      ? result.replace(new RegExp(`${i}`, "g"), persian[i])
      : result;
  }
  // value = result;
  return result;
});
