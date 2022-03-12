import { WorldBankResponse } from "./interfaces/worldBank"

export default class WorldBankService {

    async getTables(): Promise<WorldBankResponse> {
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
              console.log(resJson[1])
            return resJson
          })
          .catch(err => console.log(err))
          console.log('resonse after all', response)
          return response as WorldBankResponse
    }
}