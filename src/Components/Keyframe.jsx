import React from 'react';
import { motion } from "motion/react"
const Keyframe = () => {
    return (
        <motion.div
            className=' bg-blue-500 border w-32 h-32 m-4 '
            animate={{
                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                rotate: [0, 90, 180, 270, 70, 290, 90, 60, 150, 20, 260, 0],
                scale: [1, 1, 2, 1, 2, 1]
            }}
             transition={{duration:2, delay: 0.2}}
        />


    );
};

export default Keyframe;