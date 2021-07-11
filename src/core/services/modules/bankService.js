import { API_V4 } from "@/services/config/auth-axios";

class BankService {
  getCard() {
    return API_V4.get("/verification/bank-cards");
  }

  addCard(cardNumber) {
    return API_V4.post("/verification/bank-cards", {
      bank_card: cardNumber
    });
  }

  deleteCard(cardId) {
    return API_V4.post("/verification/bank-cards/delete", {
      bank_card_id: cardId
    });
  }

  getSheba() {
    return API_V4.get("/verification/sheba");
  }

  addSheba(address, name) {
    return API_V4.post("/verification/sheba", {
      address,
      name
    });
  }

  deleteSheba(address) {
    return API_V4.post("/verification/sheba/delete", {
      address
    });
  }
}

export default new BankService();
