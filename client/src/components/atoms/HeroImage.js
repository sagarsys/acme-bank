import React from 'react';

import HeroImageSm from '../../assets/img/hero-banner-sm.jpg'; // 640 x 420
import HeroImageMd from '../../assets/img/hero-banner-md.jpg'; // 1200x800
import HeroImageLg from '../../assets/img/hero-banner-lg.jpg'; // 1920x1080
import HeroImageXL from '../../assets/img/hero-banner-xl.jpg'; // 2400x1600
import HeroImageUhd from '../../assets/img/hero-banner-uhd.jpg'; // 3800x2500

export default (props) => (
	<img
		srcSet={
			`${HeroImageSm} 640w,
			${HeroImageMd} 1200w,
			${HeroImageLg} 1920w,
			${HeroImageXL} 2400w,
			${HeroImageUhd} 3800w`
		}
		sizes={`
			(max-width: 640px) 100%,
			(max-width: 1200px) auto,
			(max-width: 1920px) auto,
			(max-width: 2400px) 100%,
			100%
		`}
		src={HeroImageLg}
		alt="Banner"
		{...props}
	/>
);
