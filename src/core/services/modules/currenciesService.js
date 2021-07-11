import { API_V4 } from "@/services/config/main-axios";

class CurrenciesService {
  getCurrencies() {
    return API_V4.get("/core/currencies");
  }
}

export default new CurrenciesService();
