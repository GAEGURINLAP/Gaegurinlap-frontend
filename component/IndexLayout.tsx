import Header from "../component/Header";
import ProjectSummery from "../component/ProjectSummery";
import Footer from "../component/Footer";

const IndexLayout = () => {
	return (
		<>
			<div className="IndexLayout">
				<Header />
				<ProjectSummery />
				<Footer />
			</div>
		</>
	);
};

export default IndexLayout;
