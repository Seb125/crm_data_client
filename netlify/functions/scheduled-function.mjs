import dataService from "../services/data.service";


export default async () => {
    await dataService.data( {dataToken: import.meta.env.DATA_TOKEN})
    console.log("Data Update Done!")
}

export const config = {
    schedule: "@hourly"
}