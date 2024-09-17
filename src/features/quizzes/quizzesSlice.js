import { createSlice } from '@reduxjs/toolkit';

// SCLICE

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {},
    },
    reducers: {
        addQuiz: (state, action) => {
           const {id, name, topicId, cardIds} = action.payload;
           state.quizzes[id] = {id, name, topicId, cardIds};     
        }
    }
});

// SELECTORS

// Export state of all quizzes
export const allQuizzes = (state) => state.quizzes.quizzes;

// Export action addQuiz
export const { addQuiz } = quizzesSlice.actions;

// Export the reducer
export default quizzesSlice.reducer;