import Layout from '@/components/Layout';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import '../styles/globals.css';

function MyApp(props: AppProps) {
	const { Component, pageProps } = props;
	const router = useRouter();

	return (
		<Layout>
			<div
				key={router.route}
				className="h-full"
			>
				<Component {...pageProps} />
			</div>
		</Layout>
	);
}

export default MyApp;
