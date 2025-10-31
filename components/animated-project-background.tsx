"use client"

import { useEffect, useRef } from "react"

export default function AnimatedProjectBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create stars
    interface Star {
      x: number
      y: number
      radius: number
      opacity: number
      speed?: number
      angle?: number
      isShootingStar?: boolean
      trailLength?: number
    }

    const stars: Star[] = []
    const shootingStars: Star[] = []

    // Create blinking stars
    for (let i = 0; i < 40; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.5 + 0.5,
      })
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update blinking stars
      stars.forEach((star) => {
        // Blinking effect
        star.opacity += (Math.random() - 0.5) * 0.1
        star.opacity = Math.max(0.2, Math.min(1, star.opacity))

        // Draw star with cyan glow
        ctx.fillStyle = `rgba(34, 211, 238, ${star.opacity})`
        ctx.shadowBlur = 10
        ctx.shadowColor = "rgba(34, 211, 238, 0.6)"
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Randomly spawn shooting stars
      if (Math.random() < 0.02 && shootingStars.length < 3) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height * 0.3),
          radius: 2,
          opacity: 1,
          speed: Math.random() * 4 + 3,
          angle: Math.PI / 4,
          isShootingStar: true,
          trailLength: 40,
        })
      }

      // Draw and update shooting stars
      shootingStars.forEach((star, idx) => {
        if (star.x && star.y && star.speed && star.angle && star.trailLength) {
          // Draw tail/trail
          const trailX = star.x - Math.cos(star.angle) * star.trailLength
          const trailY = star.y - Math.sin(star.angle) * star.trailLength

          const gradient = ctx.createLinearGradient(star.x, star.y, trailX, trailY)
          gradient.addColorStop(0, `rgba(34, 211, 238, ${star.opacity})`)
          gradient.addColorStop(1, `rgba(34, 211, 238, 0)`)

          ctx.strokeStyle = gradient
          ctx.lineWidth = 2
          ctx.lineCap = "round"
          ctx.shadowBlur = 15
          ctx.shadowColor = "rgba(34, 211, 238, 0.8)"
          ctx.beginPath()
          ctx.moveTo(trailX, trailY)
          ctx.lineTo(star.x, star.y)
          ctx.stroke()

          // Draw bright head
          ctx.fillStyle = `rgba(34, 211, 238, ${star.opacity})`
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
          ctx.fill()

          // Update position
          star.x += Math.cos(star.angle) * star.speed
          star.y += Math.sin(star.angle) * star.speed
          star.opacity -= 0.02

          // Remove if off screen or faded
          if (star.opacity <= 0 || star.x > canvas.width || star.y > canvas.height) {
            shootingStars.splice(idx, 1)
          }
        }
      })

      // Draw ambient blue light pulses
      const time = Date.now() * 0.001
      const pulseIntensity = Math.sin(time) * 0.3 + 0.5

      ctx.fillStyle = `rgba(34, 211, 238, ${pulseIntensity * 0.08})`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Reset shadow
      ctx.shadowBlur = 0

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "transparent" }} />
}
