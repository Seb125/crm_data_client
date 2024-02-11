import dataService from "../../src/services/data.service";


export default async () => {
    await dataService.data( {dataToken: import.meta.env.VITE_DATA_TOKEN})
    console.log("Data Update Done!")
}

export const config = {
    schedule: "@hourly"
}