import { motion, useMotionValue, useTransform} from "framer-motion";
import { useState } from "react";


const tickVariants = {
    pressed: (isChecked: boolean) => ({ pathLength: isChecked ? 0.85 : 0.2 }),
    checked: { pathLength: 1 },
    unchecked: { pathLength: 0 }
  };
const arrowVariants = {
    pressed: (isChecked: boolean) => ({ pathLength: isChecked ? 0.85 : 0.2 }),
    checked: { pathLength: 0 },
    unchecked: { pathLength: 1 }
  };

export default function ValidationButton(){
    const [isChecked, setIsChecked] = useState(false);

    return(
        <button onClick={
            (e) => {
                const form = e.currentTarget.form;
                e.preventDefault();
                setIsChecked(!isChecked);
                new Promise((resolve) =>
                    setTimeout(() => {
                        if (form) {
                            resolve(form.submit())
                        }
                    }, 1000)
                )
                }
                
            }>
            <motion.svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill={"none"}
            >
                <motion.path
                stroke="#4EBE96"
                d="M8 13L10.5 15.5L15.5 8.5"
                variants={tickVariants}
                animate={isChecked ? "checked" : "unchecked"}
                />
                <motion.path
                className="dark:stroke-white stroke-black"
                d="M7.75 12H16.25M16.25 12L13 15.25M16.25 12L13 8.75"
                variants={arrowVariants}
                animate={isChecked ? "checked" : "unchecked"}
                />
            </motion.svg>
        </button>
    )
}