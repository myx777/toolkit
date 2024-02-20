import type { Action, ThunkAction} from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { combineSlices } from "@reduxjs/toolkit"
import { filmsSlice } from "../companents/search_input/searchSlice"
import { favoriteSlice } from "../companents/favorite/favoriteSlice"

const rootReducer = combineSlices(filmsSlice, favoriteSlice)

export type RootState = ReturnType<typeof rootReducer>
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
  })
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action<string>
>
