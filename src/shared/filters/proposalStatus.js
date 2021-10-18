import Vue from "vue";
import dayjs from "dayjs";
dayjs.locale("fa");
Vue.filter("proposalStatus", function(statusCode) {
  let status = "";
  switch (statusCode) {
    case 0:
      status = "در حال انتظار";
      break;
    case 1:
      status = "استخدام شده";
      break;
    case 2:
      status = "رد شده";
      break;
    default:
      status = "در حال تعیین وضعیت";
  }
  return status;
});
