import React, { useState } from 'react';
import ReactIdSwiper from 'react-id-swiper';
import Image from 'next/image';

import 'swiper/swiper.min.css';

const HeroSliderConfig = {
    containerClass: 'swiper-container hero-slider',
    parallax: true,
    centeredSlides: true,
    grabCursor: true,
    speed: 500,
    spaceBetween: 0,
    effect: 'slide',
}
;

const HeroSlider = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;

  return (
    <ReactIdSwiper {...HeroSliderConfig} getSwiper={setParallaxSwiper}>
      <div className="hero-slide">
        <div className="slide-image" data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
        >
          <Image src="https://images.unsplash.com/photo-1597965607143-cebb8bd52c48?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                 layout="responsive" width={1000} height={500} alt="slider"/>
          <div className="">
            <h3>Slide 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorem explicabo ipsa ipsum, iusto nam
              natus nostrum numquam, quae quis rem reprehenderit tempore voluptatibus. Asperiores beatae consequuntur
              facere fugiat nemo!
            </p>
          </div>
        </div>
      </div>
      <div className="hero-slide">
        <div className="slide-image" data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
        >
          <Image src="https://images.unsplash.com/photo-1619408506946-a3caaf4e4d35?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                 layout="responsive" width={1000} height={500} alt="slider"/>
        </div>
        <div>
          <h3>Slide 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorem explicabo ipsa ipsum, iusto nam
            natus nostrum numquam, quae quis rem reprehenderit tempore voluptatibus. Asperiores beatae consequuntur
            facere fugiat nemo!
          </p>
        </div>
      </div>
    </ReactIdSwiper>
  );
};

export default HeroSlider;