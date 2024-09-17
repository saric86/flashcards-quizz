import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[id] = { id, front, back };

        }
    }
});

// Selectors

// export const findCard = (id) => (state) => state.cards.find(card => card.id === id);
export const findCard = (id) => (state) => state.cards.cards[id];  
export const {addCard} = cardsSlice.actions;

export default cardsSlice.reducer;