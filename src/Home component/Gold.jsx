import React from 'react'

const Gold = () => {
    return (
        <div className='mt-[200px] container'>

            <div className='text-center text-colorThree playfair pb-12 text-4xl'>
                GOLD <br /> JEWELLERY
            </div>


            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>

                <div>
                    <img src="homeimg/goldOne.png" alt="" />

                    <div className='text-center mt-6 text-lg'>
                        <div>GOLD
                            PENDENTS</div>
                    </div>
                </div>


                <div>
                    <img src="homeimg/goldTwo.png" alt="" />

                    <div className='text-center mt-6 text-lg'>
                        <div>GOLD
                            RINGS</div>
                    </div>
                </div>


                <div>
                    <img src="homeimg/goldThree.png" alt="" />

                    <div className='text-center mt-6 text-lg'>
                        <div>GOLD EARRINGS</div>
                    </div>
                </div>


                <div>
                    <img src="homeimg/goldFour.png" alt="" />

                    <div className='text-center mt-6 text-lg'>
                        <div>GOLD BRACELETS</div>
                    </div>
                </div>



                <div>
                    <img src="homeimg/goldFive.png" alt="" />

                    <div className='text-center mt-6 text-lg'>
                        <div>GOLD NOSE PIN</div>
                    </div>
                </div>

            </div>

            <div className='mt-[130px] grid md:grid-cols-3 gap-16 container'>

                <img src="homeimg/offerOne.png" className='w-full' alt="" />
                <img src="homeimg/offerTwo.png" className='w-full'  alt="" />
                <img src="homeimg/offerThree.png" className='w-full'  alt="" />


            </div>


        </div>
    )
}

export default Gold