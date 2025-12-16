import React from 'react';
import { motion } from 'motion/react'

const TextMotion = () => {
    const message = 'We are now watching tutorial video with LWS!!!..';
    const wordArray = message.split(' ');
    return (
        <div
            className='text-2xl m-4 text-center'
        >
            {
                wordArray.map((word,index) => (
                    <motion.span
                    key={index}
                    initial={{opacity: 0}}
                    animate={{opacity:1}}
                    transition={{
                        duration: 3.5,
                        delay: index/10,

                    }}
                    >
                        {word} {' '}
                    </motion.span>
                )  )
            }
        </div>
    );
};

export default TextMotion;