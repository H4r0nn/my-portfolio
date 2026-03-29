'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

// Частицы фона (ОЧЕНЬ МЕДЛЕННО)
function ParticleField({ scrollY }) {
  const ref = useRef()
  
  const sphere = useMemo(() => {
    const count = 5000
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 1.5 * Math.cbrt(Math.random())
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [])

  useFrame((state, delta) => {
    if (!ref.current) return
    // ✅ МЕДЛЕННОЕ вращение (было delta / 10, стало delta / 50)
    ref.current.rotation.x -= delta / 50
    ref.current.rotation.y -= delta / 60
    const time = state.clock.elapsedTime
    const scale = 1 + Math.sin(time * 0.3) * 0.05
    ref.current.scale.set(scale, scale, scale)
    // ✅ МЕДЛЕННАЯ реакция на скролл
    ref.current.rotation.z = scrollY * 0.0001
    ref.current.position.y = -scrollY * 0.00005
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]} position={[0, 0, 0.5]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#94a3b8"
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  )
}

// 3D Текст HARON из частиц (ОЧЕНЬ МЕДЛЕННО)
function ParticleText({ scrollY }) {
  const ref = useRef()
  
  const particles = useMemo(() => {
    const positions = []
    const colors = []
    const letters = 5
    const particlesPerLetter = 400
    
    for (let l = 0; l < letters; l++) {
      const letterX = (l - 2) * 0.8
      
      for (let i = 0; i < particlesPerLetter; i++) {
        const x = letterX + (Math.random() - 0.5) * 0.6
        const y = (Math.random() - 0.5) * 0.9
        const z = (Math.random() - 0.5) * 0.2
        
        if (l === 1 && Math.abs(x - letterX) < 0.18 && y > 0.1) continue
        if (l === 3 && Math.abs(x - letterX) < 0.2 && Math.abs(y) < 0.3) continue
        
        positions.push(x, y, z)
        
        colors.push(
          0.5 + Math.random() * 0.3,
          0.4 + Math.random() * 0.2,
          0.9 + Math.random() * 0.1
        )
      }
    }
    
    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
      count: positions.length / 3
    }
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    // ✅ МЕДЛЕННОЕ вращение от скролла
    ref.current.rotation.y = scrollY * 0.00005
    ref.current.rotation.x = Math.sin(scrollY * 0.00003) * 0.05
    const time = state.clock.elapsedTime
    // ✅ МЕДЛЕННАЯ пульсация
    const scale = 1 + Math.sin(time * 0.5) * 0.02
    ref.current.scale.set(scale, scale, scale)
    const targetOpacity = 0.9
    ref.current.material.opacity += (targetOpacity - ref.current.material.opacity) * 0.02
  })

  return (
    <group position={[0, 0, 0]}>
      <Points ref={ref} stride={3}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.count}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particles.count}
            array={particles.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          vertexColors
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
      <pointLight position={[0, 0, 2]} intensity={3} color="#6366f1" />
    </group>
  )
}

// 🪐 Кольца Сатурна из частиц (ОЧЕНЬ МЕДЛЕННО)
function GlowingRings({ scrollY }) {
  const ref = useRef()
  
  const rings = useMemo(() => {
    const positions = []
    const colors = []
    
    const ringConfigs = [
      { radius: 1.8, particles: 800, color: [0.4, 0.4, 1.0] },
      { radius: 2.3, particles: 1000, color: [0.5, 0.3, 1.0] },
      { radius: 2.9, particles: 1200, color: [0.6, 0.3, 1.0] },
    ]
    
    ringConfigs.forEach((ring) => {
      for (let i = 0; i < ring.particles; i++) {
        const angle = Math.random() * 2 * Math.PI
        const radiusVariation = (Math.random() - 0.5) * 0.15
        const radius = ring.radius + radiusVariation
        
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const z = (Math.random() - 0.5) * 0.05
        
        positions.push(x, y, z)
        
        const colorVar = Math.random() * 0.2
        colors.push(
          ring.color[0] + colorVar,
          ring.color[1] + colorVar,
          ring.color[2]
        )
      }
    })
    
    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
      count: positions.length / 3
    }
  }, [])

  useFrame((state, delta) => {
    if (!ref.current) return
    
    // ✅ ОЧЕНЬ МЕДЛЕННОЕ вращение (было delta * 0.05, стало delta * 0.01)
    ref.current.rotation.z += delta * 0.01
    
    // ✅ МЕДЛЕННАЯ реакция на скролл
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      scrollY * 0.00005,
      0.02
    )
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      scrollY * 0.00005,
      0.02
    )
    
    // ✅ МЕДЛЕННАЯ пульсация
    const time = state.clock.elapsedTime
    ref.current.scale.setScalar(1 + Math.sin(time * 0.3) * 0.02)
  })

  return (
    <group ref={ref} position={[0, 0, 0]} rotation={[Math.PI / 2.5, 0, 0]}>
      <Points stride={3}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={rings.count}
            array={rings.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={rings.count}
            array={rings.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          vertexColors
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={1}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <pointLight position={[0, 0, 1]} intensity={2} color="#8b5cf6" />
    </group>
  )
}

// Плавающие кристаллы (ОЧЕНЬ МЕДЛЕННО)
function FloatingCrystals({ scrollY }) {
  const crystals = useMemo(() => 
    Array.from({ length: 5 }, () => ({
      position: [(Math.random() - 0.5) * 5, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 2],
      scale: 0.3 + Math.random() * 0.4,
      speed: 0.1 + Math.random() * 0.1,
      color: ['#6366f1', '#8b5cf6', '#a855f7', '#c084fc', '#e879f9'][Math.floor(Math.random() * 5)]
    })), []
  )

  return (
    <>
      {crystals.map((c, i) => (
        <Crystal key={i} {...c} scrollY={scrollY} />
      ))}
    </>
  )
}

function Crystal({ position, scale, speed, color, scrollY }) {
  const ref = useRef()
  useFrame((state, delta) => {
    if (!ref.current) return
    // ✅ МЕДЛЕННОЕ вращение
    ref.current.rotation.x += delta * speed * 0.2
    ref.current.rotation.y += delta * speed * 0.25
    ref.current.rotation.z = scrollY * 0.00005
    const time = state.clock.elapsedTime
    // ✅ МЕДЛЕННОЕ парение
    ref.current.position.y = position[1] + Math.sin(time * speed) * 0.1
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} wireframe transparent opacity={0.5} />
    </mesh>
  )
}

// 🖱️ Шлейф от мыши
function MouseTrail() {
  const { pointer } = useThree()
  const ref = useRef()
  const positions = useMemo(() => new Float32Array(40 * 3), [])
  
  useFrame(() => {
    if (!ref.current) return
    for (let i = 39; i > 0; i--) {
      positions[i * 3] = positions[(i - 1) * 3]
      positions[i * 3 + 1] = positions[(i - 1) * 3 + 1]
      positions[i * 3 + 2] = positions[(i - 1) * 3 + 2]
    }
    positions[0] = pointer.x * 2.5
    positions[1] = pointer.y * 2.5
    positions[2] = -1
    ref.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  })

  return (
    <Points ref={ref} stride={3}>
      <PointMaterial 
        transparent 
        color="#6366f1" 
        size={0.03} 
        sizeAttenuation={true} 
        depthWrite={false} 
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

// Главный экспорт
export default function ThreeBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 2], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <ParticleField scrollY={scrollY} />
        <ParticleText scrollY={scrollY} />
        <GlowingRings scrollY={scrollY} />
        <FloatingCrystals scrollY={scrollY} />
        <MouseTrail />
        
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} intensity={2} radius={0.7} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}