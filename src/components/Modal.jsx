import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ children, onClose, onClick, zIndex, initialPosition, title, maxHeight = 500, customWidth }) => {
  const dragConstraintsRef = useRef(null);

  return (
    <AnimatePresence>
      <motion.div
        ref={dragConstraintsRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
      >
        <motion.div
          className="pointer-events-auto bg-white text-black rounded-lg shadow-lg absolute"
          style={{
            zIndex,
            top: initialPosition?.y ?? 100,
            left: initialPosition?.x ?? 100,
            width: customWidth ?? '500px',  // 👈 Custom width support
          }}
          drag
          dragConstraints={dragConstraintsRef}
          dragHandleClassName="drag-handle"
          dragElastic={0}
          dragMomentum={false}
          transition={{ type: 'tween', duration: 0.1 }}
          onMouseDown={onClick}
        >
          <div className="drag-handle bg-gray-300 dark:bg-gray-800 text-black dark:text-white font-mono flex justify-between items-center px-4 py-2 cursor-grab active:cursor-grabbing rounded-t-lg">
            <span className="capitalize">{title}</span>
            <button onClick={onClose} className="text-xl font-bold">[ x ]</button>
          </div>
          <div
            className="p-6 overflow-auto"
            style={{ maxHeight: `${maxHeight}px` }}
          >
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
