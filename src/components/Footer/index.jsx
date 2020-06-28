import React from 'react';
import './styles.scss';

function Footer() {
	const rootClass = 'footer';

    return (
			<footer className={rootClass}>
				<div className={`${rootClass}__container`}>
					<div className={`${rootClass}__row`}>
						<p className={`${rootClass}__body`}>
							Copyright © 2019 - Greycon Inc.
						</p>
					</div>
				</div>
			</footer>
		);
}

export default Footer;
