"use client"

import { useEffect, useState } from "react"

interface SingleTextTypingProps {
  text: string
  startDelay?: number
  speed?: number
}

export default function SingleTextTyping({ text, startDelay = 0, speed = 50 }: SingleTextTypingProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Wait for startDelay before beginning animation
    const delayTimer = setTimeout(() => {
      setIsAnimating(true)
    }, startDelay)

    return () => clearTimeout(delayTimer)
  }, [startDelay])

  useEffect(() => {
    if (!isAnimating || displayedText.length >= text.length) {
      return
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + text[prev.length])
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayedText, text, speed, isAnimating])

  return <span>{displayedText}</span>
}
