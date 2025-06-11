"use client"

import { useEffect, useRef, useState } from "react"

export function InteractiveAIModel() {
  const modelRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (modelRef.current) {
        const rect = modelRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const deltaX = (e.clientX - centerX) / 10
        const deltaY = (e.clientY - centerY) / 10

        setMousePosition({ x: deltaX, y: deltaY })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="flex justify-center items-center py-16">
      <div
        ref={modelRef}
        className="relative w-64 h-64 perspective-1000"
        style={{
          transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* AI Text with 3D effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="text-8xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 bg-clip-text transform-gpu"
            style={{
              textShadow: "0 0 30px rgba(250, 204, 21, 0.5)",
              transform: `translateZ(50px)`,
            }}
          >
            AI
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
            style={{
              top: `${20 + i * 10}%`,
              left: `${15 + i * 8}%`,
              transform: `translateZ(${20 + i * 10}px) rotateY(${i * 45}deg)`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}

        {/* Orbiting rings */}
        <div
          className="absolute inset-0 border-2 border-yellow-400/30 rounded-full animate-spin"
          style={{
            transform: `rotateX(60deg) translateZ(30px)`,
            animationDuration: "10s",
          }}
        />
        <div
          className="absolute inset-4 border-2 border-purple-500/30 rounded-full animate-spin"
          style={{
            transform: `rotateY(60deg) translateZ(20px)`,
            animationDuration: "8s",
            animationDirection: "reverse",
          }}
        />
        <div
          className="absolute inset-8 border-2 border-blue-500/30 rounded-full animate-spin"
          style={{
            transform: `rotateX(-60deg) translateZ(10px)`,
            animationDuration: "12s",
          }}
        />
      </div>
    </div>
  )
}
