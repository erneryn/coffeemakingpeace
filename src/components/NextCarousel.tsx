import * as React from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

export default function NextCarousel({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay={true}
      autoPlaySpeed={3000}
      centerMode={false}
      className=''
      containerClass='container'
      dotListClass=''
      draggable
      focusOnSelect={false}
      infinite
      itemClass=''
      keyBoardControl
      minimumTouchDrag={80}
      partialVisible
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 3,
          partialVisibilityGutter: 120
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
      showDots={false}
      sliderClass=''
      slidesToSlide={1}
      ssr={true}
      swipeable
    >
      {children}
    </Carousel>
  );
}
