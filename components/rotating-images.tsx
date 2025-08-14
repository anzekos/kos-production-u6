"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  {
    src: "/images/studio1.jpg",
    alt: "Kos Production Studio - Recording Session",
  },
  {
    src: "/images/studio3.jpg",
    alt: "Kos Production Studio - Guitar Recording",
  },
  {
    src: "/images/studio2.jpg",
    alt: "Kos Production Studio - Production Setup",
  },
]

export default function RotatingImages() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-md h-[300px] mx-auto overflow-hidden rounded-2xl shadow-2xl">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          width={600}
          height={400}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  )
}
