import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
// import { Pagination } from 'swiper/modules';

const Collections = () => {
    return (
        <>
            <div className='bg-black'>
                <div className='container text-white'>

                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={30}
                        // centeredSlides={true}
                        grabCursor={true}
                        // loop={true}
                        breakpoints={{
                            900: {
                                slidesPerView: 'auto',
                                spaceBetween: 60,
                                initialSlide: 8

                            },
                        }}
                        className="mySwiper py-4  pe-12 md:pe-0"
                    >
                        <SwiperSlide className="flex justify-center w-auto">
                            DIAMOND
                        </SwiperSlide>

                        <SwiperSlide className="flex justify-center  w-auto">
                            PLATINUM
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center  w-auto">
                            SOLITARE
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center  w-auto">
                            RINGS
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center  w-auto">
                            EARRINGS
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center  w-auto">
                            NECK PIECE
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center  w-auto">
                            COLLECTIONS
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center  w-auto">
                            NEW ARRIVALS
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>





            <div className="container">

                <Swiper
                    slidesPerView="auto"
                    spaceBetween={30}
                    // centeredSlides={true}
                    grabCursor={true}
                    // loop={true}
                    breakpoints={{
                        900: {
                            slidesPerView: 'auto',
                            spaceBetween: 140,
                            initialSlide: 6

                        },

                    }}
                    className="mySwiper py-4  pr-24 md:pr-0"
                >
                    <SwiperSlide className="flex justify-center w-auto">
                        <div className="flex flex-col items-center">
                            <img src="homeimg/catOne.png" className="w-16 md:w-24" alt="" />
                            <div className="text-center text-colorThree mt-4 text-sm">Pendents</div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="flex justify-center w-auto">
                        <div className="flex flex-col items-center">
                            <img src="homeimg/catTwo.png" className="w-16 md:w-24" alt="" />
                            <div className="text-center text-colorThree mt-4 text-sm">Neck pieces</div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide className="flex justify-center w-auto">
                        <div className="flex flex-col items-center">
                            <img src="homeimg/catThree.png" className="w-16 md:w-24" alt="" />
                            <div className="text-center text-colorThree mt-4 text-sm">Earrings</div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide className="flex justify-center w-auto">
                        <div className="flex flex-col items-center">
                            <img src="homeimg/catFour.png" className="w-16 md:w-24" alt="" />
                            <div className="text-center text-colorThree mt-4 text-sm">Necklaces</div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="flex justify-center w-auto">
                        <div className="flex flex-col items-center">
                            <img src="homeimg/catFive.png" className="w-16 md:w-24" alt="" />
                            <div className="text-center text-colorThree mt-4 text-sm">Rings</div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="flex justify-center w-auto">
                        <div className="flex flex-col items-center">
                            <img src="homeimg/catSix.png" className="w-16 md:w-24" alt="" />
                            <div className="text-center text-colorThree mt-4 text-sm">Bracelets</div>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>





        </>


    )
}

export default Collections

