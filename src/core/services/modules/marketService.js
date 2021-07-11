import { API_V4 } from "@/services/config/auth-axios";

class MarketService {
  getAvailableMarketList() {
    return API_V4.get("/markets");
  }
  getBaseCurrencies() {
    return API_V4.get("/markets/base-currencies");
  }
}

export default new MarketService();
