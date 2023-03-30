import Head from "next/head";
import Header from "../component/Header";
import About from "../component/About";
import Footer from "../component/Footer";

const about = () => {
	return (
		<>
           <Head>
            <title>GAEGURINLAB</title>
            <meta name="description" content="Byung&Park Design Achive" />
			</Head>
			<div className="IndexLayout">
				<Header />
				<About />
				<Footer />
			</div>
		</>
	);
};

export default about;
