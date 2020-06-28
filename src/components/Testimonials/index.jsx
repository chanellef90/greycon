import React from 'react';
import './styles.scss';
import Link from '../Link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials(props) {
	const rootClass = "testimonials";

	const { content } = props;

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<section
			className={`${rootClass} ${
				content.theme ? `${rootClass}--${content.theme}` : ""
			}`}
		>
			<div className={`${rootClass}__container`}>
				<div className={`${rootClass}__row`}>
					<div className={`${rootClass}__content`}>
						{content.title && (
							<h2 className={`${rootClass}__heading`}>{content.title}</h2>
						)}

						{content.slides && (
							<Slider {...settings}>
								{content.slides.map(slide => (
									<div className={`${rootClass}__quote`}>
										{slide.title && (
											<h3 className={`${rootClass}__quote-heading`}>
												{slide.title}
											</h3>
										)}
										{slide.body && (
											<blockquote className={`${rootClass}__quote-body`}>
												{slide.body}
											</blockquote>
										)}
										{slide.author && (
											<cite className={`${rootClass}__quote-author`}>
												{"-"} {slide.author}
											</cite>
										)}
										{slide.link && (
											<a
												className={`${rootClass}__quote-link`}
												href={slide.link}
												blank="_target"
											>
												{slide.link}
											</a>
										)}
									</div>
								))}
							</Slider>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
