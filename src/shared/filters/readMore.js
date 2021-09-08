import Vue from "vue";

Vue.filter("readMore", function(text, length, suffix = " ") {
  return text ? text.substring(0, length) + suffix : "";
});
