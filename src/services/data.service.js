import axios from "axios";

class DataService {
    constructor() {
        this.api = axios.create({
            baseURL: "https://crm-statistics.adaptable.app"
        });
    
    }

    data = (requestBody) => {
        return this.api.post("/updateData", requestBody);
    };
    campaigns = (requestBody) => {
        return this.api.post("/campaigns", requestBody);
    };
    
}

// Create one instance (object) of the service
const dataService = new DataService();

export default dataService;
