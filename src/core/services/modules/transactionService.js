import { API_V4 } from "@/services/config/auth-axios";
import Qs from "qs";

class TransactionService {
  getExchangeOrders(query) {
    return API_V4.get("/users/orders/exchanges", {
      params: query,
      paramsSerializer: params => {
        return Qs.stringify(params, { arrayFormat: "indices" });
      }
    });
  }
  getFiltersStatus(query) {
    return API_V4.get("/users/orders/status", {
      params: query
    });
  }
  getTradeOrders(query) {
    return API_V4.get("/users/orders/trades", {
      params: query,
      paramsSerializer: params => {
        return Qs.stringify(params, { arrayFormat: "indices" });
      }
    });
  }
}
export default new TransactionService();
