import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit"
import type { StateType } from "../../types/dataType"

/**
 * @typedef {Object} Film
 * @property {string} Title - Название фильма.
 * @property {string} Year - Год выпуска фильма.
 * @property {string} imdbID - IMDb ID фильма.
 * @property {string} Type - Тип фильма (например, фильм, сериал).
 */

/** @type {StateType} */
const initialState: StateType = {
  data: null,
  loading: false,
  error: null,
}

// хелпер
const createSliceWithThunk = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

/**
 * Срез для управления данными о фильмах.
 * @type {ReturnType<typeof createSliceWithThunk>}
 */
export const filmsSlice = createSliceWithThunk({
  name: "films",
  initialState,
  selectors: {
    filmsState: state => state,
    filmsList: state => state.data,
  },
  reducers: create => ({
    /**
     * Thunk-действие для получения списка фильмов.
     * @type {AsyncThunk<Film[], string, {}>}
     */
    fetchFilms: create.asyncThunk(
      async (title: string, { rejectWithValue }) => {
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
          state.error = action.payload as Error
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
