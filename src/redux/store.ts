import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { searchSlice } from "../companents/search_input/searchSlice"


// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(searchSlice);
// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>

// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
/**
 * 
// Настройка хранилища заключена в `makeStore`, чтобы обеспечить возможность повторного использования
// при настройке тестов, которым нужна одна и та же конфигурация магазина
 */
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    /**
     * 
    // Добавление промежуточного программного обеспечения API позволяет кэшировать, делать недействительными, опросить,
    // и другие полезные возможности `rtk-query`.
     */
    middleware: getDefaultMiddleware => getDefaultMiddleware()
  });
  // configure listeners using the provided defaults
  // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
  /**   
   *  настраиваем прослушиватели, используя предоставленные значения по умолчанию
  необязательно, но необходимо для поведения `refetchOnFocus`/`refetchOnReconnect`
   */
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
