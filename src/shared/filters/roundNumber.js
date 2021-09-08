import Vue from "vue";

Vue.filter("roundNumber", function(number) {
  return Math.round(number);
});
