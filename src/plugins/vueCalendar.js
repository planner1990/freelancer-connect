import Vue from "vue";
// import moment from "moment";
// import fa from "moment/locale/fa";
// moment.updateLocale("fa", fa);
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
Vue.use(VuePersianDatetimePicker, {
  name: "date-picker",
  props: {
    format: "YYYY-MM-DD HH:mm",
    displayFormat: "jYYYY-jMM-jDD HH:mm",
    // editable: false,
    inputClass: "form-control my-custom-class-name",
    placeholder: "تاریخ را انتخاب کنید",
    // altFormat: "YYYY-MM-DD HH:mm",
    color: "#59c1b8"
    // autoSubmit: true,
    //...
    //... And whatever you want to set as default.
    //...
  }
});
