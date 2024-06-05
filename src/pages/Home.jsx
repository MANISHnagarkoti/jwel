import React from 'react'
import Herosection from '../Home component/Herosection'
import Collections from '../Home component/Collections'
import Discover from '../Home component/Discover'
import Recommended from '../Home component/Recommended'
import Gender from '../Home component/Gender'
import Gold from '../Home component/Gold'
import Latest from '../Home component/Latest'

const Home = () => {
  return (
    <>
      <div className=' overflow-x-hidden'>
        <Collections />
        <Herosection />
        <Discover />
        <Recommended />
        <Gender />
        <Gold />
        <Latest />
      </div>
    </>
  )
}

export default Home