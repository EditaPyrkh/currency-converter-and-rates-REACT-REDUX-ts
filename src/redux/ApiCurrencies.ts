import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Result = {
  base: string,
  date: string,
  rates: {
    [key: string]: number,
  }
};

type Response = Pick<Result, "rates">;

const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;
const currenciesList = "EUR,USD,AUD,CAD,JPY,CZK";

export const ApiCurrencies = createApi({
  reducerPath: "ApiCurrencies",
  baseQuery: fetchBaseQuery({
    baseUrl: REACT_APP_API_URL,
  }),
  tagTypes: ["Currencies"],
  endpoints: (builder) => ({
    getRates: builder.query<Response, string>({
      query: (baseCurrency) => ({
        url: `latest?apikey=${REACT_APP_API_KEY}&base=${baseCurrency}&symbols=${currenciesList}`,
        method: "GET",
        redirect: "follow",
        // eslint-disable-next-line quote-props
        headers: { "apikey": REACT_APP_API_KEY },
      }),
      providesTags: ["Currencies"],
    }),
  }),
});

export const { useGetRatesQuery } = ApiCurrencies;
