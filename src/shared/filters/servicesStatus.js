import Vue from "vue";
Vue.filter("servicesStatus", function(statusCode) {
  let status = "";
  switch (statusCode) {
    case "draft":
      status = "در انتظار تایید";
      break;
    case "published":
      status = "منتشر شده";
      break;
    case "rejected":
      status = "رد شده";
      break;
  }
  return status;
});
