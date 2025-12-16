import React from 'react';
import { motion } from 'motion/react'
const ButtonTap = () => {
    return (
        <>
            <motion.button
                className='bg-black text-white p-2 text-2xl'
                whileTap={{
                    scale: 0.5
                }}
                whileHover={{
                    scale: 1.4,
                }}
            >
                Tap Me
            </motion.button>

            <motion.button
                className='bg-black mx-4 text-white p-2 text-2xl'
                whileTap={{
                    scale: 0.5
                }}
                whileHover={{
                    scale: 1.4,
                    transition: {yoyo: Infinity}
                }}
            >
                Tap Me
            </motion.button>
        </>
    );
};

export default ButtonTap;