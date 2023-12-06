import React from 'react'

const Address = () => {
  return (
    <div className='bg-gray-100'>
     <div className="flex items-center justify-center py-12 w-[90%] mx-[5%] md:w-[80%] md:mx-[10%] ">
      <div className="w-full lg:w-[29rem] p-6 bg-black/10 rounded shadow-lg " data-aos="zoom-in">
        <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
        <div className="mb-4">
          <p className='my-2 font-bold'>ADDRESS: <span className='font-medium'>Post Office Box 36.</span></p>
          <p className='my-2 flex flex-wrap font-bold'>
            Email: <span className='font-medium'>
              {"  "}
            Geofosulimitedcompany@gmail.com
          </span></p>
          <p className='my-2 font-bold'>Contact:
           <span className='font-medium'>
            WhatsApp: 0544803157/ Tel:  0598588924
          </span></p>
          <p className='my-2 font-bold'>
            Location: 
            <span className='font-medium'>
              Amansie Central-Ashanti Region.
            </span>
          </p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Address