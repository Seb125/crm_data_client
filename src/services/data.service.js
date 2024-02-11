import axios from "axios";

class DataService {
    constructor() {
        this.api = axios.create({
            baseURL: import.meta.env.VITE_API_URL
        });
    }

    data = (requestBody) => {
        return this.api.post("/updateData", requestBody);
    };
}

// Create one instance (object) of the service
const dataService = new DataService();

export default dataService;
