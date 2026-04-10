// import { bankaApi } from "@/app/features/banka/bankaApi";
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
// import authReducer from "../features/auth/authSlice";


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
      .concat(personelApi.middleware)
      .concat(isyeriApi.middleware)
      .concat(isyeriBolumApi.middleware)
      .concat(sirketApi.middleware)
      .concat(userApi.middleware)
      .concat(adresIletisimApi.middleware)
      .concat(musteriApi.middleware)
      .concat(hesapPlaniApi.middleware)
      .concat(donemApi.middleware)
      .concat(sirketOrtakApi.middleware)
      .concat(personelAdresIletisimApi.middleware)
      .concat(personelBordroApi.middleware)
      .concat(smmBilgileriApi.middleware)
      .concat(menuApi.middleware)
      .concat(reportApi.middleware)
      .concat(fisApi.middleware)
      .concat(geoSozlukApi.middleware)
      .concat(sozlukApi.middleware)
      .concat(sabitKiymetApi.middleware)
      .concat(belgeTurApi.middleware)
      .concat(hesapTanimlariApi.middleware)
      .concat(duyuruApi.middleware)
      .concat(personelGirisCikisApi.middleware)
      .concat(searchApi.middleware)
      .concat(documentApi.middleware)
      .concat(documentPostingApi.middleware)
      .concat(bankaSubeApi.middleware)
      .concat(bankaApi.middleware)
      .concat(damgaBeyannameApi.middleware)
      .concat(kdv1BeyannameApi.middleware)
      .concat(kdv2BeyannameApi.middleware)
      .concat(gelirApi.middleware)
      .concat(dbsApi.middleware)
      .concat(giderApi.middleware)
      .concat(fisKoduApi.middleware)
      .concat(entegratorApi.middleware)
      .concat(beyannameSozlukApi.middleware)
      .concat(kurApi.middleware)
      .concat(turizmBeyannameApi.middleware)
      .concat(kdv1BeyannamePdfApi.middleware)
      .concat(kdv2BeyannamePdfApi.middleware)
      .concat(damgaBeyannamePdfApi.middleware)
      .concat(turizmBeyannamePdfApi.middleware)
      .concat(beyannameTanimApi.middleware)
      .concat(muhasebeTanimApi.middleware);

    // Conditionally add another middleware in dev
    // if (process.env.NODE_ENV !== "production") {
    //   middleware.push(logger);
    // }

    return middleware;
  },
});

export const persistor = persistStore(store);
