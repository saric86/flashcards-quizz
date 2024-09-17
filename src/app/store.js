import { configureStore } from "@reduxjs/toolkit";
// import reducers
import { topicsSlice } from "../features/topics/topicsSlice";
import { quizzesSlice } from "../features/quizzes/quizzesSlice";
import { cardsSlice } from "../features/cards/cardsSlice";

export default configureStore({
  reducer: {
    topics: topicsSlice.reducer, // Import reducer function from topicsSlice not the whole function, only reducer, therefore topicsSlice.reducer and not topicsSlice
    quizzes: quizzesSlice.reducer, // import quizz reducer
    cards: cardsSlice.reducer, // import cards reducer
  },
});