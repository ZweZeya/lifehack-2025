import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

const EntranceAnimation = (props) => {
    const { children } = props;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const control = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        control.start("visible");
      }
    }, [isInView]);
  
    return (
      <div ref={ref} style={{padding: 0, margin: 0}}>
        <motion.div 
          style={{padding: 0, margin: 0}}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 0.75, y: 0 }
          }}
          initial="hidden"
          animate={control}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {children}
        </motion.div>
      </div>
    );
  };

export default EntranceAnimation