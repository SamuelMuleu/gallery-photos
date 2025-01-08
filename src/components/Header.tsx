import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className=" text-white p-4 text-center mb-4 border-b  border-gray-700  rel">
      <motion.h1  className={`${
            isFixed
              ? 'fixed -top-2 left-0 w-full bg-bg_principal text-gray-700 z-50 p-5 md:p-10 shadow-md'
              : 'w-full p-5 md:p-10 text-gray-700 '
          } transition-all duration-300 ease-in-out `}
          exit={{ opacity: 0, y: -150 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}>
        Galeria de Fotos
      </motion.h1>
    </header>
  );
};

export default Header;
