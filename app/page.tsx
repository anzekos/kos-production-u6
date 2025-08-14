"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Music,
  Film,
  Headphones,
  Users,
  Play,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Star,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import RotatingImages from "@/components/rotating-images"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

// Import the new components at the top:
import InteractiveButton from "@/components/interactive-button"
import InteractiveSocialButton from "@/components/interactive-social-button"

export default function KosProductionWebsite() {
  // Add scroll animation hooks at the beginning of the component function
  const { ref: aboutTitleRef, isVisible: aboutTitleVisible } = useScrollAnimation()
  const { ref: aboutContentRef, isVisible: aboutContentVisible } = useScrollAnimation()
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation()
  const { ref: portfolioRef, isVisible: portfolioVisible } = useScrollAnimation()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleListen = (youtubeUrl: string) => {
    window.open(youtubeUrl, "_blank")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          projectType: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Kos Production
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="hover:text-purple-400 transition-colors">
                Home
              </Link>
              <Link href="#about" className="hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="#services" className="hover:text-purple-400 transition-colors">
                Services
              </Link>
              <Link href="#portfolio" className="hover:text-purple-400 transition-colors">
                Portfolio
              </Link>
              <Link href="#contact" className="hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </div>
            <Link href="#contact">
              <InteractiveButton
                shadowVariant="primary"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Get Started
              </InteractiveButton>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-green-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-600/10 rounded-full blur-3xl animate-pulse delay-1300"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-title-glow">
              Kos Production
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
              Crafting authentic soundscapes for film, artists & brands
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="#portfolio">
              <InteractiveButton
                size="lg"
                shadowVariant="primary"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3"
              >
                <Play className="mr-2 h-5 w-5" />
                Listen to Our Work
              </InteractiveButton>
            </Link>
            <Link href="#contact">
              <InteractiveButton
                size="lg"
                variant="outline"
                shadowVariant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black text-lg px-8 py-3 bg-transparent"
              >
                Start Your Project
              </InteractiveButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">50+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">20+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 animate-fade-in-up ${aboutTitleVisible ? "in-view" : ""}`}
            ref={aboutTitleRef}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Kos Production
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              We are a cutting-edge music production studio specializing in creating immersive audio experiences. From
              cinematic scores to chart-topping hits, we bring your creative vision to life with precision and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`animate-scale-in stagger-1 ${aboutContentVisible ? "in-view" : ""}`} ref={aboutContentRef}>
              <RotatingImages />
            </div>
            <div className="space-y-6">
              <div
                className={`flex items-start space-x-4 animate-scale-in stagger-2 ${aboutContentVisible ? "in-view" : ""}`}
              >
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Global Clients</h3>
                  <p className="text-gray-400">
                    Working with artists, filmmakers, and brands from around the world to create exceptional audio
                    experiences.
                  </p>
                </div>
              </div>
              <div
                className={`flex items-start space-x-4 animate-scale-in stagger-3 ${aboutContentVisible ? "in-view" : ""}`}
              >
                <div className="bg-pink-600 p-3 rounded-lg">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Cutting-Edge Technology</h3>
                  <p className="text-gray-400">
                    State-of-the-art equipment and software to deliver pristine audio quality.
                  </p>
                </div>
              </div>
              <div
                className={`flex items-start space-x-4 animate-scale-in stagger-4 ${aboutContentVisible ? "in-view" : ""}`}
              >
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Music className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Guitar Specialists</h3>
                  <p className="text-gray-400">
                    Expert guitar recording, production, and arrangement services with access to vintage and modern
                    instruments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 animate-fade-in-up ${servicesVisible ? "in-view" : ""}`} ref={servicesRef}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From concept to completion, we offer comprehensive music production services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className={`bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 animate-scale-in stagger-1 ${servicesVisible ? "in-view" : ""}`}
            >
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-4 rounded-lg w-fit mb-4">
                  <Film className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-300">Film Scoring</h3>
                <p className="text-gray-400 mb-4">
                  Cinematic compositions that enhance storytelling and create emotional depth for your visual projects.
                </p>
                <Badge variant="secondary" className="bg-purple-900 text-purple-200">
                  From $2,500
                </Badge>
              </CardContent>
            </Card>

            <Card
              className={`bg-gray-900 border-gray-800 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105 animate-scale-in stagger-2 ${servicesVisible ? "in-view" : ""}`}
            >
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-pink-600 to-pink-800 p-4 rounded-lg w-fit mb-4">
                  <Music className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-300">Artist Production</h3>
                <p className="text-gray-400 mb-4">
                  Full-service music production for artists, from songwriting to final mastering and distribution.
                </p>
                <Badge variant="secondary" className="bg-pink-900 text-pink-200">
                  From $1,800
                </Badge>
              </CardContent>
            </Card>

            <Card
              className={`bg-gray-900 border-gray-800 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 animate-scale-in stagger-3 ${servicesVisible ? "in-view" : ""}`}
            >
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-lg w-fit mb-4">
                  <Headphones className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-300">Mixing & Mastering</h3>
                <p className="text-gray-400 mb-4">
                  Professional mixing and mastering services to give your tracks that polished, radio-ready sound.
                </p>
                <Badge variant="secondary" className="bg-blue-900 text-blue-200">
                  From $500
                </Badge>
              </CardContent>
            </Card>

            <Card
              className={`bg-gray-900 border-gray-800 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 animate-scale-in stagger-4 ${servicesVisible ? "in-view" : ""}`}
            >
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-green-600 to-green-800 p-4 rounded-lg w-fit mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-300">Sound Design</h3>
                <p className="text-gray-400 mb-4">
                  Custom sound effects and audio branding for games, apps, and multimedia projects.
                </p>
                <Badge variant="secondary" className="bg-green-900 text-green-200">
                  From $800
                </Badge>
              </CardContent>
            </Card>

            <Card
              className={`bg-gray-900 border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105 animate-scale-in stagger-5 ${servicesVisible ? "in-view" : ""}`}
            >
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 p-4 rounded-lg w-fit mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-300">Brand Audio</h3>
                <p className="text-gray-400 mb-4">
                  Sonic branding and commercial music production to elevate your brand's audio identity.
                </p>
                <Badge variant="secondary" className="bg-yellow-900 text-yellow-200">
                  From $1,200
                </Badge>
              </CardContent>
            </Card>

            <Card
              className={`bg-gray-900 border-gray-800 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105 animate-scale-in stagger-6 ${servicesVisible ? "in-view" : ""}`}
            >
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-red-600 to-red-800 p-4 rounded-lg w-fit mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-300">Live Recording</h3>
                <p className="text-gray-400 mb-4">
                  Professional live recording sessions with top-tier equipment and acoustically treated spaces.
                </p>
                <Badge variant="secondary" className="bg-red-900 text-red-200">
                  From $300/hour
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 animate-fade-in-up ${portfolioVisible ? "in-view" : ""}`}
            ref={portfolioRef}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Work
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore some of our recent projects and hear the quality that sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Red Qua",
                type: "Mastering",
                image: "/images/redqua-album.jpg",
                description: "Completed the full mastering process for the entire album",
                youtubeUrl:
                  "https://www.youtube.com/watch?v=siTSf9bJydQ&list=OLAK5uy_lXp4D1tsBu8ZtIeaWg-M8ifUI4Afsj-r0&index=2&ab_channel=Release-Topic",
              },
              {
                title: "Che Ratta",
                type: "Recording",
                image: "/images/cheratta-album.jpg",
                description: "Created the full arrangement and recorded all guitar parts for the album",
                youtubeUrl:
                  "https://www.youtube.com/watch?v=VZ_gP-OW9Ps&list=PLT0tRtwEFAXmnsGl7Sz-Pwjyc0LQRiFax&ab_channel=SOPHY-Topic",
              },
              {
                title: "Mohito",
                type: "Production",
                image: "/images/mohito-album.jpg",
                description: "Handled the entire music production — from arrangement and recording of all instruments",
                youtubeUrl: "https://www.youtube.com/watch?v=YBU-zscRe3U&ab_channel=GalMacedoni",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className={`bg-gray-900 border-gray-800 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group animate-scale-in stagger-${(index % 6) + 1} ${portfolioVisible ? "in-view" : ""}`}
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="bg-white text-black hover:bg-gray-200"
                      onClick={() => handleListen(project.youtubeUrl)}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Listen
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-slate-300">{project.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Create Together
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to bring your musical vision to life? Get in touch and let's discuss your next project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-slate-300">Send us a message</h3>
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-200">
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
                      Failed to send message. Please try again or email us directly.
                    </div>
                  )}
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">First Name</label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="bg-gray-800 border-gray-700"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Last Name</label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="bg-gray-800 border-gray-700"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-700"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Project Type</label>
                      <Input
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-700"
                        placeholder="Film Score, Artist Production, etc."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-700 min-h-[120px]"
                        placeholder="Tell us about your project..."
                        required
                      />
                    </div>
                    <InteractiveButton
                      type="submit"
                      disabled={isSubmitting}
                      shadowVariant="primary"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </InteractiveButton>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-600 p-3 rounded-lg">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-gray-400">anzekos11@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-pink-600 p-3 rounded-lg">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-gray-400">+386 070 163 888 </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Studio</div>
                      <div className="text-gray-400">Ljubljana, SLOVENIA </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Follow us</h4>
                <div className="flex space-x-4">
                  <InteractiveSocialButton
                    href="https://www.instagram.com/kos_production/"
                    hoverColor="hover:bg-purple-600"
                  >
                    <Instagram className="h-5 w-5" />
                  </InteractiveSocialButton>
                  <InteractiveSocialButton
                    href="https://www.facebook.com/profile.php?id=61551945760210&locale=sl_SI"
                    hoverColor="hover:bg-blue-600"
                  >
                    <Facebook className="h-5 w-5" />
                  </InteractiveSocialButton>
                  <InteractiveSocialButton
                    href="https://www.youtube.com/@BackInTrackJams"
                    hoverColor="hover:bg-red-600"
                  >
                    <Youtube className="h-5 w-5" />
                  </InteractiveSocialButton>
                  <InteractiveSocialButton
                    href="https://www.linkedin.com/in/an%C5%BEe-kos-58357725b/"
                    hoverColor="hover:bg-blue-700"
                  >
                    <Linkedin className="h-5 w-5" />
                  </InteractiveSocialButton>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/50">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Ready to start?</h4>
                  <p className="text-gray-300 mb-4">
                    Book a free consultation call to discuss your project and get a custom quote.
                  </p>
                  <InteractiveButton
                    shadowVariant="white"
                    className="w-full bg-white text-black hover:bg-gray-200"
                    onClick={() =>
                      window.open(
                        "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3eWPlj1eib9ADmRiEYCh_Jgq4WQHX241TZpsnuF1OduZ_-j98pX4FophjoRMRNpPWTWiIUKLiw",
                        "_blank",
                      )
                    }
                  >
                    Book Free Consultation
                  </InteractiveButton>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">FAQ</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="services"
                className="bg-gray-900/50 border border-gray-800 rounded-lg px-6 data-[state=open]:border-purple-500/50"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-purple-400 hover:no-underline py-6">
                  What services offered?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6">
                  We offer comprehensive music production services including film scoring, artist production, mixing &
                  mastering, sound design, brand audio, and live recording. Each service is tailored to meet your
                  specific creative and technical requirements, ensuring professional results that exceed industry
                  standards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="demo"
                className="bg-gray-900/50 border border-gray-800 rounded-lg px-6 data-[state=open]:border-purple-500/50"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-purple-400 hover:no-underline py-6">
                  How submit demo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6">
                  You can submit your demo through our contact form above, or send it directly to anzekos11@gmail.com.
                  We accept MP3, WAV, and other common audio formats. Please include a brief description of your
                  project, your goals, and any specific requirements. We typically respond within 24-48 hours with
                  feedback and next steps.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="pricing"
                className="bg-gray-900/50 border border-gray-800 rounded-lg px-6 data-[state=open]:border-purple-500/50"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-purple-400 hover:no-underline py-6">
                  Pricing packages available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6">
                  Yes, we offer flexible pricing packages for different project types and budgets. Our services range
                  from $100 for mixing &amp; mastering to $500+ for full film scoring projects. We also offer package
                  deals for multi-track albums, EP production, and ongoing brand audio needs. Contact us for a custom
                  quote based on your specific requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="remote"
                className="bg-gray-900/50 border border-gray-800 rounded-lg px-6 data-[state=open]:border-purple-500/50"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-purple-400 hover:no-underline py-6">
                  Remote sessions work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6">
                  We work with clients worldwide through remote collaboration. We use high-quality audio streaming, file
                  sharing platforms, and video conferencing to ensure seamless communication throughout the production
                  process. You can participate in real-time during mixing sessions, provide feedback, and approve
                  changes from anywhere in the world.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Kos Production
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Crafting authentic soundscapes for film, artists & brands. Your vision, our expertise, unforgettable
                results.
              </p>
              <div className="flex space-x-4">
                <InteractiveSocialButton
                  href="https://www.instagram.com/kos_production/"
                  hoverColor="hover:text-purple-400"
                  className="text-gray-400 bg-transparent p-0"
                >
                  <Instagram className="h-5 w-5" />
                </InteractiveSocialButton>
                <InteractiveSocialButton
                  href="https://www.facebook.com/profile.php?id=61551945760210&locale=sl_SI"
                  hoverColor="hover:text-blue-400"
                  className="text-gray-400 bg-transparent p-0"
                >
                  <Facebook className="h-5 w-5" />
                </InteractiveSocialButton>
                <InteractiveSocialButton
                  href="https://www.youtube.com/@BackInTrackJams"
                  hoverColor="hover:text-red-400"
                  className="text-gray-400 bg-transparent p-0"
                >
                  <Youtube className="h-5 w-5" />
                </InteractiveSocialButton>
                <InteractiveSocialButton
                  href="https://www.linkedin.com/in/an%C5%BEe-kos-58357725b/"
                  hoverColor="hover:text-blue-600"
                  className="text-gray-400 bg-transparent p-0"
                >
                  <Linkedin className="h-5 w-5" />
                </InteractiveSocialButton>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Film Scoring
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Artist Production
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Mixing & Mastering
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sound Design
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Kos Production. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
