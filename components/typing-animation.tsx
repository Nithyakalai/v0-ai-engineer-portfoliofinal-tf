"use client"

import { useEffect, useState } from "react"

interface TypingAnimationProps {
  texts: string[]
  delay?: number
  className?: string
}

export default function TypingAnimation({ texts, delay = 100, className = "" }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  useEffect(() => {
    if (currentTextIndex >= texts.length) {
      return
    }

    const currentText = texts[currentTextIndex]

    if (currentCharIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[currentCharIndex])
        setCurrentCharIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else if (currentTextIndex < texts.length - 1) {
      // Move to next text after a pause
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + " | ")
        setCurrentTextIndex((prev) => prev + 1)
        setCurrentCharIndex(0)
      }, 800)

      return () => clearTimeout(timeout)
    }
  }, [currentCharIndex, currentTextIndex, texts, delay])

  return <span className={className}>{displayedText}</span>
}
