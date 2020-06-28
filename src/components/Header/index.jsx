import React, { useState } from 'react';
import './styles.scss';
import logo from '../../images/logo.png';
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
	const rootClass = 'header';
	const [navOpen, setNavOpen] = useState(false);

    return (
			<header className={rootClass}>
				<div className={`${rootClass}__container`}>
					<div className={`${rootClass}__row`}>
						<div className={`${rootClass}__logo-wrapper`}>
							<img
								alt="Greycon Logo"
								src={logo}
								className={`${rootClass}__logo`}
							/>
						</div>
						<div className={`${rootClass}__nav-button-wrapper`}>
							<button
								className={`${rootClass}__nav-button`}
								aria-controls="navbarResponsive"
								aria-expanded={navOpen}
								aria-label="Toggle navigation"
								onClick={() => setNavOpen(!navOpen)}
							>
								<i className="fa fa-bars" aria-hidden={navOpen}></i>
							</button>
						</div>
						<nav
							className={`${rootClass}__nav ${
								navOpen ? `${rootClass}__nav--open` : ""
							}`}
						>
							<ul className={`${rootClass}__nav-list`}>
								<li className={`${rootClass}__nav-list-item`}>
									<AnchorLink
										offset="100"
										href="#about"
										className={`${rootClass}__nav-list-link`}
									>
										About
									</AnchorLink>
								</li>
								<li className={`${rootClass}__nav-list-item`}>
									<AnchorLink
										offset="100"
										href="#services"
										className={`${rootClass}__nav-list-link`}
									>
										Services
									</AnchorLink>
								</li>
								<li className={`${rootClass}__nav-list-item`}>
									<AnchorLink
										offset="100"
										href="#gallery"
										className={`${rootClass}__nav-list-link`}
									>
										Portfolio
									</AnchorLink>
								</li>
								<li className={`${rootClass}__nav-list-item`}>
									<AnchorLink
										offset="100"
										href="#contact"
										className={`${rootClass}__nav-list-link`}
									>
										Contact
									</AnchorLink>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		);
}

export default Header;
