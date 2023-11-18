import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="w-[50px] h-[50px] rounded-full border-4 border-solid border-opacity-10 border-black border-t-blue-500 spinner"></div>
  </div>
  )
}

export default Loader