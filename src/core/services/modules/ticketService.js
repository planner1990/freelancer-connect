import { API_V1 } from "../config/auth-axios";

class ticketService {
  fullFillTickets(body) {
    return API_V1.post("/tickets/fulfill", body);
  }
  storeTickets(body) {
    return API_V1.post("/tickets", body);
  }
  indexTickets() {
    return API_V1.get(`/tickets`);
  }
  indexTicketsByThreadCode(threadCode) {
    return API_V1.get(`/tickets/${threadCode}`);
  }
}

export default new ticketService();
