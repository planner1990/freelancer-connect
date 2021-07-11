import { API_V4 } from "@/services/config/auth-axios";

class GiftsService {
  getGifts() {
    return API_V4.get("/gifts/index");
  }
  getGiftsPagination(pageNumber) {
    return API_V4.get(`/gifts/index?page=${pageNumber}`);
  }
}

export default new GiftsService();
