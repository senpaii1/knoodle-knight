"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function ScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.1,
      easing: (t) => t, // ease linear-like; tweak for feel
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return children;
}
