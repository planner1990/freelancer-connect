import Vue from "vue";

Vue.filter("readMore", function(text, length, suffix) {
  return text.substring(0, length) + suffix;
});
export default class subStringFilter {
  readMore(text, length, suffix) {
    return text.substring(0, length) + suffix;
  }
}
