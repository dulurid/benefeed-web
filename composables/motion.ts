export const useSlideUpMotion = (delay) => {
  return {
    initial: {
      y: 100,
      opacity: 0,
    },
    visibleOnce: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 20,
        delay: delay,
      },
    },
  };
};