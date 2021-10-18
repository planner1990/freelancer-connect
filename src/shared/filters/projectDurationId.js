import Vue from "vue";
Vue.filter("projectDurationId", function(statusCode) {
  let status = "";
  switch (statusCode) {
    case 1:
      status = "کمتر از یک هفته";
      break;
    case 2:
      status = "کمتر از یک ماه";
      break;
    case 3:
      status = "بین یک تا سه ماه";
      break;
    case 4:
      status = "زمان دلخواه";
      break;
    default:
      status = "زمان دلخواه";
  }
  return status;
});
