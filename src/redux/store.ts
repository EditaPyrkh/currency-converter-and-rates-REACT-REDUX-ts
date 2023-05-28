import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import baseCurrencySlice from "./baseCurrencySlice";
import { ApiCurrencies } from "./ApiCurrencies";

export const store = configureStore({
  reducer: {
    [ApiCurrencies.reducerPath]: ApiCurrencies.reducer,
    baseCurrency: baseCurrencySlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(ApiCurrencies.middleware),

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
