import type { NextPage } from "next";
import Head from "next/head";
import Header from "../component/Header";

const Home = () => {
	return (
		<>
			<Head>
				<title>BP363</title>
				<meta name="description" content="Byung&Park Design Achive" />
			</Head>
			<Header />
		</>
	);
};

export default Home;
