import { Inter } from "next/font/google";
import "./globals.css";
import './plugins.css';
import './style.css';
import '../public/css/dm.css';
import Script from 'next/script';
import Header from './components/header';
import Footer from './components/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Adira Cabang",
	description: "Adira Cabang",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Manrope:wght@400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
					rel="stylesheet" />

				<link rel="stylesheet" type="text/css" href="/css/unicons.css" />
				<link rel="stylesheet" href="/css/colors/navy.css" />
				{/* <link rel="stylesheet" href="/css/colors/violet.css" /> */}
			</head>
			<body className="!font-Manrope !text-[0.8rem] !font-medium !leading-[1.7] !text-[#60697b] bg-[#fefefe]">
				<div className="grow shrink-0">
					<Header />
					{children}
					<Footer />
				</div>

				<Script src="/js/plugins.js" />
				<Script src="/js/theme.js" />
			</body>
		</html>
	);
}
