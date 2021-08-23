import { API_V1 } from "../config/auth-axios";

class UploadService {
  uploadFile(formData) {
    return API_V1.post(`upload`, formData);
  }
}

export default new UploadService();
