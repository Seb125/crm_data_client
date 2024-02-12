import axios from "axios";

class DataService {
    constructor() {
        this.api = axios.create({
            baseURL: import.meta.env.VITE_TEST_API_URL || "https://crm-statistics.adaptable.app"
        });
    
    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
        // Retrieve the JWT token from the local storage
        const storedToken = localStorage.getItem("authToken");

        if (storedToken) {
            config.headers = { Authorization: `Bearer ${storedToken}` };
        }

        return config;
    });
    
    }

    data = (requestBody) => {
        return this.api.post("/updateData", requestBody);
    };
}

// Create one instance (object) of the service
const dataService = new DataService();

export default dataService;
