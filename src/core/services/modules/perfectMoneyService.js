import { API_V4 } from "@/services/config/auth-axios";

class PerfectMoneyService {
  getFiats() {
    return API_V4.get("/core/currencies/fiats");
  }

  buyFiats(data) {
    return API_V4.post("/orders/fiats/buy", data);
  }

  sellFiats(data) {
    return API_V4.post("/orders/fiats/sell", data);
  }
}

export default new PerfectMoneyService();
