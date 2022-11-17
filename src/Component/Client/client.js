import React from 'react';
import './client.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';


SwiperCore.use( [ Autoplay ] );

function Client ()
{
  return (
    <>
      <section className='container-fluid bg-white'>
        <div className='client-div-content py-4'>
          {/* <div > */}
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false
            }}
            loop
            modules={[ Autoplay ]}
            onSlideChange={() => console.log( 'slide change' )}
            onSwiper={( swiper ) => console.log( swiper )}
            className='d-flex flex-row align-items-center justify-content-center'>
            <SwiperSlide>
              <div className='client-logo-div mx-3'>
                <img src="images\clogos\bsc-logo-top250.png" alt="logo" className='client-logo' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='client-logo-div mx-3'>
                <img src="images\clogos\li-lock-logo-top250.png" alt="logo" className='client-logo' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='client-logo-div mx-3'>
                <img src="images\clogos\bsc-logo-top250.png" alt="logo" className='client-logo' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='client-logo-div mx-3'>
                <img src="images\clogos\li-lock-logo-top250.png" alt="logo" className='client-logo' />
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className='client-logo-div mx-3'>
                <img src="images\clogos\bsc-logo-top250.png" alt="logo" className='client-logo' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='client-logo-div mx-3'>
                <img src="images\clogos\li-lock-logo-top250.png" alt="logo" className='client-logo' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='client-logo-div mx-3'>
                <img src="images\clogos\bsc-logo-top250.png" alt="logo" className='client-logo' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='client-logo-div mx-3'>
                <img src="images\clogos\li-lock-logo-top250.png" alt="logo" className='client-logo' />
              </div>
            </SwiperSlide>
          </Swiper>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}

export default Client;