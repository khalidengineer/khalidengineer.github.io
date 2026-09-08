"use client";

import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import GoldOrbitalRing from "./GoldOrbitalRing";
import FloatingParticles from "./FloatingParticles";

export default function HeroCanvas() {
  const mouse = useRef({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1 ... 1
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        style={{ pointerEvents: "none", background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        {/* Warm Golden Point Light */}
        <pointLight position={[2, 1, 3]} intensity={3.5} color="#FFC95A" distance={8} />
        <pointLight position={[-3, -1, 2]} intensity={1.2} color="#9C6B18" distance={6} />

        <GoldOrbitalRing mouse={mouse} />
        <FloatingParticles count={90} mouse={mouse} />
      </Canvas>
    </div>
  );
}
