import { API_V4 } from "@/services/config/auth-axios";

class NotificationService {
  getNotifications() {
    return API_V4.get("/users/notifications");
  }
  getNotificationsPerPage(page) {
    return API_V4.get(`/users/notifications?page=${page}`);
  }
  getUnreadNotifications() {
    return API_V4.get(`/users/notifications/unread`);
  }
  readOneNotifications(id) {
    return API_V4.post(
      `/users/notifications/mark-as-read/${id}`,
      {},
      {
        headers: {
          "content-type": "application/json"
        }
      }
    );
  }
  readAllNotifications() {
    return API_V4.post(
      "/users/notifications/mark-as-read/all",
      {},
      {
        headers: {
          "content-type": "application/json"
        }
      }
    );
  }
}

export default new NotificationService();
