import Vue from "vue";
Vue.filter("employerMileStoneStatus", function(statusCode) {
  let status = "";
  switch (statusCode) {
    case 0:
      status = "پرداخت";
      break;
    case 1:
      status = "بررسی فایل";
      break;
    case 2:
      status = "تمام شده";
      break;
    default:
      status = "در انتظار تعیین وضعیت";
  }
  return status;
});
