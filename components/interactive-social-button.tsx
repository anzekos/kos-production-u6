"use client"

import Link from "next/link"
import { forwardRef, useRef, useEffect, type ReactNode } from "react"

interface InteractiveSocialButtonProps {
  href: string
  children: ReactNode
  className?: string
  hoverColor?: string
}

const InteractiveSocialButton = forwardRef<HTMLAnchorElement, InteractiveSocialButtonProps>(
  ({ href, children, className = "", hoverColor = "hover:bg-purple-600" }, ref) => {
    const buttonRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
      const button = buttonRef.current
      if (!button) return

      const handleMouseMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100

        button.style.setProperty("--mouse-x", `${x}%`)
        button.style.setProperty("--mouse-y", `${y}%`)
      }

      button.addEventListener("mousemove", handleMouseMove)

      return () => {
        button.removeEventListener("mousemove", handleMouseMove)
      }
    }, [])

    return (
      <Link
        ref={buttonRef}
        href={href}
        className={`social-button-effect bg-gray-800 p-3 rounded-lg ${hoverColor} transition-colors ${className}`}
      >
        {children}
      </Link>
    )
  },
)

InteractiveSocialButton.displayName = "InteractiveSocialButton"

export default InteractiveSocialButton
