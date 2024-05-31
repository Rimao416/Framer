import { motion, AnimatePresence } from "framer-motion";

export const Slide = ({
  children,
  isActive,
  direction = 1,
  distance = 200,
}: {
  children: React.ReactNode;
  isActive: boolean;
  direction: number;
  distance?: number;
}) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          exit={{ opacity: 0, x: direction * (distance * -1) }}
          initial={{ opacity: 0, x: direction * distance }}
          animate={{ opacity: 1, x: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Slide;
