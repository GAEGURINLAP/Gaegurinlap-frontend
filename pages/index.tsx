import type { NextPage } from "next";
import Head from "next/head";
import IndexLayout from "../component/IndexLayout";

const Home = () => {
	return (
		<>
			<Head>
				<title>GAEGURINLAB</title>
				<meta name="description" content="Byung&Park Design Achive" />
			</Head>
			<IndexLayout />
		</>
	);
};

export default Home;
