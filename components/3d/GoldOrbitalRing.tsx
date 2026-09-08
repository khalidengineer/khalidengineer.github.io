"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function GoldOrbitalRing({
  mouse,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const masterGroupRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const middleRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const coreGlowRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const beamRef = useRef<THREE.Mesh>(null);
  const icoRef = useRef<THREE.Mesh>(null);

  // Generate multi-orbit comet particles
  const particleCount = 120;
  const [positions, speeds, radii, phases] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const spd = new Float32Array(particleCount);
    const rad = new Float32Array(particleCount);
    const phs = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      rad[i] = 1.8 + Math.random() * 0.9; // Radii distributed across the 3 rings
      spd[i] = (0.4 + Math.random() * 0.8) * (Math.random() > 0.3 ? 1 : -1);
      phs[i] = Math.random() * Math.PI * 2;
      const zOffset = (Math.random() - 0.5) * 0.35;

      pos[i * 3] = Math.cos(phs[i]) * rad[i];
      pos[i * 3 + 1] = Math.sin(phs[i]) * rad[i];
      pos[i * 3 + 2] = zOffset;
    }
    return [pos, spd, rad, phs];
  }, [particleCount]);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // 1. Gyroscopic Smooth Mouse Parallax for entire system
    if (masterGroupRef.current) {
      const targetRotX = 0.22 + mouse.current.y * 0.25;
      const targetRotY = -0.35 + mouse.current.x * 0.35;
      masterGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        masterGroupRef.current.rotation.x,
        targetRotX,
        0.06
      );
      masterGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        masterGroupRef.current.rotation.y,
        targetRotY,
        0.06
      );
    }

    // 2. Multi-axis Independent Ring Rotations (Gyroscopic Mechanism)
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.12;
      outerRingRef.current.rotation.x = Math.sin(time * 0.4) * 0.1;
    }

    if (middleRingRef.current) {
      middleRingRef.current.rotation.z -= delta * 0.18;
      middleRingRef.current.rotation.y = Math.cos(time * 0.3) * 0.15;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.z += delta * 0.25;
      innerRingRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
    }

    // 3. Central Core Pulsing Glow
    if (coreGlowRef.current) {
      const pulse = 1 + Math.sin(time * 2.5) * 0.08;
      coreGlowRef.current.scale.set(pulse, pulse, pulse);
    }

    // 4. Volumetric Light Beam Subtle Oscillation (matches diagonal beam in screenshot)
    if (beamRef.current) {
      beamRef.current.rotation.z = -0.65 + Math.sin(time * 0.5) * 0.03 + mouse.current.x * 0.05;
      beamRef.current.position.x = 2.2 + mouse.current.x * 0.1;
      beamRef.current.position.y = 1.2 + mouse.current.y * 0.1;
    }

    // 5. Floating 3D Golden Icosahedron
    if (icoRef.current) {
      icoRef.current.rotation.x += delta * 0.3;
      icoRef.current.rotation.y += delta * 0.4;
      icoRef.current.position.y = 1.8 + Math.sin(time * 0.8) * 0.15;
    }

    // 6. Orbiting Comet Particle Points
    if (particlesRef.current) {
      const posAttr = particlesRef.current.geometry.attributes.position;
      const arr = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        phases[i] += speeds[i] * delta;
        arr[i * 3] = Math.cos(phases[i]) * radii[i];
        arr[i * 3 + 1] = Math.sin(phases[i]) * radii[i];
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <group ref={masterGroupRef} position={[1.4, 0.2, -0.6]} rotation={[0.22, -0.35, 0.12]}>
      {/* ================= 1. PRIMARY GOLD OUTER ORBIT RING ================= */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[2.55, 0.016, 32, 120]} />
        <meshStandardMaterial
          color="#F4B83F"
          emissive="#F4B83F"
          emissiveIntensity={1.8}
          roughness={0.15}
          metalness={0.95}
        />
      </mesh>

      {/* ================= 2. MIDDLE GYROSCOPIC RING (COUNTER-ROTATING) ================= */}
      <mesh ref={middleRingRef} rotation={[0.4, 0.2, 0]}>
        <torusGeometry args={[2.25, 0.01, 24, 100]} />
        <meshStandardMaterial
          color="#FFC95A"
          emissive="#FFC95A"
          emissiveIntensity={1.4}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* ================= 3. INNER INCLINED GOLD RING ================= */}
      <mesh ref={innerRingRef} rotation={[-0.3, 0.3, 0.2]}>
        <torusGeometry args={[1.95, 0.007, 24, 90]} />
        <meshStandardMaterial
          color="#D99B26"
          emissive="#9C6B18"
          emissiveIntensity={1.1}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* ================= 4. PULSING WARM GOLD CORE GLOW ================= */}
      <mesh ref={coreGlowRef} position={[0, 0, -0.2]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial
          color="#FFC95A"
          transparent
          opacity={0.06}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* ================= 5. DIAGONAL VOLUMETRIC GOD-RAY BEAM ================= */}
      {/* Matches the diagonal golden light streak seen cutting across top right behind Arjun */}
      <mesh ref={beamRef} position={[1.8, 1.0, -1.0]} rotation={[0, 0, -0.65]}>
        <planeGeometry args={[1.4, 10]} />
        <meshBasicMaterial
          color="#F4B83F"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Second Fainter Wide Ray for Cinematic Softness */}
      <mesh position={[2.0, 1.2, -1.2]} rotation={[0, 0, -0.68]}>
        <planeGeometry args={[2.8, 12]} />
        <meshBasicMaterial
          color="#FFC95A"
          transparent
          opacity={0.04}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* ================= 6. FLOATING 3D GOLDEN GEOMETRIC ARTIFACT ================= */}
      <mesh ref={icoRef} position={[-2.2, 1.8, -0.8]} scale={0.22}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#F4B83F"
          emissive="#D99B26"
          emissiveIntensity={0.6}
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* ================= 7. HIGH-ENERGY ORBITING COMET PARTICLES ================= */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color="#FFE08A"
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
