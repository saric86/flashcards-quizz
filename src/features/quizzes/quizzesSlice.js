import { createSlice } from '@reduxjs/toolkit';

// SCLICE

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {
            '123': {
                id: '123',
                name: 'Guess PS5 Games',
                topicId: '1',
                cardIds: ['333', '444', '555', '666']
            },
            '234': {
                id: '234',
                name: 'Guess Nintendo Games',
                topicId: '1',
                cardIds: ['233', '244', '255', '266']
            }
        },
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