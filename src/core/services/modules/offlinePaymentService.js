import { API_V4 } from "@/services/config/auth-axios";

class OfflinePaymentService {
  getAccount() {
    return API_V4.get("/offline-payment/accounts");
  }
  storePayment(data) {
    return API_V4.post("/offline-payment/store", data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
  getPayment(id) {
    return API_V4.get(`/offline-payment/${id}`);
  }
  getOfflineDepositAccount() {
    return API_V4.get("/offline-payment/deposit-ids");
  }
  getOfflinePaymentData(page) {
    return API_V4.get(`/offline-payment/index?page=${page}`);
  }
}

export default new OfflinePaymentService();
