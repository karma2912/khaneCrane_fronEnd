import React from 'react'
import khanCrane from './khanCrane1.jpg'

const Page1 = () => {
  return (
    <>
    <div className='h-[48rem] w-full text-white flex justify-end' style={{backgroundColor: "#1b273a"}}>
        <div className=' relative flex flex-col md:pl-40 pl-12 justify-center '>
            <div className='text-lg pt-20'>CRANE BUSINESS
                <div className='pt-6 gap-5'>
                <div className='text-7xl font-bold flex gap-5'><div className=' w-1 bg-yellow-500'></div>WE OFFER <br/>GREAT SERVICE</div>
                </div>
                <div className='text-base pt-4'>We rent our cranes for all needs of services required. You can have <br/> your own driver to drive the crane or we can send from our sector <br/> We have various types of cranes suitable for your work in the most Affordable <br/> prices in the whole market
                </div>
            </div>
            <div className='pt-10'>
            <button className='border-2 border-yellow-500 bg-yellow-500 w-36 h-14 text-white'>LEARN MORE</button>
            </div>
        </div>
        <div><img src={khanCrane} className='md:h-full h-0' style={{clipPath:'polygon(0 0,100% 0,100% 100%,25% 100%'}}></img></div>
    </div>
    </>
  )
}

export default Page1