import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit"

// `buildCreateSlice` allows us to create a slice with async thunks.
/**
 * `buildCreateSlice` позволяет нам создавать срез с асинхронными переходниками.
 */
export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})
