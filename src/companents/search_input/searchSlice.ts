import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit"
import { DataType, StateType } from "../../types/dataType"


const initialState: StateType = {
  data: null,
  loading: false,
  error: null,
}

// хелпер
const createSliceWithThunk = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

export const filmsSlice = createSliceWithThunk({
  name: "films",
  initialState,
  selectors: {
    filmsState: state => state,
    filmsList: state => state.data,
  },
  reducers: create => ({
    removeFilmFavorite: create.reducer((state, action) => {
      console.info(state.data)
      state.data
      // state.data = state.data.filter((film) => {}
    }),
    fetchFilms: create.asyncThunk(
      async (title, { rejectWithValue }) => {
        try {
          const response = await fetch(
            `https://www.omdbapi.com/?apikey=bcc8b383&plot=full&s=${title}`,
          )
          if (!response.ok) {
            return rejectWithValue("Loading is error")
          }
          return await response.json()
        } catch (e) {
          return rejectWithValue(e)
        }
      },
      {
        pending: state => {
          state.loading = true
          state.error = null
        },
        fulfilled: (state, action) => {
          state.data = action.payload
          state.error = null
        },
        rejected: (state, action) => {
          state.error = action.payload
        },
        settled: state => {
          state.loading = false
        },
      },
    ),
  }),
})

export const { fetchFilms } = filmsSlice.actions
export const { filmsState, filmsList } = filmsSlice.selectors
