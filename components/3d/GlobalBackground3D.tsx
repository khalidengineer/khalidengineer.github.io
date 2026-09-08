"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GlobalParticles({ mouse, scrollSpeed }: { mouse: React.MutableRefObject<{ x: number; y: number }>; scrollSpeed: React.MutableRefObject<number> }) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 120;

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
      spd[i] = 0.005 + Math.random() * 0.015;
    }
    return [pos, spd];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position;
    const arr = posAttr.array as Float32Array;

    const scrollBoost = scrollSpeed.current * 0.05;

    for (let i = 0; i < count; i++) {
      // Continuous subtle upward float + scroll velocity boost
      arr[i * 3 + 1] += (speeds[i] + scrollBoost) * (delta * 60);

      // Loop back if out of view
      if (arr[i * 3 + 1] > 10) {
        arr[i * 3 + 1] = -10;
      } else if (arr[i * 3 + 1] < -10) {
        arr[i * 3 + 1] = 10;
      }
    }
    posAttr.needsUpdate = true;

    // Decay scroll speed
    scrollSpeed.current = THREE.MathUtils.lerp(scrollSpeed.current, 0, 0.08);

    // Subtle overall mouse tilt
    const targetX = mouse.current.x * 0.4;
    const targetY = mouse.current.y * 0.4;
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, targetX * 0.1, 0.04);
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, targetY * 0.1, 0.04);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#F4B83F"
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function GlobalBackground3D() {
  const mouse = useRef({ x: 0, y: 0 });
  const scrollSpeed = useRef(0);
  const lastScrollY = useRef(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = Math.abs(currentY - lastScrollY.current);
      scrollSpeed.current = Math.min(delta * 0.015, 0.3);
      lastScrollY.current = currentY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        dpr={[1, 1.25]}
        style={{ pointerEvents: "none", background: "transparent" }}
      >
        <GlobalParticles mouse={mouse} scrollSpeed={scrollSpeed} />
      </Canvas>
    </div>
  );
}
