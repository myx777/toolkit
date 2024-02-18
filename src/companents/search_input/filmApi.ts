// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const filmApi = createApi({
//     reducerPath: "filmApi",
//     baseQuery: fetchBaseQuery({ baseUrl: `https://www.omdbapi.com/?apikey=bcc8b383&plot=full&`}),
//     endpoints: (builder) => ({
//         getFilmTitle: builder.query({
//             query: (title: string) => `s=${title}`,
//         }),
//     }),
// });

// export const { useGetFilmTitleQuery } = filmApi;