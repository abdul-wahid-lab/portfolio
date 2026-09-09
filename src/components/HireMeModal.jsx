import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { close } from "../assets";
import ContactForm from "./ContactForm";

const HireMeModal = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className='fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-10'
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className='relative w-full max-w-lg bg-black-100 rounded-2xl p-8 max-h-[90vh] overflow-y-auto'
        >
          <button
            type='button'
            onClick={onClose}
            aria-label='Close'
            className='absolute top-5 right-5 w-9 h-9 rounded-full bg-tertiary flex items-center justify-center hover:opacity-80'
          >
            <img src={close} alt='close' className='w-4 h-4 object-contain' />
          </button>

          <p className='text-secondary text-[14px] uppercase tracking-wider'>
            Let's work together
          </p>
          <h3 className='text-white font-black md:text-[40px] sm:text-[35px] text-[28px]'>
            Hire Me.
          </h3>
          <p className='mt-3 text-secondary text-[16px]'>
            Tell me a bit about your project and I'll get back to you at{" "}
            <span className='text-white'>cs.abdulwahid@gmail.com</span> as
            soon as possible.
          </p>

          <ContactForm onSent={onClose} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HireMeModal;
