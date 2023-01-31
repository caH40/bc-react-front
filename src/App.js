import { Route, Routes } from 'react-router-dom';
import Authentication from './Components/Modals/Authorization/Authentication';
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

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Page />}>
					<Route index element={<Home />} />
					<Route path="/news/:newsId" element={<NewsFull />} />
					<Route path="/trails" element={<Trails />} />
					<Route path="/trails/:trailId" element={<Trail />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/authentication" element={<Authentication />} />
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
