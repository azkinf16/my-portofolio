import { CloseOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ isVisible, onClose, children }) {
  Modal.propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node,
  };

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: {
        duration: 0.5,
        type: "spring",
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mx-4 md:mx-0 fixed inset-0 bg-black bg-opacity-25
      backdrop-blur-sm flex justify-center items-center z-10"
          id="wrapper"
          onClick={handleClose}
        >
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-max bg-gradient-to-b from-[#161626] to-[#191921] rounded-lg flex p-5"
          >
            {children}
            <CloseOutlined
              className="text-gray-400 text-sm ml-5"
              onClick={() => onClose()}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
