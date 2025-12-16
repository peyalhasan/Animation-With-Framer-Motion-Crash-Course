import React, { useState } from 'react';
import { AnimatePresence, motion, scale } from "motion/react"

const images = [
    {
        id: 1,
        Image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        id: 2,
        Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTaYVG_iCjqtC3bXEKrVyw1a1VUNpkA7fViw&s'
    },
    {
        id: 3,
        Image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStfBlUC0BFLWlESsbTJRD-OgQZhWWj4phZedVazIS6alG6IDR1'
    },
    {
        id: 4,
        Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRru74FRUbADRLb5IOjT4QlvT8t4tK2UDrefA&s'
    },
    {
        id: 5,
        Image: 'https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
        id: 6,
        Image: 'https://thumbs.dreamstime.com/b/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg'
    },
]

const containrVariants = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            staggerChildren: 0.3,
            ease: 'easeOut',
            duration: 0.6,

        }
    },
    exit: {
        opacity: 0,
        scale: 0,
        transition: {
            ease: 'easeInOut',
            duration: 0.6
        }
    }
}
const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1, y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        }
    },
};





const Stagger = () => {

    const [show, setShow] = useState(false)

    return (
        <motion.div
        initial={{
                x:'-100vw',
                transition: {
                    ease: 'easeInOut',
                }
            }}
            animate={{
                x:0,
                transition: {
                    ease: 'easeIn',
                    duration: 0.7,
                }
            }}
        exit={{
                x:'-100vw',
                transition: {
                    ease: 'easeInOut',
                }
            }}
        >
            <span className=' p-2 border rounded-full px-10 border-sky-900 bg-blue-300 text-lg font-semibold '>
                Peace of eyes <span><button
                    onClick={() => setShow(!show)}
                    className='px-2 border border-white rounded-full cursor-pointer' > {show ? 'Hide ^_^' : 'View ◉_◉ '} </button></span>
            </span>
            <AnimatePresence>
                {

                    show && <motion.div
                        variants={containrVariants}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        className=' p-4 mt-10 flex flex-wrap gap-10 rounded-lg bg-slate-900 ' >
                        {

                            images.map((image, index) => (

                                <motion.img
                                    variants={itemVariants}
                                    className='object-cover w-50 h-50' key={index} src={image.Image} alt="" />
                            ))
                        }
                    </motion.div>
                }
            </AnimatePresence>
        </motion.div>
    );
};

export default Stagger;