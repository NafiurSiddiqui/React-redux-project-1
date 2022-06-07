// import { createStore } from 'redux';
import counterReducer from './counter';
import authReducer from './auth';

//--------------------------------------------------------------------------------------------------------------stage 1

//only store and reducer here

// const counterReducer = (state = { counter: 0 }, action) => {
// 	if (action.type === 'increment') {
// 		return {
// 			counter: state.counter + 1,
// 		};
// 	}
// 	//2
// 	if (action.type === 'increase') {
// 		return {
// 			counter: state.counter + action.amount,
// 		};
// 	}
// 	if (action.type === 'decrement') {
// 		return {
// 			counter: state.counter - 1,
// 		};
// 	}

// 	return state;
// };

// const store = createStore(counterReducer);

// export default store;

/**
 *@export - we export the store to the index.js file
 * @action type - 'increase'
 * lot of time our value may come from a dynamic medium such as user input, where we do not wanna hard code our value. That is when the action is used.
 * link goes to the 'Counter' file from here.
 */

//--------------------------------------------------------------------------------------------------------------stage2

//we add a toggleHandler action type here.
//Technically, we don't redux for the toggle counter, we could useState since that state is only used locally.
//this is just for demo

// const initialState = { counter: 0, showCounter: true };

// const counterReducer = (state = initialState, action) => {
// 	if (action.type === 'increment') {
// 		// state.counter++
// 		// 👆 NEVER DO THIS! This mutates the original state
// 		//rather overwrrite the original state like this 👇
// 		return {
// 			counter: state.counter + 1,
// 			showCounter: state.showCounter,
// 		};
// 	}
// 	//2
// 	if (action.type === 'increase') {
// 		return {
// 			counter: state.counter + action.amount,
// 			showCounter: state.showCounter,
// 		};
// 	}
// 	//3
// 	if (action.type === 'decrement') {
// 		return {
// 			counter: state.counter - 1,
// 			showCounter: state.showCounter,
// 		};
// 	}
// 	//4
// 	if (action.type === 'toggle') {
// 		return {
// 			counter: state.counter,
// 			showCounter: !state.showCounter,
// 			//invert the counter from whatever state it was in
// 		};
// 	}

// 	return state;
// };

// const store = createStore(counterReducer);

// export default store;

/**
 * @showCounter -
 * we initiated our state with showCounter
 * Must update the showCounter everywhere even if this was not changed.
 * Failing to mention such updated object in the state management here will result in undefined or throw error!
 */

//--------------------------------------------------------------------------------------------------------------stage3 (HANDLING POTENTIAL MESS)

//using variables for identifiers

// export const INCREMENT = 'increment';

// const initialState = { counter: 0, showCounter: true };

// const counterReducer = (state = initialState, action) => {
// 	if (action.type === INCREMENT) {
// 		// state.counter++
// 		// 👆 NEVER DO THIS! This mutates the original state
// 		//rather overwrrite the original state like this 👇
// 		return {
// 			counter: state.counter + 1,
// 			showCounter: state.showCounter,
// 		};
// 	}
// 	//2
// 	if (action.type === 'increase') {
// 		return {
// 			counter: state.counter + action.amount,
// 			showCounter: state.showCounter,
// 		};
// 	}
// 	//3
// 	if (action.type === 'decrement') {
// 		return {
// 			counter: state.counter - 1,
// 			showCounter: state.showCounter,
// 		};
// 	}
// 	//4
// 	if (action.type === 'toggle') {
// 		return {
// 			counter: state.counter,
// 			showCounter: !state.showCounter,
// 		};
// 	}

// 	return state;
// };

// const store = createStore(counterReducer);

// export default store;

//--------------------------------------------------------------------------------------------------------------stage4 (with REDUX toolkit)

import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: 'counter',
	initialState,
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

// const store = createStore(counterSlice.reducer);

//this is for one slice object
// const store = configureStore({
// 	// reducer:{
// 	// 	counter:counterSlice.reducer,
// 	// 	//and other reducer slice if there was any.
// 	// }

// 	//but for our case, we will use only one reducer
// 	reducer: counterSlice.reducer,
// });

//dispatcher
export const counterActions = counterSlice.actions;

// export default store;

/**
 * @createSlice -
 * expects object as an arg
 * Creates a slice of our global state.
 * we could create different state for different file .
 * need a reducer inside the object. which is used for methods.
 * @methods -
 * reducer methods which has access to the state and action.
 * This helps reduce our if.. statements.
 * We are allowed to mutate our state here.
 * @configureStore -
 * when using multiple slice, it is impossible reutrn multiple reducer at once,
 * this is when configureStore comes in play
 * expects an object
 * one 'reducer' name, NOT reducers.
 * @action -
 * slice creates an action object for each of the reducer method, which we can use as dispatcher.
 * returns an obj with unique identifier e.g. { type:'unique identifier'} these methods are called Action creators.
 */

//--------------------------------------------------------------------------------------------------------------stage (MULTIPLE STATE)
// NOTE  we split the slice into its own components from here.

//we just keep the store created here

const store = configureStore({
	reducer: {
		// counter: counterSlice.reducer,
		counter: counterReducer,
		auth: authReducer,
	},
});

export default store;
