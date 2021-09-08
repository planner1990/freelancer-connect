import Vue from "vue";
import dayjs from "dayjs";
dayjs.locale("fa");
Vue.filter("changeDate", function(date) {
  return dayjs(date)
    .locale("fa")
    .format("YYYY-MM-DD");
});
