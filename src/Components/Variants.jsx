import React from 'react';
import { motion,  } from 'motion/react'

const shapeVariants = {
    initial: {
        opacity: 0,
        y: "-100vh",
    },
    animate: {
        opacity: 1,
        y: 1,
        transition: {
            duration: 1,
            type: 'spring'
        }
    }
}

const childVariants = {
    initial: {
        scale: 1
    },
    animate: {
        scale: 2,
        transition: { duration: 2 }
    }
}

const Variants = () => {
    return (
        <motion.div
            variants={shapeVariants}
            initial='initial'
            animate='animate'
            className=' bg-green-600 w-34 h-34 rounded  m-4 '
        >
            <motion.div
                variants={childVariants}

                className=' bg-red-600 w-10 h-10 rounded-full border border-white m-2  '
            ></motion.div>
        </motion.div>
    );
};

export default Variants;