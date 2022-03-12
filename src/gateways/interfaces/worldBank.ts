export interface WorldBankResponse {
    page: 1,
    pages: 1,
    per_page: string,
    total: 1,
    items: [
        {
            id: string,
            iso2Code: string,
            name: string,
            region: {
                id: string,
                iso2code: string,
                value: string
            },
            adminregion: {
                id: string,
                iso2code: string,
                value: string
            },
            incomeLevel: {
                id: string,
                iso2code: string,
                value: string
            },
            lendingType: {
                id: string,
                iso2code: string,
                value: string
            },
            capitalCity: string,
            longitude: number,
            latitude: number,
        }
    ]
}