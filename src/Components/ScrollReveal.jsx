import React from 'react';
import { motion } from 'motion/react'



const Box = ({ text }) => {

    return (
        <motion.div
            className=' w-32 h-32  rounded-sm bg-pink-300 text-black m-4 text-2xl text-center'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
                opacity: 1,
                x: 0,
                transition:{
                    duration: 1,
                }
            }}
            viewport={{
                once: false,
            }}
        >
            {text}
        </motion.div>
    )
}

const ScrollReveal = () => {

    const gretings = ['Hello', "Hey", 'Welcome', 'Holla', 'Come In']

    return (
        <div >
            {
                gretings.map((greeting, index) => (
                    <Box key={index} text={greeting} />
                ))
            }
        </div>
    );
};

export default ScrollReveal;