import { API_V4, API_V3 } from "@/services/config/auth-axios";

class OrderService {
  getMarketOrders(status) {
    if (!status) {
      return API_V4.get("/market-orders");
    }
    return API_V4.get("/market-orders?status=" + status);
  }
  createMarketOrder(data) {
    const {
      base_amount,
      asset_amount,
      base_change_fee,
      asset_change_fee,
      rate,
      market_id,
      direction,
      expires_at
    } = data;
    return API_V4.post("/market-orders", {
      base_amount,
      asset_amount,
      base_change_fee,
      asset_change_fee,
      rate,
      market_id,
      direction,
      expires_at,
      is_from_app: false
    });
  }
  inquiry(data) {
    const {
      base_amount,
      asset_amount,
      market_id,
      direction,
      expires_at
    } = data;
    return API_V4.post("/market-orders/inquiry/fee", {
      base_amount,
      asset_amount,
      market_id,
      direction,
      expires_at
    });
  }
  cancelMarketOrder(reference_number) {
    return API_V4.post("/market-orders/cancel", {
      reference_number: reference_number
    });
  }
  orderToken(data) {
    return API_V3.post("/orders/token", {
      from_currency_id: data.base_id,
      from_amount: data.base_amount,
      to_currency_id: data.asset_id,
      to_amount: data.asset_amount
    });
  }
  createOrder(data) {
    const { base_amount, asset_amount, order_token } = data;
    return API_V3.post("/orders", {
      order_token: order_token,
      from_amount: base_amount,
      to_amount: asset_amount,
      is_from_balance: 1,
      is_to_balance: 1,
      is_fee_from_source: 0,
      rules_checkbox: 1,
      from_address: "",
      from_address_extra: "",
      to_address: "",
      to_address_extra: ""
    });
  }
}

export default new OrderService();
