"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  blinkSpeed: number
  blinkPhase: number
}

interface ShootingStar {
  x: number
  y: number
  length: number
  speed: number
  angle: number
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create stars
    const stars: Star[] = []
    const starCount = 200
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.5 + 0.3,
        blinkSpeed: Math.random() * 0.03 + 0.01,
        blinkPhase: Math.random() * Math.PI * 2,
      })
    }

    // Create shooting stars
    const shootingStars: ShootingStar[] = []

    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height * 0.6),
        length: Math.random() * 100 + 50,
        speed: Math.random() * 4 + 3,
        angle: Math.random() * 0.5 + 0.3,
      })
    }

    // Initial shooting stars
    for (let i = 0; i < 3; i++) {
      createShootingStar()
    }

    let frameCount = 0
    const animate = () => {
      // Clear canvas with slight trail effect
      ctx.fillStyle = "rgba(15, 23, 42, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw blinking stars
      stars.forEach((star) => {
        star.blinkPhase += star.blinkSpeed
        const blinkOpacity = star.opacity * (Math.sin(star.blinkPhase) * 0.5 + 0.7)

        ctx.fillStyle = `rgba(100, 200, 255, ${blinkOpacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()

        // Add glow
        ctx.strokeStyle = `rgba(100, 200, 255, ${blinkOpacity * 0.5})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius + 1.5, 0, Math.PI * 2)
        ctx.stroke()
      })

      // Draw and animate shooting stars
      shootingStars.forEach((star, index) => {
        star.x += star.speed * Math.cos(star.angle)
        star.y += star.speed * Math.sin(star.angle)

        // Draw shooting star trail
        const gradient = ctx.createLinearGradient(
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length,
          star.x,
          star.y,
        )
        gradient.addColorStop(0, "rgba(100, 200, 255, 0)")
        gradient.addColorStop(0.5, "rgba(150, 220, 255, 0.3)")
        gradient.addColorStop(1, "rgba(200, 240, 255, 0.8)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(star.x - Math.cos(star.angle) * star.length, star.y - Math.sin(star.angle) * star.length)
        ctx.lineTo(star.x, star.y)
        ctx.stroke()

        // Remove if off screen
        if (star.x > canvas.width + 100 || star.y > canvas.height + 100) {
          shootingStars.splice(index, 1)
        }
      })

      // Spawn new shooting stars occasionally
      frameCount++
      if (frameCount % 120 === 0 && shootingStars.length < 5) {
        createShootingStar()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ backgroundColor: "transparent" }}
    />
  )
}
