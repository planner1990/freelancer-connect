import { API_V4 } from "@/services/config/auth-axios";

class TradingViewService {
  getCryptoTechnicalData(query) {
    return API_V4.get("/crypto-technical-data/ohlcv", {
      params: query
    });
  }
}

export default new TradingViewService();
