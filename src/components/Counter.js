import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

// const Counter = () => {
// 	const counter = useSelector((state) => state.counter);
// 	const show = useSelector((state) => state.showCounter);
// 	const dispatch = useDispatch();

// 	const incrementHandler = () => {
// 		dispatch({ type: 'increment' });
// 	};

// 	const increaseHandler = () => {
// 		dispatch({ type: 'increase', amount: 5 });
// 	};
// 	const decrementHandler = () => {
// 		dispatch({ type: 'decrement' });
// 	};

// 	const toggleCounterHandler = () => {
// 		dispatch({ type: 'toggle' });
// 	};

// 	return (
// 		<main className={classes.counter}>
// 			<h1>Redux Counter</h1>
// 			{/* <div className={classes.value}>-- COUNTER VALUE --</div> */}
// 			{show && <div className={classes.value}>{counter}</div>}
// 			<div>
// 				<button onClick={incrementHandler}>Increment</button>
// 				<button onClick={increaseHandler}>Increase by 5</button>
// 				<button onClick={decrementHandler}>Decrement</button>
// 			</div>
// 			<button onClick={toggleCounterHandler}>Toggle Counter</button>
// 		</main>
// 	);
// };

// export default Counter;

/**
 * @useSelector -
 * lets you select part from the state from the store
 *  needs a function, which determined what we wanna use from the store.That function is basically the state and part of the state we want.
 * With the useSelectore, this component is automatically subscribed to the store now.
 * any changes in the store, will automatically re render this component.
 * If this component is unmounted or removed, React-redux will automatically unsubscribe this component.
 * @useStore -
 * There are also this hook that let you access to the whole store.
 *
 * @useDispatch -
 * let us dispatch the action for the states
 * no args.. only a function.
 * the dispatch function must have an object and the type name, exactly corresponding to the state action type.
 *
 * @increaseHandler -
 * now we just have an extra action propery as amount where we call the action from the store which is in association with the type:'increase'
 */

//--------------------------------------------------------------------------------------------------------------stage3 (handling potential mess - OLD WAY)

// import { INCREMENT } from '../store';

// const Counter = () => {
// 	const counter = useSelector((state) => state.counter);
// 	const show = useSelector((state) => state.showCounter);
// 	const dispatch = useDispatch();

// 	const incrementHandler = () => {
// 		dispatch({ type: INCREMENT });
// 	};

// 	const increaseHandler = () => {
// 		dispatch({ type: 'increase', amount: 5 });
// 	};
// 	const decrementHandler = () => {
// 		dispatch({ type: 'decrement' });
// 	};

// 	const toggleCounterHandler = () => {
// 		dispatch({ type: 'toggle' });
// 	};

// 	return (
// 		<main className={classes.counter}>
// 			<h1>Redux Counter</h1>
// 			{/* <div className={classes.value}>-- COUNTER VALUE --</div> */}
// 			{show && <div className={classes.value}>{counter}</div>}
// 			<div>
// 				<button onClick={incrementHandler}>Increment</button>
// 				<button onClick={increaseHandler}>Increase by 5</button>
// 				<button onClick={decrementHandler}>Decrement</button>
// 			</div>
// 			<button onClick={toggleCounterHandler}>Toggle Counter</button>
// 		</main>
// 	);
// };

// export default Counter;

//--------------------------------------------------------------------------------------------------------------stage 4 (REDUX TOOLKIT)

// import { INCREMENT } from '../store';
import { counterActions } from '../store/counter';

const Counter = () => {
	const counter = useSelector((state) => state.counter);
	const show = useSelector((state) => state.showCounter);
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch(counterActions.increment());
		//make sure to execute the method here.
	};

	const increaseHandler = () => {
		dispatch(counterActions.increase(5));
		//this creates an object like
		//{ type: 'name', payload: 5}
		//this name is not upto us
	};
	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{/* <div className={classes.value}>-- COUNTER VALUE --</div> */}
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increase by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
