import React from 'react';
import './styles.scss';
import Link from '../Link';
import AnimatedMediaPlayer from "../AnimatedMediaPlayer";
import video from "../../images/Drone-Video-2.mp4";
import poster from "../../images/video-2-cover.png"

function Hero(props) {
	const rootClass = 'hero';

	const { content } = props;
	  const backgroundImage = `url(${poster})`;


    return (
			<section
				className={`${rootClass} ${
					content.theme ? `${rootClass}--${content.theme}` : ""
				}`}
				style={{
					backgroundImage
				}}
			>
				<AnimatedMediaPlayer
					mp4Url={video}
					description="Drone Video"
					autoplay={1}
					posterUrl={poster}
				/>
				<div className={`${rootClass}__container`}>
					<div className={`${rootClass}__row`}>
						<div className={`${rootClass}__content`}>
							{content.title && (
								<h1 className={`${rootClass}__heading`}>{content.title}</h1>
							)}
							{content.body && (
								<p className={`${rootClass}__body`}>{content.body}</p>
							)}
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

export default Hero;
