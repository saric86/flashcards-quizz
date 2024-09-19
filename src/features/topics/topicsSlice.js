import { createSlice } from '@reduxjs/toolkit';
import { addQuiz } from '../quizzes/quizzesSlice';
import { ALL_ICONS } from '../../data/icons';


// SLICE

export const topicsSlice = createSlice({
    name: 'topics',  // <-- This is the name of the slice which will be state.topics
    initialState: {
        topics: {   // <-- this is the second topics in state.topics.topics
            '1': {
                id: '1',
                name: 'Games',
                icon: ALL_ICONS[1].url,
                quizIds: ['123', '234']
            }
        }
    },
    reducers: {
        addTopic: (state, action) => {
            const {id, name, icon} = action.payload;
            state.topics[id] = { id, name, icon, quizIds: [] }; // Assign the name and icon to the state object using the id as key
        }
    },
    extraReducers: {  
        // Handle the `addQuiz` action from the `quizzesSlice`. Using extra reducers and [addQuiz] not addQuiz. Its just hpw it works.
        [addQuiz]: (state, action) => {

            // Destructure `id` (quiz ID) and `topicId` (ID of the associated topic) from the action payload.
            const {id, topicId} = action.payload;

            // Checks if topicId exist in topics state. If the topic exists, add the quiz ID to the `quizIds` array for topics.
            if (state.topics[topicId]) {     
              state.topics[topicId].quizIds.push(id);
            }
        }
    }
}); 


// SELECTORS

export const selectTopics = (state) => state.topics.topics;

// Export actions from slice
export const { addTopic } = topicsSlice.actions;

// Export reducers
export default topicsSlice.reducer;  // <--- must be .reducer not .reducers remember


// Has an addTopic action. You can expect the payload for this action to look like 
// {id: '123456', name: 'name of topic', icon: 'icon url'}. 
// Store these values in the state as a new topic object.

// Create a selector that selects the topics object nested within initialState.