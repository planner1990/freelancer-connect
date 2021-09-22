import Vue from "vue";
import dayjs from "dayjs";
dayjs.locale("fa");
Vue.filter("proposalStatus", function(statusCode) {
  let status = "";
  switch (statusCode) {
    case 0:
      status = "pending";
      break;
    case 1:
      status = "ongoing";
      break;
    case 2:
      status = "hired";
      break;
    case 3:
      status = "completed";
      break;
    case 4:
      status = "rejected";
      break;
  }
  return status;
});
