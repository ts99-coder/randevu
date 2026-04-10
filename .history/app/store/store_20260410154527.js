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
import sessionStorage from "redux-persist/lib/storage/session";
// import authReducer from "../features/auth/authSlice";


const persistedSirketDonemContextReducer = persistReducer(
  sirketDonemContextPersistConfig,
  sirketDonemContextSlice.reducer
);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sirketDonemContext: persistedSirketDonemContextReducer,
    snackbar: snackbarSlice.reducer,
    system: systemSlice.reducer,
    curtain: curtainSlice.reducer,
    [adresIletisimApi.reducerPath]: adresIletisimApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [personelApi.reducerPath]: personelApi.reducer,
    [sirketApi.reducerPath]: sirketApi.reducer,
    [isyeriApi.reducerPath]: isyeriApi.reducer,
    [isyeriBolumApi.reducerPath]: isyeriBolumApi.reducer,
    [musteriApi.reducerPath]: musteriApi.reducer,
    [hesapPlaniApi.reducerPath]: hesapPlaniApi.reducer,
    [donemApi.reducerPath]: donemApi.reducer,
    [sirketOrtakApi.reducerPath]: sirketOrtakApi.reducer,
    [personelAdresIletisimApi.reducerPath]: personelAdresIletisimApi.reducer,
    [personelBordroApi.reducerPath]: personelBordroApi.reducer,
    [smmBilgileriApi.reducerPath]: smmBilgileriApi.reducer,
    [menuApi.reducerPath]: menuApi.reducer,
    [reportApi.reducerPath]: reportApi.reducer,
    [fisApi.reducerPath]: fisApi.reducer,
    [geoSozlukApi.reducerPath]: geoSozlukApi.reducer,
    [sozlukApi.reducerPath]: sozlukApi.reducer,
    [sabitKiymetApi.reducerPath]: sabitKiymetApi.reducer,
    [belgeTurApi.reducerPath]: belgeTurApi.reducer,
    [hesapTanimlariApi.reducerPath]: hesapTanimlariApi.reducer,
    [personelGirisCikisApi.reducerPath]: personelGirisCikisApi.reducer,
    [duyuruApi.reducerPath]: duyuruApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [documentApi.reducerPath]: documentApi.reducer,
    [documentPostingApi.reducerPath]: documentPostingApi.reducer,
    [bankaSubeApi.reducerPath]: bankaSubeApi.reducer,
    [bankaApi.reducerPath]: bankaApi.reducer,
    [damgaBeyannameApi.reducerPath]: damgaBeyannameApi.reducer,
    [kdv1BeyannameApi.reducerPath]: kdv1BeyannameApi.reducer,
    [kdv2BeyannameApi.reducerPath]: kdv2BeyannameApi.reducer,
    [gelirApi.reducerPath]: gelirApi.reducer,
    [dbsApi.reducerPath]: dbsApi.reducer,
    [giderApi.reducerPath]: giderApi.reducer,
    [fisKoduApi.reducerPath]: fisKoduApi.reducer,
    [entegratorApi.reducerPath]: entegratorApi.reducer,
    [beyannameSozlukApi.reducerPath]: beyannameSozlukApi.reducer,
    [kurApi.reducerPath]: kurApi.reducer,
    [turizmBeyannameApi.reducerPath]: turizmBeyannameApi.reducer,
    [kdv1BeyannamePdfApi.reducerPath]: kdv1BeyannamePdfApi.reducer,
    [kdv2BeyannamePdfApi.reducerPath]: kdv2BeyannamePdfApi.reducer,
    [damgaBeyannamePdfApi.reducerPath]: damgaBeyannamePdfApi.reducer,
    [turizmBeyannamePdfApi.reducerPath]: turizmBeyannamePdfApi.reducer,
    [beyannameTanimApi.reducerPath]: beyannameTanimApi.reducer,
    [muhasebeTanimApi.reducerPath]: muhasebeTanimApi.reducer,
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
