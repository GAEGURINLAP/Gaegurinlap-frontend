import Image from "next/image";

import BP363_LOGO from "/src/assets/Images/logo/BP363_logo.svg";
import BP363_LOGO_2 from "/src/assets/Images/logo/BP363_logo_2.svg";
import GAEGURINLAB_LOGO from "/src/assets/Images/logo/GAEGURINLAB_logo.svg";
import SNS_INSTAGRAM from "src/assets/Images/sns/icon-Instagram-24.svg";
import SNS_BEHANCE from "src/assets/Images/sns/icon-Behance-24.svg";
import LINE_THREE from "src/assets/Images/common/icon-line-three-mono.svg";

const Header = () => {
	const gnbList = [
		{
			text: "About",
		},
		{
			text: "Project",
		},
		{
			text: "Contact",
		},
	];

	return (
		<>
		<div className="Header">
			<div className="Header__content">
				<Image src={GAEGURINLAB_LOGO} alt="" width="200px" height="52px" />
				{/* <BP363_LOGO /> */}

				<div className="Header__menu">
					{gnbList.map((i, idx) => (
						<div className="Header__menu-list" key={idx}>
							{i.text}
						</div>
					))}
					<div className="Header__menu-sns">
						{/* <SNS_INSTAGRAM />
					<SNS_BEHANCE /> */}
						<Image src={SNS_INSTAGRAM} alt="" width="24px" height="24px" />
						<Image src={SNS_BEHANCE} alt="" width="24px" height="24px" />
					</div>
				</div>
			</div>
		</div>
		<div className="Header-Mobile">
			<div className="Header-Mobile__content">
				<Image src={GAEGURINLAB_LOGO} alt="" width="148px" height="20px" />
				<Image src={LINE_THREE} alt="" width="24px" height="24px" />
			</div>
		</div>
		</>
	);
};

export default Header;
