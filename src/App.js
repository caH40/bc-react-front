import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { checkAuth } from './api/auth-check';

import Page from './Components/Layers/Page';
import Webcam from './Components/Webcam/Webcam';
import './css/App.css';
import './css/App_mobile.css';
import Admin from './Pages/Admin/Admin';
import NewsCreate from './Pages/Admin/NewsCreate';
import NewsAll from './Pages/Admin/NewsAll';
// import NewsEdit from './Pages/Admin/NewsAll';
import ConfirmEmail from './Pages/ConfirmEmail';
import Dzhilsu from './Pages/Dzhilsu/Dzhilsu';
import DzhilsuResults from './Pages/Dzhilsu/DzhilsuResults';
import DzhilsuResultsAthlete from './Pages/Dzhilsu/DzhilsuResultsAthlete';
import Gallery from './Pages/Gallery';
import Home from './Pages/Home';
import NewPassword from './Pages/NewPassword';
import NewsFull from './Pages/NewsFull';
import Page404 from './Pages/Page404';
import Trail from './Pages/Trail';
import Trails from './Pages/Trails/Trails';
import { getAuth } from './redux/features/authSlice';
import NewsEdit from './Pages/Admin/NewsEdit';
import AdminBG from './Pages/Admin/AdminBG';
import TrailCreate from './Pages/Admin/TrailCreate';
import TrailAll from './Pages/Admin/TrailAll';
import TrailEdit from './Pages/Admin/TrailEdit';
import Profile from './Pages/Profile';
import ProfileEdit from './Pages/ProfileEdit';
import Users from './Pages/Admin/Users';
import UsersEdit from './Pages/Admin/UsersEdit';
import { Events } from './Pages/Admin/Events';
import { EventsEdit } from './Pages/Admin/EventsEdit';
import { EventEdit } from './Pages/Admin/EventEdit';
import { EventResultEdit } from './Pages/Admin/EventResultEdit';

function App() {
	const dispatch = useDispatch();
	const userAuth = useSelector(state => state.checkAuth.value.user);

	// const isAdmin = ['admin'].includes(userAuth.role);
	const isModerator = ['admin', 'moderator'].includes(userAuth.role);

	useEffect(() => {
		checkAuth().then(response => {
			if (!response) return;
			dispatch(getAuth({ status: true, user: response.data.user }));
			localStorage.setItem('accessToken', response.data.accessToken);
		});
	}, [dispatch]);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Page />}>
					<Route index element={<Home />} />
					<Route path="news/:newsId" element={<NewsFull />} />
					<Route path="webcam" element={<Webcam />} />
					<Route path="trails" element={<Trails />} />
					<Route path="trails/:trailId" element={<Trail />} />
					<Route path="gallery" element={<Gallery />} />
					<Route path="dzhilsu" element={<Dzhilsu />} />
					<Route path="dzhilsu/results/:eventId" element={<DzhilsuResults />} />
					<Route path="dzhilsu/results/athlete/:athlete" element={<DzhilsuResultsAthlete />} />
					<Route path="confirm-email/:token" element={<ConfirmEmail />} />
					<Route path="new-password/:token" element={<NewPassword />} />
					<Route path="profile" element={<Profile />} />
					<Route path="profile/edit" element={<ProfileEdit />} />
					{isModerator ? (
						<>
							<Route path="/admin" element={<Admin />}>
								<Route index element={<AdminBG />} />
								<Route path="create-news" element={<NewsCreate />} />
								<Route path="edit-news" element={<NewsAll />} />
								<Route path="edit-news/:newsId" element={<NewsEdit />} />
								<Route path="create-trail" element={<TrailCreate />} />
								<Route path="edit-trail" element={<TrailAll />} />
								<Route path="edit-trail/:trailId" element={<TrailEdit />} />
								<Route path="users" element={<Users />} />
								<Route path="users/:userId" element={<UsersEdit />} />
								<Route path="events/load" element={<Events />} />
								<Route path="events/edit" element={<EventsEdit />} />
								<Route path="events/edit/:eventId" element={<EventEdit />} />
								<Route path="events/edit/result/:eventId" element={<EventResultEdit />} />
							</Route>
						</>
					) : (
						'' // <Route path="/admin/*" element={<Navigate to="/" replace />} />
					)}

					<Route path="*" element={<Page404 />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
