import React from "react";
import { useState } from "react";
import { useRouter } from 'next/router';

import Image from "next/image";

import MobileMenu from "../component/MobileMenu";


import GAEGURINLAB_LOGO from "/src/assets/Images/logo/GAEGURINLAB_logo.svg";
import SNS_INSTAGRAM from "src/assets/Images/sns/icon-Instagram-24.svg";
import SNS_BEHANCE from "src/assets/Images/sns/icon-Behance-24.svg";
import LINE_THREE from "src/assets/Images/common/icon-line-three-mono.svg";

const Header = () => {
	const router = useRouter();

	const gnbList = [
		{
			text: "About", link: '/about',
		},
		{
			text: "Project",
		},
		{
			text: "Contact",
		},
	];

	const [isMenuClick, setIsMenuClick] = useState(false);

	return (
		<>
		<MobileMenu 
			visible={isMenuClick}
			onClose={() => setIsMenuClick(false)}
		/>
		<div className="Header">
			<div className="Header__content">
				
				<a href="/">
				<Image src={GAEGURINLAB_LOGO} alt="" width="200px" height="52px" />
				</a>
				<div className="Header__menu">
					{gnbList.map((i, idx) => (
						<a 
						key={idx}
						className="Header__menu-list"
						href={i.link}
						// onMouseDown={() =>
						// 	{router.push(i.link)}
						// }
						>
							{i.text}
						</a>
					))}
					<div className="Header__menu-sns">
						<Image src={SNS_INSTAGRAM} alt="" width="24px" height="24px" />
						<Image src={SNS_BEHANCE} alt="" width="24px" height="24px" />
					</div>
				</div>
			</div>
		</div>
		<div className="Header-Mobile">
			<div className="Header-Mobile__content">
				<Image src={GAEGURINLAB_LOGO} alt="" width="148px" height="20px" />
				<Image 
					src={LINE_THREE} 
					alt="" 
					width="24px" 
					height="24px" 
					onClick={() => setIsMenuClick(true)}
				/>
			</div>
		</div>
		</>
	);
};

export default Header;
