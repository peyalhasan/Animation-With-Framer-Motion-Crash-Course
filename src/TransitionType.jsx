import React from 'react';
import { motion, spring } from 'motion/react'
const TransitionType = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: '-100vh' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>Learning Animation</h1>
                <p>
                    We Love Animation. We are Enjoying it a lot.
                    Framer Motion is great.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: '-100vh' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{type:spring,  duration: 1 }}
            >
                <h1>Learning Animation</h1>
                <p>
                    We Love Animation. We are Enjoying it a lot.
                    Framer Motion is great.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: '-100vh' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{type:spring, bounce:2, duration: 1 }}
            >
                <h1>Learning Animation</h1>
                <p>
                    We Love Animation. We are Enjoying it a lot.
                    Framer Motion is great.
                </p>
            </motion.div>
        </>
    );
};

export default TransitionType;