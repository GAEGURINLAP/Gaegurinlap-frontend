import Image from "next/image";

import GAEGURINLAB_LOGO from "/src/assets/Images/logo/GAEGURINLAB_logo.svg";
import SNS_INSTAGRAM from "src/assets/Images/sns/icon-Instagram-24.svg";
import SNS_BEHANCE from "src/assets/Images/sns/icon-Behance-24.svg";
import X_Button from "src/assets/Images/common/icon-x-mono.svg";

const MobileMenu = () => {
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
		<div className="MobileMenu">
            <div className="MobileMenu__content">
                <div className="MobileMenu__content__title">
                    <Image src={GAEGURINLAB_LOGO} alt="" width="148px" height="20px" />
                    <Image src={X_Button} alt="" width="24px" height="24px" />
                </div>
                <div className="MobileMenu__content__body">
                    <div className="MobileMenu__content__body__menu">
                        {gnbList.map((i, idx) => (
                            <div className="MobileMenu__content__body__menu-list" key={idx}>
                                {i.text}
                            </div>
                        ))}
                    </div>
                    <div className="MobileMenu__content__body-sns">
                        <Image src={SNS_INSTAGRAM} alt="" width="24px" height="24px" />
						<Image src={SNS_BEHANCE} alt="" width="24px" height="24px" />
                    </div>
                </div>
            </div>
		</div>
	);
};

export default MobileMenu;