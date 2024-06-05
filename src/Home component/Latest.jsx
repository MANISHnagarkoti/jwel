import React from 'react'

const Latest = () => {
    return (
        <div>

            <div className='h-[400px] md:h-[600px] mt-[100px] relative'>

                <div className='absolute top-0 w-full h-full flex items-end p-9 justify-center'>

                    <div className='text-2xl playfair bg-white p-4'>SHOP NOW</div>


                </div>

                <img src="homeimg/latestBg.png" className='w-full h-full object-cover' alt="" />

            </div>


            <div className='px-4'>
                <div className='flex justify-center gap-2 sm:gap-9 mt-16'>

                    <div>   <img src="homeimg/latestOne.png" alt="" /></div>
                    <div> <img src="homeimg/latestTwo.png" alt="" /></div>

                </div>

                <div className='flex justify-center gap-2 sm:gap-9 mt-2 sm:mt-9'>

                    <div>   <img src="homeimg/latestThree.png" alt="" /></div>
                    <div> <img src="homeimg/latestFour.png" alt="" /></div>

                </div>

                <div className='flex justify-center gap-2 sm:gap-9 mt-2 sm:mt-9'>

                    <div>   <img src="homeimg/latestFive.png" alt="" /></div>
                    <div> <img src="homeimg/latestSix.png" alt="" /></div>

                </div>

            </div>


        </div>
    )
}

export default Latest