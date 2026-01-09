import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const codeLines = [
  'const express = require("express");',
  'const app = express();',
  '',
  'app.use(express.json());',
  '',
  'const users = [];',
  '',
  'app.get("/api/users", (req, res) => {',
  '  res.json({ success: true, users });',
  '});',
  '',
  'app.post("/api/users", (req, res) => {',
  '  const { name, email } = req.body;',
  '  const newUser = {',
  '    id: Date.now(),',
  '    name,',
  '    email,',
  '    createdAt: new Date()',
  '  };',
  '  users.push(newUser);',
  '  res.status(201).json(newUser);',
  '});',
  '',
  'function validateEmail(email) {',
  '  const regex = /^[^\\s@]+@[^\\s@]+$/;',
  '  return regex.test(email);',
  '}',
  '',
  'async function fetchData(url) {',
  '  try {',
  '    const response = await fetch(url);',
  '    const data = await response.json();',
  '    return data;',
  '  } catch (error) {',
  '    console.error("Error:", error);',
  '    return null;',
  '  }',
  '}',
  '',
  'const PORT = process.env.PORT || 3000;',
  'app.listen(PORT, () => {',
  '  console.log(`Server running`);',
  '});',
];

const FloatingCode = ({ position, rotation, scale = 1 }: { position: [number, number, number]; rotation?: [number, number, number]; scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <boxGeometry args={[0.8, 0.1, 0.4]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
};

const CodeBracket = ({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Left bracket < */}
        <mesh position={[-0.3, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.6, 0.08, 0.08]} />
          <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[-0.3, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.6, 0.08, 0.08]} />
          <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Slash / */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
          <boxGeometry args={[0.8, 0.06, 0.06]} />
          <meshStandardMaterial color="#666666" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Right bracket > */}
        <mesh position={[0.3, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.6, 0.08, 0.08]} />
          <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.6, 0.08, 0.08]} />
          <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
    </Float>
  );
};

const TerminalScreen = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const currentLineRef = useRef(0);
  const currentCharRef = useRef(0);
  const displayedLinesRef = useRef<string[]>([]);
  const lastUpdateRef = useRef(0);
  
  // Create canvas and texture once
  const { canvas, texture } = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 320;
    
    // Initialize with dark background
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    
    return { canvas, texture };
  }, []);
  
  const highlightSyntax = (ctx: CanvasRenderingContext2D, text: string, x: number, y: number) => {
    const keywords = ['const', 'let', 'var', 'function', 'async', 'await', 'return', 'try', 'catch', 'if', 'else', 'require'];
    const builtins = ['console', 'express', 'app', 'res', 'req', 'Date', 'process', 'JSON'];
    
    let currentX = x;
    const words = text.split(/(\s+|[(){}[\];,.])/);
    
    words.forEach(word => {
      if (keywords.includes(word)) {
        ctx.fillStyle = '#c084fc'; // purple for keywords
      } else if (builtins.includes(word)) {
        ctx.fillStyle = '#22d3ee'; // cyan for builtins
      } else if (word.startsWith('"') || word.startsWith("'")) {
        ctx.fillStyle = '#4ade80'; // green for strings
      } else if (/^\d+$/.test(word)) {
        ctx.fillStyle = '#fb923c'; // orange for numbers
      } else if (['(', ')', '{', '}', '[', ']', ';', ',', '.'].includes(word)) {
        ctx.fillStyle = '#6b7280'; // gray for punctuation
      } else {
        ctx.fillStyle = '#e5e7eb'; // light gray for rest
      }
      
      ctx.fillText(word, currentX, y);
      currentX += ctx.measureText(word).width;
    });
  };
  
  useFrame(() => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const now = Date.now();
    
    // Update typing every 50ms
    if (now - lastUpdateRef.current > 50) {
      lastUpdateRef.current = now;
      
      const line = codeLines[currentLineRef.current % codeLines.length];
      
      if (currentCharRef.current < line.length) {
        currentCharRef.current += 1;
      } else {
        // Move to next line
        displayedLinesRef.current = [...displayedLinesRef.current, line];
        // Keep only last 12 lines visible
        if (displayedLinesRef.current.length > 12) {
          displayedLinesRef.current = displayedLinesRef.current.slice(-12);
        }
        currentLineRef.current = (currentLineRef.current + 1) % codeLines.length;
        currentCharRef.current = 0;
      }
    }
    
    // Clear canvas with dark background
    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw code lines
    ctx.font = '14px monospace';
    const lineHeight = 22;
    const startY = 25;
    const startX = 15;
    
    // Draw previous lines
    displayedLinesRef.current.forEach((line, index) => {
      const y = startY + index * lineHeight;
      highlightSyntax(ctx, line, startX, y);
    });
    
    // Draw current typing line with cursor
    const currentLineText = codeLines[currentLineRef.current % codeLines.length].substring(0, currentCharRef.current);
    const y = startY + displayedLinesRef.current.length * lineHeight;
    highlightSyntax(ctx, currentLineText, startX, y);
    
    // Blinking cursor
    if (Math.floor(now / 500) % 2 === 0) {
      ctx.fillStyle = '#22d3ee';
      const cursorX = startX + ctx.measureText(currentLineText).width;
      ctx.fillRect(cursorX, y - 12, 8, 16);
    }
    
    texture.needsUpdate = true;
  });
  
  return (
    <mesh ref={meshRef} position={[0, 0, 0.1]}>
      <planeGeometry args={[2.5, 1.55]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const Terminal = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.08;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Monitor frame */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 2, 0.15]} />
          <meshStandardMaterial 
            color="#2a2a2a" 
            metalness={0.8} 
            roughness={0.2}
            envMapIntensity={1}
          />
        </mesh>
        {/* Screen bezel */}
        <mesh position={[0, 0, 0.08]}>
          <boxGeometry args={[2.8, 1.8, 0.02]} />
          <meshStandardMaterial 
            color="#1a1a1a" 
            metalness={0.5} 
            roughness={0.3}
          />
        </mesh>
        {/* Screen with live code */}
        <TerminalScreen />
        {/* Screen glow effect */}
        <pointLight position={[0, 0, 0.5]} intensity={0.3} color="#4a4a6a" distance={3} />
        {/* Stand neck */}
        <mesh position={[0, -1.2, 0]}>
          <boxGeometry args={[0.2, 0.5, 0.15]} />
          <meshStandardMaterial 
            color="#3a3a3a" 
            metalness={0.9} 
            roughness={0.1}
          />
        </mesh>
        {/* Stand base */}
        <mesh position={[0, -1.5, 0.1]}>
          <boxGeometry args={[1.4, 0.08, 0.8]} />
          <meshStandardMaterial 
            color="#3a3a3a" 
            metalness={0.9} 
            roughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
};

const OrbitingSphere = ({ radius, speed, offset, size = 0.15 }: { radius: number; speed: number; offset: number; size?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime * speed + offset;
      meshRef.current.position.x = Math.cos(t) * radius;
      meshRef.current.position.z = Math.sin(t) * radius;
      meshRef.current.position.y = Math.sin(t * 2) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
    </mesh>
  );
};

const ParticleField = () => {
  const count = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
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
      <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

const Scene = () => {
  return (
    <>
      {/* Enhanced Lighting for better visibility */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" castShadow />
      <directionalLight position={[-5, 3, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[0, 3, 3]} intensity={1} color="#ffffff" distance={10} />
      <pointLight position={[-1, -2, 2]} intensity={0.5} color="#aaaaaa" distance={8} />
      <spotLight 
        position={[0, 8, 4]} 
        angle={1.4} 
        penumbra={0.5} 
        intensity={1.5} 
        color="#ffffff"
        castShadow
      />

      {/* Main terminal/monitor */}
      <Terminal />

      {/* Code brackets floating around */}
      <CodeBracket position={[2.5, 1.5, -1]} scale={0.8} />
      <CodeBracket position={[-2.5, -0.5, -1]} scale={0.6} />
      <CodeBracket position={[2, -1.5, 0.5]} scale={0.5} />

      {/* Floating code lines */}
      <FloatingCode position={[-2.5, 1, 0]} scale={0.8} />
      <FloatingCode position={[2.8, 0, -0.5]} scale={0.6} />
      <FloatingCode position={[-2, -1.2, 1]} scale={0.5} />

      {/* Orbiting elements */}
      <OrbitingSphere radius={4} speed={0.3} offset={0} size={0.1} />
      <OrbitingSphere radius={4.5} speed={0.25} offset={Math.PI / 2} size={0.08} />
      <OrbitingSphere radius={3.5} speed={0.35} offset={Math.PI} size={0.12} />

      {/* Particle field */}
      <ParticleField />

      {/* Abstract geometric elements */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-3.5, 0.5, -2]}>
          <torusGeometry args={[0.3, 0.1, 16, 32]} />
          <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} wireframe />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[3.5, -0.5, -2]}>
          <octahedronGeometry args={[0.3]} />
          <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[0, 2.5, -1]}>
          <icosahedronGeometry args={[0.25]} />
          <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} wireframe />
        </mesh>
      </Float>
    </>
  );
};

export const ProgrammerScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};
