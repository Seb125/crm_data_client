import axios from "axios";

class TestService {
    constructor() {
        this.api = axios.create({
            baseURL: import.meta.env.VITE_API_URL
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
    getData = () => {
        return this.api.get("/getData")
    }
}

// Create one instance (object) of the service
const testService = new TestService();

export default testService;
