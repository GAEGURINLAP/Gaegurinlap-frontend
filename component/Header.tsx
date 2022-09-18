import Image from "next/image";

import BP363_LOGO from "/src/assets/Images/logo/BP363_logo.svg";
import SNS_INSTAGRAM from "src/assets/Images/sns/icon-Instagram-24.svg";
import SNS_BEHANCE from "src/assets/Images/sns/icon-Behance-24.svg";

const Header = () => {
	const gnbList = [
		{
			text: "ABOUT",
		},
		{
			text: "PROJECT",
		},
		{
			text: "CONTACT",
		},
	];

	return (
		<div className="Header">
			<div className="Header__content">
				<Image src={BP363_LOGO.src} alt="" width="140px" height="40px" />
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
						<Image src={SNS_INSTAGRAM.src} alt="" width="32px" height="32px" />
						<Image src={SNS_BEHANCE.src} alt="" width="32px" height="32px" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
