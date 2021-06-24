const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },

  exit: {
    y: -10,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const fadeInLeft = {
  initial: {
    x: 60,
    opacity: 0,
  },

  exit: {
    y: -10,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const title = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },

  exit: {
    scale: 0.8,
    opacity: 0,
  },

  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const toast = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },

  exit: {
    scale: 0.8,
    opacity: 0,
  },

  animate: {
    scale: [1, 1.1, 1],
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const fadeInDown = {
  initial: {
    y: -10,
    opacity: 0,
  },

  exit: {
    y: -10,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  initial: {
    opacity: 0,
  },

  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },

  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export { fadeInUp, fadeInLeft, stagger, title, toast, fadeInDown };
