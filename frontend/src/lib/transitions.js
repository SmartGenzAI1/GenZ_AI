// frontend/src/lib/transitions.js

export const fadeIn = {
  duration: 250,
  easing: x => x
};

export const slideUp = {
  duration: 300,
  easing: x => x,
  css: (t) => `transform: translateY(${(1 - t) * 10}px); opacity: ${t}`
};
