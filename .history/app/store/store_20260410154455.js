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
import { adresIletisimApi } from "../features/adresIletisim/adresIletisimApi";
import authReducer from "../features/auth/authSlice";
import { belgeTurApi } from "../features/belgeTur/belgeTurApi";
import { damgaBeyannameApi } from "../features/beyanname/damgaBeyannameApi";
import { kdv1BeyannameApi } from "../features/beyanname/kdv1BeyannameApi";
import { dbsApi } from "../features/dbs/dbsApi";
import { documentApi } from "../features/document/documentApi";
import { donemApi } from "../features/donem/donemApi";
import { duyuruApi } from "../features/duyuru/duyuruApi";
import { fisApi } from "../features/fis/fisApi";
import { gelirApi } from "../features/gelir/gelirApi";
import { giderApi } from "../features/gider/giderApi";
import { hesapPlaniApi } from "../features/hesapplani/hesapPlaniApi";
import { hesapTanimlariApi } from "../features/hesapTanimlari/hesapTanimlariApi";
import { isyeriApi } from "../features/isyeri/isyeriApi";
import { isyeriBolumApi } from "../features/isyeriBolum/isyeriBolumApi";
import { menuApi } from "../features/menu/menuApi";
import { musteriApi } from "../features/musteri/musteriApi";
import { userApi } from "../features/musteri/userApi";
import { personelAdresIletisimApi } from "../features/personel/personelAdresIletisimApi";
import { personelApi } from "../features/personel/personelApi";
import { personelBordroApi } from "../features/personel/personelBordroApi";
import { personelGirisCikisApi } from "../features/personel/personelGirisCikisApi";
import { reportApi } from "../features/report/reportApi";
import { sabitKiymetApi } from "../features/sabitkiymet/sabitkiymetApi";
import { searchApi } from "../features/search/searchApi";
import { sirketApi } from "../features/sirket/sirketApi";
import sirketDonemContextSlice from "../features/sirketDonemContext/sirketDonemContextSlice";
import { sirketOrtakApi } from "../features/sirketOrtak/sirketOrtakApi";
import { smmBilgileriApi } from "../features/smmBilgileri/smmBilgileriApi";
import { snackbarSlice } from "../features/snackbar/snackbarSlice";
import { curtainSlice } from "../features/curtain/curtainSlice";
import { geoSozlukApi } from "../features/sozluk/geoSozlukApi";
import { sozlukApi } from "../features/sozluk/sozlukApi";
import { systemSlice } from "../features/system/systemSlice";
import { documentPostingApi } from "../features/document-posting/documentPostingApi";
import { listenerMiddleware } from "../listenerMiddleware";
import { kdv2BeyannameApi } from "../features/beyanname/kdv2BeyannameApi";
import { fisKoduApi } from "../features/fisKodu/fisKoduApi";
import { entegratorApi } from "../features/entegrator/entegratorApi";
import { beyannameSozlukApi } from "../features/beyanname/beyannameSozlukApi";
import { kurApi } from "../features/kur/kurApi";
import { turizmBeyannameApi } from "../features/beyanname/turizmBeyannameApi";
import { kdv1BeyannamePdfApi } from "../features/beyanname/kdv1BeyannamePdfApi";
import { kdv2BeyannamePdfApi } from "../features/beyanname/kdv2BeyannamePdfApi";
import { damgaBeyannamePdfApi } from "../features/beyanname/damgaBeyannamePdfApi";
import { turizmBeyannamePdfApi } from "../features/beyanname/turizmBeyannamePdfApi";
import { beyannameTanimApi } from "../features/beyanname/beyannameTanimApi";
import { muhasebeTanimApi } from "../features/muhasebeTanim/muhasebeTanimApi";

// Persist only the context slice
const sirketDonemContextPersistConfig = {
  key: "sirketDonemContext",
  storage: sessionStorage,
};

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
