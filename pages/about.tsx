import Header from "../component/Header";
import About from "../component/About";
import Footer from "../component/Footer";

const about = () => {
	return (
		<>
			<div className="IndexLayout">
				<Header />
				<About />
				<Footer />
			</div>
		</>
	);
};

export default about;
