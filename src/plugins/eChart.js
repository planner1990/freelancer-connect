import Vue from "vue";
import ECharts from "vue-echarts";
import { use } from "echarts/core";
import { PieChart } from "echarts/charts";
import { TitleComponent } from "echarts/components";

// import ECharts modules manually to reduce bundle size
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";
import { LegendComponent } from "echarts/components";

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent,
  PieChart,
  TitleComponent,
  LegendComponent
]);

// register globally (or you can do it locally)
Vue.component("v-chart", ECharts);
