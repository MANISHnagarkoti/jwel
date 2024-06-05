import React from 'react'

const Discover = () => {
  return (
    <div className='container mt-[100px]'>

      <div className='text-center text-4xl md:text-7xl space-y-4'>
        <div className='playfair'> DISCOVER </div>
        <div className='playfair'>  WORLS’S BEST </div>
        <div className='playfair'>  JEWELLERY </div>
      </div>


      <div className='grid  md:grid-cols-3 gap-16 mt-16 '>

        <div className='flex items-center py-8 h-[400px] md:h-[700px] '>

          <div className=' md:h-[50%] w-full h-full'>

            <img src="homeimg/desOne.png" className='h-full w-full object-cover object-top' alt="" />

          </div>

        </div>


        <div className='h-[700px]'>

          <img src="homeimg/desTwo.png" className='h-full w-full object-cover' alt="" />

        </div>

        <div className='grid grid-rows-2 py-8 h-[700px] gap-9'>

          <img src="homeimg/desOne.png" className='h-full w-full object-cover object-top' alt="" />
          <img src="homeimg/desOne.png" className='h-full w-full object-cover object-top' alt="" />

        </div>

      </div>

      <div className='flex justify-center mt-9'>
        <div className='m-auto inline-block p-4 px-6 bg-colorThree'>
          SHOP NOW
        </div>
      </div>

      {/* {{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}} */}


      <div className='mt-24'>

        <div className='grid md:grid-cols-2 rounded-xl overflow-hidden '>

          <img src="homeimg/weddingOne.png" className='w-full h-full object-cover hidden md:block' alt="" />


          <div className='bg-colorThree flex flex-col justify-center py-9 px-4 items-center text-lg'>

            <div className=''>Witness the grandeur at the </div>
            <div className='text-xl font-semibold md:text-4xl mt-6'>#WeddingAffairsWithUs </div>
            <div className='mt-16'>The Wedding Collection</div>

          </div>

        </div>

        <div className='grid grid-cols-2  gap-9 mt-9'>

          <img src="homeimg/weddingTwo.png" className='w-full h-full object-cover rounded-xl overflow-hidden' alt="" />


          <img src="homeimg/weddingTwo.png" className='w-full h-full object-cover rounded-xl overflow-hidden' alt="" />

        </div>


      </div>



    </div>
  )
}

export default Discover