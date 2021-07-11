import { API_V4 } from "@/services/config/auth-axios";

class TicketsService {
  getCategories() {
    return API_V4.get("/users/tickets/categories");
  }

  getHints() {
    return API_V4.get("/users/tickets/hints");
  }

  getTickets(page, perPage) {
    return API_V4.get(`/users/tickets?page=${page}&per_page=${perPage}`);
  }

  getTicketInfo(ticketId) {
    return API_V4.get(`/users/tickets/${ticketId}`);
  }

  getConversations(ticketId, page = 1) {
    return API_V4.get(`/users/tickets/${ticketId}/conversations?page=${page}`);
  }

  create(data) {
    const { categoryId, title, body, file = null } = data;
    const form = new FormData();
    form.append("type", "ticket");
    form.append("ticket_category_id", categoryId);
    form.append("title", title);
    form.append("body", body);
    file && form.append("file", file);
    return API_V4.post("/users/tickets/store", form, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }

  reply(data) {
    const { ticketId, body, file = null } = data;
    const form = new FormData();
    form.append("type", "ticket");
    form.append("body", body);
    file && form.append("file", file);
    return API_V4.post(`/users/tickets/${ticketId}/conversations/store`, form, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }

  close(ticketId) {
    return API_V4.post(`/users/tickets/${ticketId}/close`, {});
  }
}

export default new TicketsService();
