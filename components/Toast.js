import { toast } from "components/animation";
import { motion } from "framer-motion";
import "styles/Toast.scss";

function Toast({ message }) {
  return (
    <motion.div
      exit={{ opacity: 0, x: -100 }}
      initial="initial"
      animate="animate"
      className="toast"
    >
      <motion.div variants={toast}>
        <p className="toast__message">{message ?? "Message here"}</p>
      </motion.div>
    </motion.div>
  );
}

export default Toast;
