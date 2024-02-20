import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { FavoriteStateType, Search } from "../../types/dataType";

/**
 * Начальное состояние избранных фильмов.
 */
const initialState: FavoriteStateType = {
  data: [],
};

/**
 * Slice для управления избранными фильмами.
 */
export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  selectors: {
    /**
     * Селектор для получения текущего состояния избранных фильмов.
     *
     * @param {FavoriteStateType} state - Текущее состояние хранилища избранных фильмов.
     * @return {FavoriteStateType} Текущее состояние избранных фильмов.
     */
    favoritesState: state => state,
  },
  reducers: create => ({
    /**
     * Редуктор для удаления фильма из избранного.
     *
     * @param {FavoriteStateType} state - Текущее состояние хранилища избранных фильмов.
     * @param {PayloadAction<string>} action - Действие с переданным идентификатором фильма.
     * @return {void}
     */
    removeFilmFavorite: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.data = state.data.filter(film => film.imdbID !== action.payload);
      },
    ),
    /**
     * Редуктор для добавления фильма в избранное.
     *
     * @param {FavoriteStateType} state - Текущее состояние хранилища избранных фильмов.
     * @param {PayloadAction<Search>} action - Действие с переданным объектом фильма.
     * @return {void}
     */
    addFilmFavorite: create.reducer((state, action: PayloadAction<Search>) => {
      const existingFilmIndex = state.data.findIndex(
        film => film.imdbID === action.payload.imdbID,
      );

      if (existingFilmIndex === -1) {
        state.data.push(action.payload);
      }
    }),
  }),
});

/**
 * Действия для управления избранными фильмами.
 */
export const { removeFilmFavorite, addFilmFavorite } = favoriteSlice.actions;

/**
 * Селектор для получения текущего состояния избранных фильмов.
 *
 * @param {FavoriteStateType} state - Текущее состояние хранилища избранных фильмов.
 * @return {FavoriteStateType} Текущее состояние избранных фильмов.
 */
export const { favoritesState } = favoriteSlice.selectors;
