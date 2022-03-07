import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';

// function App() {
//   return (
//     <Counter />
//   );
// }

// export default App;

//--------------------------------------------------------------------------------------------------------------stage (WORKING WIHT MULTIPLE SLICES)
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';

function App() {
	const isAuth = useSelector((state) => state.auth.isAuthenticated);
	// state obj > two reducer> we need auth > isAuthenticated property from the store.
	return (
		<Fragment>
			<Header />
			{!isAuth && <Auth />}
			{isAuth && <UserProfile />}
			<Counter />;
		</Fragment>
	);
}

export default App;
