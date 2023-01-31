import React from 'react';
import { Outlet } from 'react-router-dom';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Modals from './Modals';

const Page = () => {
	return (
		<>
			<Header />
			<Body>
				<Modals />
				<Outlet />
			</Body>
			<Footer />
		</>
	);
};

export default Page;
