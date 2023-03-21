import Image from "next/image";

import SNS_INSTAGRAM from "src/assets/Images/sns/icon-Instagram-24.svg";
import SNS_BEHANCE from "src/assets/Images/sns/icon-Behance-24.svg";

const Footer = () => {

	return (
		<div className="Footer-Mobile">
            <div className="Footer-Mobile__content">
                <div className="Footer-Mobile__content__info">
                    <div className="Footer-Mobile__content__info-main">@ 2023 Gaegurinlab Inc.</div>
                    <div className="Footer-Mobile__content__info__sub">
                        <div className="Footer-Mobile__content__info__sub-email">byungsker@gaegurinlab.com</div>
                        <div className="Footer-Mobile__content__info__sub-phone">+82 (03)2 3030 0808</div>
                        
                    </div>
                </div>
                <div className="Footer-Mobile__content-sns">
                    <Image src={SNS_INSTAGRAM} alt="" width="24px" height="24px" />
                    <Image src={SNS_BEHANCE} alt="" width="24px" height="24px" />
                </div>
            </div>
		</div>
	);
};

export default Footer;
