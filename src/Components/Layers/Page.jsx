import React from 'react';
import { Outlet } from 'react-router-dom';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Page = () => {
	return (
		<>
			<Header />
			<Body>
				<Outlet />
			</Body>
			<Footer />
		</>
	);
};

export default Page;
