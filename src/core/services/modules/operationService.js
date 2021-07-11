import { API_V4 } from "@/services/config/auth-axios";

class OperationService {
  setAddress(currency_id, network_id) {
    let data = {
      currency_id: currency_id,
      network_id: network_id
    };
    return API_V4.post(`/users/wallets/set-address`, data);
  }
  getGateways() {
    return API_V4.get(`/core/gateways`);
  }
  addBankCard(bank_card) {
    return API_V4.post(`/verification/bank-cards`, { bank_card: bank_card });
  }
  getBankCard() {
    return API_V4.get(`/verification/bank-cards`);
  }
  depositIRR(data) {
    return API_V4.post(`/orders/deposit/IRR`, data);
  }
  setOrderToken(data) {
    return API_V4.post(`/orders/get-token`, data);
  }
  getOrderTokenData(data) {
    return API_V4.get(`/orders/get-order-token/` + data);
  }
  storeOrder(data) {
    return API_V4.post(`/orders`, data);
  }
  showOrder(order_ref_no) {
    return API_V4.get(`/orders/${order_ref_no}`);
  }

  verifyOrder(data) {
    return API_V4.post(`/orders/verify`, data);
  }
  confirmOrder(data) {
    return API_V4.post(`/orders/confirm`, data);
  }
  verifyOrderOtp(data) {
    return API_V4.post(`/orders/verify`, data);
  }
  withdrawIRR(data) {
    return API_V4.post(`/orders/withdraw/IRR`, data);
  }
  withdrawCrypto(data) {
    return API_V4.post(`/orders/withdraw/crypto`, data);
  }
  cancelOrder(data) {
    return API_V4.post(`/orders/cancel`, data);
  }
  resendOrderVerification(data) {
    return API_V4.post(`/orders/verification/resend`, data);
  }
  getOrderConfig() {
    return API_V4.get(`/orders/config/get`);
  }
  getShebaList() {
    return API_V4.get(`/verification/sheba`);
  }
  storeSheba(data) {
    return API_V4.post(`/verification/sheba`, data);
  }
  deleteSheba(data) {
    return API_V4.post(`/verification/sheba/delete`, data);
  }
  exchangeGetToken(data) {
    return API_V4.post(`/orders/get-token`, data);
  }
  getWalletAddresses() {
    return API_V4.get(`/accounts/address`);
  }
  addWalletAddress(data) {
    return API_V4.post(`/accounts/address`, data);
  }
  sendAddressOtpCode(data) {
    return API_V4.post(`accounts/address/otp`, data);
  }
  verifyAddressOtp(data) {
    return API_V4.post(`/accounts/address/verify`, data);
  }
  deleteWalletAddress(data) {
    return API_V4.post(`/accounts/address/delete`, data);
  }
  resendAddressOtp(data) {
    return API_V4.post(`accounts/address/otp/resend`, data);
  }
  getCurrencyNetworks(data) {
    return API_V4.post(`/accounts/currency-networks`, data);
  }
}
export default new OperationService();
