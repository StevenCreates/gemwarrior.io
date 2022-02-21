import React from "react";
import { motion } from "framer-motion";

const rankColors = {
  1: '#69BFA7',
  2: '#355C7D',
  3: '#F67280',
  default: ''
}

export const CircleRank = ({coin, size = '36px'}) => {
  const { rank } = coin
  const backgroundColor = rankColors[rank]

  return (
    <>
      <motion.div
        style={{
            display: "flex",
            position: "relative"
        }} 
        layout
      >
        <motion.div
        style={{
            width: size,
            position: "absolute",
            height: size,
            borderRadius: "50%",
            filter: "blur(1px)",
            boxShadow: '.4rem .4rem .8rem #c8d0e7, -.4rem -.4rem .8rem #FFFFFF',
            background: 'linear-gradient(to bottom right, #c8d0e7 0%, #FFFFFF 100%)',
        }}
        animate={{
            scale: [1, 2],
            opacity: [1, 1, 0]
        }}
        transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 4,
            type: 'spring'
        }}
        >
        </motion.div>
                <motion.div
        style={{
            width: size,
            position: "absolute",
            height: size,
            borderRadius: "50%",
            filter: "blur(1px)",
            boxShadow: '.4rem .4rem .8rem #c8d0e7, -.4rem -.4rem .8rem #FFFFFF',
        }}
        animate={{
            scale: [1, 2],
            opacity: [1, 1, 0]
        }}
        transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 4,
            type: 'spring',
            delay: 2
        }}
        >
        </motion.div>
        
        <div 
        style={{
            width: size,
            height: size,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            fontSize: "1.5rem",
            background: backgroundColor,
            color: '#f1f8fd',
            boxShadow: "5px 5px 10px #c8d0e7, -5px -5px 10px #ffffff",
            zIndex: 600,
            position: "relative",
        }}
        >
            {rank}
        </div>
      </motion.div>
    </>
  );
};
