import { createSlice } from '@reduxjs/toolkit';

// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
// 	name: 'counter',
// 	initialState: initialCounterState,
// 	reducers: {
// 		increment(state) {
// 			state.counter++;
// 		},
// 		decrement(state) {
// 			state.counter--;
// 		},
// 		increase(state, action) {
// 			state.counter = state.counter + action.payload;
// 			//Here we use the name 'Payload', must keep it this way, since this name is provided by the toolkit.
// 		},
// 		toggleCounter(state) {
// 			state.showCounter = !state.showCounter;
// 		},
// 	},
// });

// export default counterSlice;

//--------------------------------------------------------------------------------------------------------------stage ( MULTIPLE STATE)

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialCounterState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
			//Here we use the name 'Payload', must keep it this way, since this name is provided by the toolkit.
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
/**
 * we just needed the reducer from here inside the index.js store.
 */
