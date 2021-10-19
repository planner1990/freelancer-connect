import Vue from "vue";
Vue.filter("installments", function(statusCode) {
  let status = "";
  switch (statusCode) {
    case 1:
      status = "اول";
      break;
    case 2:
      status = "دوم";
      break;
    case 3:
      status = "سوم";
      break;
    case 4:
      status = "چهارم";
      break;
    case 5:
      status = "پنجم";
      break;
    case 6:
      status = "ششم";
      break;
    default:
      status = "در انتظار تعیین وضعیت";
  }
  return status;
});
