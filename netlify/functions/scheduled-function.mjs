import dataService from "../../src/services/data.service";


export default async () => {
    dataService.data( {dataToken: "026a65f29080542fed39fb1c9074db7b26699705"})
    console.log("Data Update Triggered!")

    return undefined;
}

export const config = {
    schedule: "@hourly"
}