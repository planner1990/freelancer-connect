import { API_V4 } from "@/services/config/auth-axios";

class walletService {
  getWallet() {
    return API_V4.get("/users/wallets");
  }

  getWalletV4() {
    return API_V4.get("/users/wallets");
  }

  updateWalletV4(id) {
    return API_V4.get("/users/wallets/check?currency_id=" + id);
  }

  getExchanges() {
    return API_V4.get("/core/exchanges");
  }
}

export default new walletService();
