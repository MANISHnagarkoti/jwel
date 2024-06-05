import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Recommended = () => {
    return (
        <div className='mt-[100px]'>
            <div className='text-center px-4'>


                <div className='playfair text-4xl '>Recommended For You</div>
                <div className='mt-4'>Check out top jewellery choices that our buyers love the most</div>


            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-12 container mt-24 '>





                <div>
                    <img src="homeimg/recommendedOne.png" alt="" />

                    <div className='space-y-4 mt-4'>
                        <div className=' text-sm sm:text-base'>SURREAL DIAMOND AND ROSE
                            GOLD JEWELLERY</div>
                        <div className='font-semibold'>₹1,042</div>
                        <div className='py-4 bg-colorThree text-center px-4' >ADD TO CART</div>
                    </div>
                </div>

                <div>
                    <img src="homeimg/recommendedOne.png" alt="" />

                    <div className='space-y-4 mt-4'>
                        <div className=' text-sm sm:text-base'>SURREAL DIAMOND AND ROSE
                            GOLD JEWELLERY</div>
                        <div className='font-semibold'>₹1,042</div>
                        <div className='py-4 bg-colorThree text-center px-4' >ADD TO CART</div>
                    </div>
                </div>


                <div>
                    <img src="homeimg/recommendedOne.png" alt="" />

                    <div className='space-y-4 mt-4'>
                        <div className=' text-sm sm:text-base'>SURREAL DIAMOND AND ROSE
                            GOLD JEWELLERY</div>
                        <div className='font-semibold'>₹1,042</div>
                        <div className='py-4 bg-colorThree text-center px-4' >ADD TO CART</div>
                    </div>
                </div>


                <div>
                    <img src="homeimg/recommendedOne.png" alt="" />

                    <div className='space-y-4 mt-4'>
                        <div className=' text-sm sm:text-base'>SURREAL DIAMOND AND ROSE
                            GOLD JEWELLERY</div>
                        <div className='font-semibold'>₹1,042</div>
                        <div className='py-4 bg-colorThree text-center px-4' >ADD TO CART</div>
                    </div>
                </div>



                <div>
                    <img src="homeimg/recommendedOne.png" alt="" />

                    <div className='space-y-4 mt-4'>
                        <div className=' text-sm sm:text-base'>SURREAL DIAMOND AND ROSE
                            GOLD JEWELLERY</div>
                        <div className='font-semibold'>₹1,042</div>
                        <div className='py-4 bg-colorThree text-center px-4' >ADD TO CART</div>
                    </div>
                </div>

                <div>
                    <img src="homeimg/recommendedOne.png" alt="" />

                    <div className='space-y-4 mt-4'>
                        <div className=' text-sm sm:text-base'>SURREAL DIAMOND AND ROSE
                            GOLD JEWELLERY</div>
                        <div className='font-semibold'>₹1,042</div>
                        <div className='py-4 bg-colorThree text-center px-4' >ADD TO CART</div>
                    </div>
                </div>


                <div>
                    <img src="homeimg/recommendedOne.png" alt="" />

                    <div className='space-y-4 mt-4'>
                        <div className=' text-sm sm:text-base'>SURREAL DIAMOND AND ROSE
                            GOLD JEWELLERY</div>
                        <div className='font-semibold'>₹1,042</div>
                        <div className='py-4 bg-colorThree text-center px-4' >ADD TO CART</div>
                    </div>
                </div>


                <div>
                    <img src="homeimg/recommendedOne.png" alt="" />

                    <div className='space-y-4 mt-4'>
                        <div className=' text-sm sm:text-base'>SURREAL DIAMOND AND ROSE
                            GOLD JEWELLERY</div>
                        <div className='font-semibold'>₹1,042</div>
                        <div className='py-4 bg-colorThree text-center px-4' >ADD TO CART</div>
                    </div>
                </div>



            </div>

            <div className='container mt-24'>

                <div className='text-center text-colorThree playfair pb-12 text-4xl'>
                PURE SILVER
                </div>
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={60}
                    // centeredSlides={true}
                    grabCursor={true}
                    // loop={true}
                    className="mySwiper py-4 overflow-visible"
                >
                    <SwiperSlide className=" w-auto">
                        <img src="homeimg/silverOne.png" className='w-[200px]' alt="" />
                    </SwiperSlide>

                    <SwiperSlide className=" w-auto">
                        <img src="homeimg/silverTwo.png" className='w-[200px]' alt="" />
                    </SwiperSlide>

                    <SwiperSlide className="w-auto">
                        <img src="homeimg/silverThree.png" className='w-[200px]' alt="" />
                    </SwiperSlide>

                    <SwiperSlide className="w-auto">
                        <img src="homeimg/silverFour.png" className='w-[200px]' alt="" />
                    </SwiperSlide>
               
                    <SwiperSlide className="w-auto">
                        <img src="homeimg/silverFive.png" className='w-[200px]' alt="" />
                    </SwiperSlide>

                    <SwiperSlide className=" w-auto">
                        <img src="homeimg/silverOne.png" className='w-[200px]' alt="" />
                    </SwiperSlide>

                    <SwiperSlide className=" w-auto">
                        <img src="homeimg/silverTwo.png" className='w-[200px]' alt="" />
                    </SwiperSlide>

                    <SwiperSlide className="w-auto">
                        <img src="homeimg/silverThree.png" className='w-[200px]' alt="" />
                    </SwiperSlide>
                    
                    <SwiperSlide className="w-auto">
                        <img src="homeimg/silverFour.png" className='w-[200px]' alt="" />
                    </SwiperSlide>
               
                    <SwiperSlide className="w-auto">
                        <img src="homeimg/silverFive.png" className='w-[200px]' alt="" />
                    </SwiperSlide>



                </Swiper>
            </div>

        </div>
    )
}

export default Recommended