import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref=useRef(null);
  const data = [
    {
      desc: "Hello, I am the first card. I contain essential information about downloading small-sized files quickly and efficiently.",
      filesize: "0.5mb",
      close: true,
      tag: {
        isOpen: true,
        tagtitle: "Download now",
        tagColor: "green",
      },
    },
    {
      desc: "Hello, I am the second card. I provide access to medium-sized files and detailed information about their content.",
      filesize: "1mb",
      close: false,
      tag: {
        isOpen: true,
        tagtitle: "View details",
        tagColor: "blue",
      },
    },
    {
      desc: "Hello, I am the third card. I offer insights and guidance on larger files for those seeking in-depth knowledge.",
      filesize: "2.5mb",
      close: true,
      tag: {
        isOpen: false,
        tagtitle: "Learn more",
        tagColor: "orange",
      },
    },
  ];
  
  return (
    <div ref={ref} className='fixed w-full h-screen z-[3] flex gap-5 p-6'>
      {
        data.map((item,index) => (
          <Card data={item} refernce={ref}/>
        ))
      }
    </div>
  )
}

export default Foreground
