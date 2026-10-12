import React, { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  tilt = true,
  onClick,
  as = "div",
  id,
  style = {},
  ...props
}) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const sy = useSpring(rotateY, { stiffness: 180, damping: 18 });
  const ssx = useSpring(x, { stiffness: 180, damping: 18 });
  const ssy = useSpring(y, { stiffness: 180, damping: 18 });

  const move = (e) => {
    if (!tilt || prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rotateY.set(px * 12);
    rotateX.set(py * -12);
    x.set(px * 5);
    y.set(py * 5);
  };

  const leave = () => {
    rotateX.set(0);
    rotateY.set(0);
    x.set(0);
    y.set(0);
  };

  const Component = motion[as] || motion.div;

  return (
    <Component
      ref={ref}
      id={id}
      className={`tilt-card ${className}`}
      style={{
        ...(tilt && !prefersReducedMotion ? { rotateX: sx, rotateY: sy, x: ssx, y: ssy } : {}),
        ...style
      }}
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.015, transition: { duration: 0.2 } }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.99, transition: { duration: 0.12 } }}
      onMouseMove={tilt && !prefersReducedMotion ? move : undefined}
      onMouseLeave={leave}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
}
