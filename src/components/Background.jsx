import React from 'react'

const Background = () => {
    return (
        <div className='fixed z-[2] w-full h-screen'>
            <div className='text-2xl absolute p-7 flex items-center w-full justify-center text-gray-400 font-bold'>
                document
            </div>
            <div className='text-[180px] text-gray-500 font-semibold absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'  >
                Docs.
            </div>
        </div>
    )
}

export default Background
