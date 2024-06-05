import React from 'react'

const Gender = () => {
    return (
        <div className='container mt-[200px]'>

            <div className='text-center text-4xl playfair'>Shop By Gender</div>

            <div className='grid grid-cols-2 gap-9 mt-12'>

                <div className='group  cursor-pointer'>
                    <div className=' overflow-hidden  '>
                        <img src="homeimg/genderTwo.png" alt="" className=' transition-all  duration-200 group-hover:scale-110' />
                    </div>
                    <div className='w-full py-4 bg-colorThree text-center'>WOMEN</div>
                </div>

                <div className='group  cursor-pointer'>
                    <div className=' overflow-hidden  '>
                        <img src="homeimg/genderOne.png" alt="" className=' transition-all  duration-200 group-hover:scale-110' />
                    </div>
                    <div className='w-full py-4 bg-colorThree text-center'>MEN</div>
                </div>


            </div>


            <div className='mt-24'>

                <img src="homeimg/flat.png" className='w-full h-full object-cover' alt="" />
            </div>


            <div className='grid md:grid-cols-3 gap-9 mt-24'>

                <img src="homeimg/astra.png" alt="" />
                <img src="homeimg/star.png" alt="" />
                <img src="homeimg/desired.png" alt="" />

            </div>


        </div>
    )
}

export default Gender