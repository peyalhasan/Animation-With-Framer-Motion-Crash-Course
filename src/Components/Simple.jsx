import React from 'react';
import { motion } from "motion/react"
const Simple = () => {
    return (
        <motion.div
            className='bg-red-500 border w-32 h-32 rounded-full '
            initial={{opacity:0, scale: 0.5, }}
            animate={{opacity:1, scale: 1}}
            transition={{duration:2, delay: 0.2}}
        />

    );
};

export default Simple;