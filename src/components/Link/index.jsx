import React from 'react';
import './styles.scss';
import AnchorLink from "react-anchor-link-smooth-scroll";

function Link(props) {
	const rootClass = "link";

	const { content } = props;

	return (
		<AnchorLink
			offset="100" 
			className={`${rootClass} ${
				content.theme ? `${rootClass}--${content.theme}` : ""
			}`}
			href={content.url || ""}
			aria-label={content.ariaLabel}
		>
			{content.label && content.label}
		</AnchorLink>
	);
}

export default Link;
