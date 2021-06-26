import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomePageHeader from './HomePageHeader';
import MissionStatement from './MissionStatement';
import ClickHere from './ClickHere';

export default function Home() {
  return (
    <div className="home-component">
      <HomePageHeader/>
      <MissionStatement/>
      <ClickHere/>
      <div className="home-carousel"
  style={{
    paddingBottom: '30px',
    position: 'relative'
  }}
>
  <h1 style ={{ textAlign: 'center' }}>Featured Products</h1>
  <Carousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="container"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside={false}
    renderDotsOutside
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 1
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 1
      }
    }}
    showDots
    sliderClass=""
    slidesToSlide={1}
    swipeable
  >
    <img
      src="https://firebasestorage.googleapis.com/v0/b/front-end-capstone-49bb2.appspot.com/o/homepage%2FAdobeStock_117832456.jpeg?alt=media&token=459f0850-4659-43fd-ac7b-f06cdbe77725"
      style={{
        display: 'block',
        height: '100%',
        margin: 'auto',
        width: '100%'
      }}
    />
    <img
      src="https://firebasestorage.googleapis.com/v0/b/front-end-capstone-49bb2.appspot.com/o/homepage%2FAdobeStock_213212972.jpeg?alt=media&token=aa68db9f-1719-4bb9-a11f-dbfc536fe176"
      style={{
        display: 'block',
        height: '100%',
        margin: 'auto',
        width: '100%'
      }}
    />
    <img
      src="https://firebasestorage.googleapis.com/v0/b/front-end-capstone-49bb2.appspot.com/o/homepage%2FAdobeStock_58242577.jpeg?alt=media&token=8dc58ecb-83e2-4c31-9c09-70aadec8c95d"
      style={{
        display: 'block',
        height: '100%',
        margin: 'auto',
        width: '100%'
      }}
    />
    <img
      src="https://firebasestorage.googleapis.com/v0/b/front-end-capstone-49bb2.appspot.com/o/homepage%2FAdobeStock_264987140.jpeg?alt=media&token=682fae87-b337-4112-943a-8ad91bdd5f0c"
      style={{
        display: 'block',
        height: '100%',
        margin: 'auto',
        width: '100%'
      }}
    />
    <img
      src="https://firebasestorage.googleapis.com/v0/b/front-end-capstone-49bb2.appspot.com/o/homepage%2FAdobeStock_169383139.jpeg?alt=media&token=0593877a-2e22-43c5-9683-cd225619ed9d"
      style={{
        display: 'block',
        height: '100%',
        margin: 'auto',
        width: '100%'
      }}
    />
  </Carousel>
</div>
    </div>
  );
}
