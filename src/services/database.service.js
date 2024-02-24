import axios from "axios";

class DatabaseService {
    constructor() {
        this.api = axios.create({
            baseURL: import.meta.env.VITE_API_URL || "http://localhost:5005"
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
    getData = () => {
        return this.api.get("/getData")
    }
    getErpData = () => {
        return this.api.get("/analytics/erp")
    }
}

// Create one instance (object) of the service
const databaseService = new DatabaseService();

export default databaseService;
