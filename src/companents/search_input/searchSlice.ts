import { createSlice } from "@reduxjs/toolkit"
import { DataType, StateType } from "../../types/dataType"

const data: DataType = {
  poster: "",
  title: "",
  year: "",
  type: "",
  imdbID: "",
}

const initialState: StateType = {
  data: [],
  loading: false,
  error: null,
}

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
//   selectors: {

//   }
  reducers: {
    search: (state, action) => {
      const data  = action.payload
      console.info(data);
      

      state.data = data;
    },
    favorite: (state, action) => {
      state
    },
    delete: (state, action) => {
      state
    },
  },
})

export const { search, favorite } = searchSlice.actions

// export filmsFetch = createAsyncThunk<FilmsFetch>(
//     "search/filmsFetch",
//     async (_, [isRejectedWithValue]) => {
        
//     }
// )
