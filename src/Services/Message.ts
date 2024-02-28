import axios from "axios";

const Message_API_BASE_URL = "http://localhost:8080/api/v1/message";

class MessageService {
  createMessage(data: { email: string; message: string; name: string }) {
    const { email, message, name } = data;
    console.log("Received data:", data);
    return axios.post(Message_API_BASE_URL + "/", { name, email, message });
  }
}

const messageServiceInstance = new MessageService();
export default messageServiceInstance;
