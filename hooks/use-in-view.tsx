"use client"

import { useEffect, useRef, useState } from "react"

export function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1, ...options },
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options])

  return ref
}
