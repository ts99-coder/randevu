import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
// import { bankaApi } from "@/app/features/banka/bankaApi";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    system: systemSlice.reducer,
    curtain: curtainSlice.reducer,
    // [bankaApi.reducerPath]: bankaApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      // Customize the built-in serializability dev check
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .prepend(listenerMiddleware.middleware)
      // .concat(bankaApi.middleware)

    return middleware;
  },
});

export const persistor = persistStore(store);
