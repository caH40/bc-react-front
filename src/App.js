import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { checkAuth } from './api/auth-check';
import Page from './Components/Layers/Page';
import './css/App.css';
import './css/App_mobile.css';
import Dzhilsu from './Pages/Dzhilsu/Dzhilsu';
import DzhilsuResults from './Pages/Dzhilsu/DzhilsuResults';
import DzhilsuResultsAthlete from './Pages/Dzhilsu/DzhilsuResultsAthlete';
import Gallery from './Pages/Gallery';
import Home from './Pages/Home';
import NewsFull from './Pages/NewsFull';
import Page404 from './Pages/Page404';
import Trail from './Pages/Trail';
import Trails from './Pages/Trails/Trails';
import { getAuth } from './redux/features/authSlice';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		checkAuth().then(response => {
			dispatch(getAuth({ status: true, user: response.data.user }));
			localStorage.setItem('accessToken', response.data.accessToken);
		});
	}, [dispatch]);
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Page />}>
					<Route index element={<Home />} />
					<Route path="/news/:newsId" element={<NewsFull />} />
					<Route path="/trails" element={<Trails />} />
					<Route path="/trails/:trailId" element={<Trail />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/dzhilsu" element={<Dzhilsu />} />
					<Route path="/dzhilsu/results/:eventId" element={<DzhilsuResults />} />
					<Route path="/dzhilsu/results/athlete/:athlete" element={<DzhilsuResultsAthlete />} />
					<Route path="*" element={<Page404 />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
