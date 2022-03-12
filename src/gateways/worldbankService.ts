import { WorldBankResponse } from "./interfaces/worldBank"

export default class WorldBankService {

    async getTables(): Promise<WorldBankResponse[]> {
        const uri = "https://api.worldbank.org/v2/country/br?format=json"

        try {
          const response = await fetch(uri);
          if (!response.ok) {
            throw Error(`${response.status} ${response.statusText}`);
          }
          
          let toJson  = await response.json()

          return toJson[1];
        } catch (error) {
          console.log('Looks like there was a problem: ', error);
          Promise.reject(error)
        }
        return [];
    }
}