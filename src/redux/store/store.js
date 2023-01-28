import { configureStore } from '@reduxjs/toolkit';
import alertMessageSlice from '../features/alertMessageSlice';
import likesSlice from '../features/likesSlice';

export default configureStore({
	reducer: { alertMessage: alertMessageSlice, likesNews: likesSlice },
});
