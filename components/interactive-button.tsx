"use client"

import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"
import { forwardRef, useRef, useEffect } from "react"

interface InteractiveButtonProps extends ButtonProps {
  shadowVariant?: "primary" | "outline" | "white"
}

const InteractiveButton = forwardRef<HTMLButtonElement, InteractiveButtonProps>(
  ({ className = "", shadowVariant = "primary", children, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null)

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

    const shadowClass = `button-shadow-${shadowVariant}`

    return (
      <Button ref={buttonRef} className={`button-shadow-effect ${shadowClass} ${className}`} {...props}>
        {children}
      </Button>
    )
  },
)

InteractiveButton.displayName = "InteractiveButton"

export default InteractiveButton
