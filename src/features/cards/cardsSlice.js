import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {
            '333': {
                id: '333',
                front: 'You can hijack cars, pull off insane heists, and cause mayhem in a massive city.',
                back: 'GTA 5'
            },
            '444': {
                id: '444',
                front: `Join a spiky-haired hero with a giant sword as he battles a megacorporation draining the planet's life force.`,
                back: 'Final Fantasy 7 Remake'
            },
            '555': {
                id: '555',
                front: 'Slay demons, collect loot, and try not to die... again!',
                back: 'Diablo 4'
            },
            '666': {
                id: '666',
                front: 'A tiny robot punching aliens, swimming in circuits, and surfing on clouds',
                back: 'Astro Bot'
            },
            '233': {
                id: '233',
                front: `You’re a green elf with a habit of smashing pottery and talking to a fairy who never shuts up.`,
                back: 'Zelda'
            },
            '244': {
                id: '244',
                front: 'Jump on turtles, eat magic mushrooms, and rescue a princess who’s always getting kidnapped.',
                back: 'Super Mario'
            },
            '255': {
                id: '255',
                front: 'You’re a blue robot with a bionic cannon, taking down evil robots by stealing their superpowers and turning them into your own.',
                back: 'Mega Man'
            },
            '266': {
                id: '266',
                front: 'Enter a world where fighters from around the globe duke it out with epic moves, fireballs, and flying kicks.',
                back: 'Street Fighter'
            }
        }
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