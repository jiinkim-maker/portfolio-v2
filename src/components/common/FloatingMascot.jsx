import { motion } from "framer-motion";
import "./FloatingMascot.css";

function FloatingMascot() {
  return (
    <motion.div
      className="floating-mascot"
      animate={{
        y: [0, -8, 0],
        rotate: [-4, 4, -4],
      }}
      transition={{
        duration: 2.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    >
      <div className="mascot-face">
        <span className="mascot-eye left" />
        <span className="mascot-eye right" />
        <span className="mascot-mouth" />
      </div>
    </motion.div>
  );
}

export default FloatingMascot;
