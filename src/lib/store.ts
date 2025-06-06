import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counter/counterSlice";
import { quotesApiSlice } from "./features/quotes/quotesApiSlice";
import { studentAPI } from "./api/studentApi";
import { classeAPI } from "./api/classeApi";
import { subjectAPI } from "./api/subjectApi";
import { authAPI } from "./api/authApi";
import { authReducer, authSlice } from "./features/auth/authSlice";
import { panelistsAPI } from "./api/panelistApi";
import { courseAPI } from "./api/courseApi";
import { usersAPI } from "./api/userApi";

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(counterSlice, quotesApiSlice, authSlice);
// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.
export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      [authAPI.reducerPath]: authAPI.reducer,
      [studentAPI.reducerPath]: studentAPI.reducer,
      [panelistsAPI.reducerPath]: panelistsAPI.reducer,
      [classeAPI.reducerPath]: classeAPI.reducer,
      [subjectAPI.reducerPath]: subjectAPI.reducer,
      [courseAPI.reducerPath]: courseAPI.reducer,
      [usersAPI.reducerPath]: usersAPI.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(
        authAPI.middleware,
        studentAPI.middleware,
        panelistsAPI.middleware,
        classeAPI.middleware,
        subjectAPI.middleware,
        courseAPI.middleware,
        usersAPI.middleware,
      );
    },
  });
};

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
