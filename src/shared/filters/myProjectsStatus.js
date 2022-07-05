import Vue from "vue";
Vue.filter("myProjectStatus", function(statusCode) {
  let status = "";
  switch (statusCode) {
    case "pending":
      status = "در انتظار تعیین فریلنسر از سوی شما";
      break;
    case "ongoing":
      status = "در حال انجام";
      break;
    case "hired":
      status = "استخدام شده";
      break;
    case "completed":
      status = "تکمیل شده";
      break;
    case "rejected":
      status = "رد شده";
      break;
    case "draft":
      status = "در انتظار تایید ادمین";
      break;
    default:
      status = "در انتظار تعیین وضعیت";
  }
  return status;
});
