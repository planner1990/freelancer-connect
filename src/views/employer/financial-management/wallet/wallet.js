import DashboardCard from "@/components/dashboardCard/index";
export default {
  name: "wallet",
  components: { DashboardCard },
  props: [],
  data() {
    return {
      valid: true,
      dialog: false,
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      option: {
        textStyle: {
          fontFamily: 'IRANSans, "Helvetica Neue", Arial, sans-serif'
        },
        title: {
          text: "موجودی کل",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["قابل برداشت", "غیر قابل برداشت"]
        },
        series: [
          {
            name: "موجودی کل",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "قابل برداشت" },
              { value: 1200, name: "غیر قابل برداشت" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
