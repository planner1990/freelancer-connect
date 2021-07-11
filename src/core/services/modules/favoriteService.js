import { API_V4 } from "@/services/config/auth-axios";

class FavoriteService {
  getFavoritesCurrencies() {
    return API_V4.get("/users/favorites");
  }
  addFavoritesCurrencies(index) {
    return API_V4.post("/users/favorites/store", {
      currency_id: index
    });
  }
  removeFavoritesCurrencies(index) {
    return API_V4.post(
      `/users/favorites/delete/${index}`,
      {},
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}

export default new FavoriteService();
