import Vue from "vue";
Vue.filter("freelancerMileStoneStatus", function(statusCode) {
  let status = "";
  switch (statusCode) {
    case 0:
    case 1:
      status = "ارسال شد";
      break;
    case 2:
      status = "تمام شده";
      break;
    default:
      status = "در انتظار تعیین وضعیت";
  }
  return status;
});
