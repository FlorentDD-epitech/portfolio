import './Project.css'
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { div } from 'motion/react-client';
import { useRef } from 'react'

function Project ({children, image, title}) {

    const cardRef = useRef();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(
        y,
        [-0.5, 0.5],
        ["10deg", "-10deg"]
    );

    const rotateY = useTransform(
        x,
        [-0.5, 0.5],
        ["-10deg", "10deg"]
    );

    const change_orientation = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        
        const posX = (e.clientX - rect.left) / rect.width - 0.5;
        const posY = (e.clientY - rect.top) / rect.height - 0.5;

        x.set(posX);
        y.set(posY);
    };

    const reset_rotation = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={change_orientation}
            onMouseLeave={reset_rotation}
            style = {{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            className=' relative h-180 w-130 rounded-3xl
            ml-15 mr-15 mb-35'>
            <div
                style={{
                    transform: "translateZ(50px)",
                }}
                className='card 
                absolute
                inset-5
                bg-gradient-to-tl from-indigo-700 to-blue-400
                shadow-[0px_0px_50px_-10px_rgba(59,_130,_246,_0.5)]
                hover:shadow-[0px_0px_50px_10px_rgba(59,_130,_246,_0.5)]
                hover:scale-115
                duration-800
                rounded-3xl
                w-120
                h-170'>
                <div className= ' mr-10 ml-10 pt-10'>
                    <img src={image} alt="" className=' h-70 w-110 rounded-3xl md:object-fill'/>
                    <p className=' text-white font-bold text-3xl duration-800 flex justify-center mt-5'>{title}</p>
                    <p className=' text-white duration-800 mt-4 text-justify text-2xl'>{children}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Project