import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react"

const Card = ({ data, refernce }) => {
    return (
        <div>
            <motion.div
                drag
                dragConstraints={refernce}
                whileDrag={{
                    scale: 1.1,
                    transition: { duration: 0.2 }
                }}
                dragTransition={{
                    bounceStiffness:100,
                    bounceDamping:20,
                }}
                 className='w-60 flex-shrink-0 bg-zinc-600/90 h-72 rounded-[30px] p-7 relative text-white overflow-hidden'>
                <FaRegFileAlt />
                <p className='leading-tight mt-5 font-semibold text-sm'>
                    {data.desc}
                </p>
                <div className="footer absolute bottom-0 left-0  w-full ">
                    <div className=' flex items-center justify-between py-3 px-8'>
                        <h5>
                            {data.filesize}
                        </h5>
                        <span className='w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center'>
                            {
                                data.close ? <IoClose fontSize="20px" color='#fff' /> : <FaDownload fontSize=".8rem" color='#fff' />
                            }

                        </span>
                    </div>
                    {
                        data.tag.isOpen ? (
                            <div className={`tag ${data.tag.tagColor === "blue" ? "bg-blue-700" : "bg-green-600"} p-2`}>
                                <h3 className='text-xl flex items-center justify-center'>{data.tag.tagtitle}</h3>
                            </div>) : ""
                    }
                </div>
            </motion.div>
        </div>
    )
}

export default Card
