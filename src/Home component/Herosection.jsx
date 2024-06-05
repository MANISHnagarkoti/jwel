
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from 'swiper/modules';






const Herosection = () => {


  return (
    <div>
      <div className=' text-white'>

        <Swiper
          slidesPerView={1}
          // centeredSlides={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper pb-12 h-[300px] md:h-auto"
        >
          <SwiperSlide >
            <img src="homeimg/herosecOne.png" className="w-full h-full object-cover" alt="" />
          </SwiperSlide>

          <SwiperSlide>
          <img src="homeimg/herosecOne.png" className="w-full h-full object-cover" alt="" />
          </SwiperSlide>

          <SwiperSlide>
          <img src="homeimg/herosecOne.png" className="w-full h-full object-cover" alt="" />
          </SwiperSlide>

          <SwiperSlide>
          <img src="homeimg/herosecOne.png" className="w-full h-full object-cover" alt="" />
          </SwiperSlide>

        </Swiper>
      </div>

      {/* {{{{{{{{{{{{{{}}}}}}}}}}}}}} */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-20 container">

        <div>
          <div><img src="homeimg/recOne.png" alt="" /></div>
          <div className="text-lg rounded-b-xl border border-colorThree text-center py-4">
            Rings
          </div>
        </div>

        <div>
          <div><img src="homeimg/recTwo.png" alt="" /></div>
          <div className="text-lg rounded-b-xl border border-colorThree text-center py-4">
          Pendents
          </div>
        </div>

        <div>
          <div><img src="homeimg/recThree.png" alt="" /></div>
          <div className="text-lg rounded-b-xl border border-colorThree text-center py-4">
          Earrings
          </div>
        </div>

        <div>
          <div><img src="homeimg/recFour.png" alt="" /></div>
          <div className="text-lg rounded-b-xl border border-colorThree text-center py-4">
          Bracelets
          </div>
        </div>

        
        <div>
          <div><img src="homeimg/recFive.png" alt="" /></div>
          <div className="text-lg rounded-b-xl border border-colorThree text-center py-4">
          Bangles
          </div>
        </div>

        <div>
          <div><img src="homeimg/recSix.png" alt="" /></div>
          <div className="text-lg rounded-b-xl border border-colorThree text-center py-4">
          Necklace
          </div>
        </div>

        <div>
          <div><img src="homeimg/recSeven.png" alt="" /></div>
          <div className="text-lg rounded-b-xl border border-colorThree text-center py-4">
          Pendants
          </div>
        </div>

        <div>
          <div><img src="homeimg/recEight.png" alt="" /></div>
          <div className="text-lg rounded-b-xl border border-colorThree text-center py-4">
          Chains
          </div>
        </div>



      </div>



    </div>
  );
};

export default Herosection;

