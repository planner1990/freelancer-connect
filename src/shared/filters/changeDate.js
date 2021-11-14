import dayjs from "dayjs";
import jalaliday from "jalaliday";
import Vue from "vue";
dayjs.extend(jalaliday).locale("fa");
dayjs.calendar("jalali").locale("fa");

Vue.filter("changeDate", function(date) {
  return dayjs(date).format("YYYY/MM/DD");
});
