import Vue from "vue";
Vue.filter("freelancerMileStoneStatus", function(statusCode) {
  let status = "";
  switch (statusCode) {
    case 0:
    case 1:
      status = "ارسال شد (در انتظار تایید کارفرما)";
      break;
    case 2:
      status = "تمام شده";
      break;
    default:
      status = "در انتظار تعیین وضعیت";
  }
  return status;
});
