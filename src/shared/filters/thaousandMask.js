import Vue from "vue";

Vue.filter("thousandMask", function(number) {
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});
