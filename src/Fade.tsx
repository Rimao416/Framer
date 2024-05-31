import { motion, AnimatePresence } from "framer-motion";

export const Fade = ({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive: boolean;
}) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
        exit={{ opacity: 0,x:-200 }}
        initial={{ opacity: 0,x:200 }}
        animate={{ opacity: 1,x:0, transition: { duration: 0.5 } }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Fade;
