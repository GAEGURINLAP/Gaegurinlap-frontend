import Image from "next/image";

import MobileMenu from "../component/MobileMenu";

import GAEGURINLAB_LOGO from "/src/assets/Images/logo/GAEGURINLAB_logo.svg";
import SNS_INSTAGRAM from "src/assets/Images/sns/icon-Instagram-24.svg";
import SNS_BEHANCE from "src/assets/Images/sns/icon-Behance-24.svg";
import LINE_THREE from "src/assets/Images/common/icon-line-three-mono.svg";

const About = () => {
	return (
		<div className="About">
            <div className="About__content">
                <div className="About__content__title">
                GAEGURY? <b>GARGURIN!</b>
                </div>
                <div className="About__content__body">
                    <div className="About__content__body__two">
                    We are a design crew specializing in product design and branding.
                    <br />We design the experience as well as all the primary designs of PC WEB, Mobile WEB, and APP. In addition, from brand story to identity design and visual system, we deliver the value of continuous and consistent identity. We have an aesthetic that approaches things with a pleasant twist.
                    </div>
                    <div className="About__content__body__two">
                    프로덕트 디자인과 브랜딩 전문 디자인 크루입니다.
                    <br />PC WEB, Mobile WEB, APP의 모든 1차적인 디자인 뿐만 아니라 경험을 설계합니다. 또한, 브랜드 스토리부터 아이덴티티 디자인, 그리고 비주얼 시스템을 구축하여 지속적이고 일관된 정체성의 가치를 전달합니다. 우리는 사물을 유쾌하게 비틀어보는 시각으로 접근하는 미학을 갖고 있습니다.
                    </div>
                </div>
            </div>
            <div className="About__content">
                <div className="About__content__title">
                <b>How We Work</b>
                </div>
                <div className="About__content__body">
                    <div className="About__content__body__two">
                    It adds functionality and aesthetics based on insight, intuition, and joke thinking based on tradition. It humorously assembles and harmonizes values ​​that are difficult to coexist. This is how GAEGURIN Lab works.
                    </div>
                    <div className="About__content__body__two">
                    통찰과 직관, 전통을 기반으로한 농담적인 사고를 기반으로 기능과 심미성을 덧입힙니다. 공존하기 어려운 가치들을 해학적으로 조립하고 조화시킵니다. 이것이 개구린랩이 일하는 방식입니다.
                    </div>
                </div>
            </div>
            <div className="About__content">
                <div className="About__content__title">
                <b>jumping field</b>
                </div>
                <div className="About__content__body">
                    <div className="About__content__body__three">
                        <div className="About__content__body__three__title">
                        Product Design
                        </div>
                        <div className="About__content__body__three__list">
                            <li>Desk Resarch</li>
                            <li>User Scenario</li>
                            <li>Journey Map</li>
                            <li>FGI</li>
                            <li>Wireframe</li>
                            <li>Prototype</li>
                            <li>Usability Test</li>
                            <li>WEB / APP Complete</li>
                        </div>
                    </div>
                    <div className="About__content__body__three">
                        <div className="About__content__body__three__title">
                        Brand Strategy
                        </div>
                        <div className="About__content__body__three__list">
                            <li>Market Research & Analysis</li>
                            <li>Brand Audits</li>
                            <li>Brand Architecture</li>
                            <li>Brand Positioning</li>
                            <li>Brand Extension</li>
                            <li>Brand Definition</li>
                            <li>Brand Mornitoring</li>
                            <li>Consumer Insgiht & Trends</li>
                            <li>Brand Management</li>
                            <li>Brand Advisory</li>
                        </div>
                    </div>
                    <div className="About__content__body__three">
                        <div className="About__content__body__three__title">
                        Identity Design
                        </div>
                        <div className="About__content__body__three__list">
                            <li>Creative Direction</li>
                            <li>Corporate Identity Design</li>
                            <li>Brand Identity Design</li>
                            <li>Identity System</li>
                            <li>Brandmarks</li>
                            <li>Brand Color</li>
                            <li>Typeface Design</li>
                            <li>Photography</li>
                            <li>Brand Motion</li>
                            <li>Brand Guidelines</li>
                        </div>
                    </div>

                </div>
            </div>
		</div>
	);
};

export default About;
