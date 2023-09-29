import Header from './Header';
import { ReactElement } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Arial', 'sans-serif'],
});

import Nav from './Nav';

const Layout = ({ children }: { children: ReactElement }) => {
	return (
		<div className={`page px-7 ${montserrat.className}`}>
			<Header />
			{children}
			<Nav />
		</div>
	);
};

export default Layout;
