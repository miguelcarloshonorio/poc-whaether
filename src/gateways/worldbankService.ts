import { WorldBankResponse } from "./interfaces/worldBank"

export default class WorldBankService {

    async getTables(): Promise<WorldBankResponse[]> {
        const uri = "https://api.worldbank.org/v2/country/br?format=json"

        const response = await fetch(uri, {
            method: 'GET',
            mode:'no-cors'
        }).then(res => {
            try {
              if (res.ok) {
                return res.json()
              } else {
                throw new Error(res.statusText)
              }
            }
            catch (err: any) {
              return err.message
            }
          })
          .then (resJson => {
            return resJson
          })
          .catch(err => console.log(err))
          let resultSet :WorldBankResponse[]=[]
          resultSet.push(response[1])
          return response[1];
    }
}