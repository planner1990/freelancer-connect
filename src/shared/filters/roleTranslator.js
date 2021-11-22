import Vue from "vue";
Vue.filter("roleTranslator", function(statusCode) {
  let status = "";
  switch (statusCode) {
    case "employer":
      status = "کارفرما";
      break;
    case "freelancer":
      status = "فریلنسر";
      break;
    default:
      status = "در انتظار تعیین وضعیت";
  }
  return status;
});
