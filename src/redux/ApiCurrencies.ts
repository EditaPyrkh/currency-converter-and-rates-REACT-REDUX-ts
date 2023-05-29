import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Result = {
  base: string
  rates: string | number
}

interface Response {
  data : any
  rates(rates: any): unknown
  eventData: Record<Result['rates'], any>
  onCategoriesChange: (rates: string[]) => void
}

const currenciesList = 'EUR,USD,AUD,CAD,JPY,CZK'

export const ApiCurrencies = createApi({
  reducerPath: 'ApiCurrencies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.freecurrencyapi.com/v1/',
  }),
  tagTypes: ['Currencies'],
  endpoints: (builder) => ({
    getRates: builder.query<Response, string>({
      query: (baseCurrency) => ({
        url: `latest?apikey=${'nG5wtHAazHz24iF8ENyMbUTLJGKoIRxCnluafODY'}&base=${baseCurrency}&currencies=${currenciesList}`,
        method: 'GET',
        redirect: 'follow',
        // eslint-disable-next-line quote-props
        headers: { apikey: 'nG5wtHAazHz24iF8ENyMbUTLJGKoIRxCnluafODY' },
      }),
      providesTags: ['Currencies'],
    }),
  }),
})

export const { useGetRatesQuery } = ApiCurrencies