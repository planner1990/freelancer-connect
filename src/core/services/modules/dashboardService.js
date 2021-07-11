import { API_V4 } from "@/services/config/auth-axios";

class DashboardService {
  getBanner() {
    return API_V4.get("/users/dashboard/sliders");
  }
  getLatestOrders(count) {
    return API_V4.get(`/users/dashboard/orders?count=${count}`);
  }
  getLatestCurrencies(count) {
    return API_V4.get(`/users/dashboard/currencies?count=${count}`);
  }
}

export default new DashboardService();
