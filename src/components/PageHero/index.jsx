import React from 'react';
import './styles.scss';
import Link from '../Link';

function PageHero(props) {
	const rootClass = 'page-hero';

	const { content } = props;

    return (
			<section
				className={`${rootClass} ${
					content.theme ? `${rootClass}--${content.theme}` : ""
				}`}
				id={content.id}
			>
				<div className={`${rootClass}__container`}>
					<div className={`${rootClass}__row`}>
						<div className={`${rootClass}__content`}>
							{content.title && (
								<h2 className={`${rootClass}__heading`}>{content.title}</h2>
							)}
							{content.body && (
								<p className={`${rootClass}__body`}>{content.body}</p>
							)}
							{content.items &&
								content.items.map(item => (
									<div
										className={`${rootClass}__items ${
											content.colums
												? `${rootClass}__items--${content.colums}`
												: ""
										}`}
									>
										{item.icon && (
											<i
												className={`${rootClass}__icon fa fa-${item.icon}`}
											></i>
										)}
										{item.title && item.link && (
											<a
												href={`${
													item.icon && item.icon === "envelope"
														? `mailto:${item.link}`
														: `${item.link}`
												}`}
												className={`${rootClass}__item-link`}
											>
												<h3 className={`${rootClass}__item-heading`}>
													{item.title}
												</h3>
											</a>
										)}
										{item.title && !item.link && (
											<h3 className={`${rootClass}__item-heading`}>
												{item.title}
											</h3>
										)}
									</div>
								))}
							{content.cta && (
								<div className={`${rootClass}__link-wrapper`}>
									<Link content={content.cta} />
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		);
}

export default PageHero;
