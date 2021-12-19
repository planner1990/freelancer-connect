import Vue from "vue";

Vue.filter("readMore", function(text, length, suffix = " ") {
  if (text?.length >= length) {
    return text ? text.substring(0, length) + suffix : "";
  } else {
    return text ? text.substring(0, length) : "";
  }
});
