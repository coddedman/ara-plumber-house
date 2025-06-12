"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Phone, Mail, MapPin, ChevronRight, ArrowRight, Bath, Wrench, Palette } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HeroAnimation from "@/components/hero-animation"
import CommonSlider from "@/components/ui/CommonSlider"
import Header from "@/components/ui/Header"
// import pic from "../public/images/Logo.png"
// Sample featured products data (Jaquar-inspired)
const featuredProducts = [
  {
    id: 1,
    name: "Ornamix Basin Mixer",
    description: "Premium basin mixer with quarter-turn technology",
    image: "/images/basinmixer.jpeg?height=300&width=300",
    color: "from-purple-600 to-blue-500",
  },
  {
    id: 2,
    name: "Florence Shower System",
    description: "Luxury shower setup with rainfall and handheld options",
    image: "/images/shower.jpg?height=300&width=300",
    color: "from-teal-600 to-emerald-500",
  },
  {
    id: 3,
    name: "Sleek Chrome Faucet",
    description: "Designer faucet with a sleek chrome finish",
    image: "/images/faucet.jpeg?height=300&width=300",
    color: "from-amber-500 to-pink-500",
  },
  {
    id: 4,
    name: "Square Bathroom Accessories",
    description: "Modern square design for a coordinated bathroom look",
    image: "/images/squarebathroom.jpeg?height=300&width=300",
    color: "from-blue-600 to-indigo-500",
  },
]

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Homeowner",
    content:
      "Ara Plumber House provided excellent service when renovating our bathroom. They helped us select the perfect Jaquar fittings that matched our style and budget. Highly recommended!",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    color: "from-purple-600 to-blue-500",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Interior Designer",
    content:
      "As an interior designer, I regularly work with Ara Plumber House for my clients' bathroom projects. Their collection of premium fittings and professional advice make them my go-to partner.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    color: "from-teal-600 to-emerald-500",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Property Developer",
    content:
      "We've been sourcing all our bathroom fittings from Ara Plumber House for our residential projects. Their quality products and reliable service have never disappointed us.",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    color: "from-amber-500 to-pink-500",
  },
]
const coverImages = [
  '/images/slider_image_1.jpg',
  '/images/slider_image_2.jpg',
  '/images/slider_image_3.jpg',
  '/images/slider_image_4.jpg',
];

// Sample gallery categories and items
const categories = [
  { id: "all", name: "All Products" },
  { id: "faucets", name: "Faucets & Taps" },
  { id: "showers", name: "Shower Systems" },
  { id: "sanitaryware", name: "Sanitaryware" },
  { id: "accessories", name: "Bathroom Accessories" },
]

const galleryItems = [
  {
    id: 1,
    name: "Ornamix Basin Mixer",
    category: "faucets",
    image: "/images/basinmixer.jpeg?height=300&width=300",

    color: "from-purple-600 to-blue-500",
  },
  {
    id: 2,
    name: "Florence Shower System",
    category: "showers",
    image: "/images/showersystem.jpg?height=300&width=300",

    color: "from-teal-600 to-emerald-500",
  },
  {
    id: 3,
    name: "Wall-Mounted Toilet",
    category: "sanitaryware",
    image: "/images/sanitary.jpg?height=400&width=400",
    color: "from-amber-500 to-pink-500",
  },
  {
    id: 4,
    name: "Square Towel Ring",
    category: "accessories",
    image: "/images/towelring.jpg?height=300&width=300",

    color: "from-blue-600 to-indigo-500",
  },
  {
    id: 5,
    name: "Sleek Shower Mixer",
    category: "faucets",
    image: "/images/showermixer.jpg?height=400&width=400",
    color: "from-purple-600 to-blue-500",
  },
  {
    id: 6,
    name: "Rainfall Shower Head",
    category: "showers",
    image: "/images/shower.jpg?height=300&width=300",

    color: "from-teal-600 to-emerald-500",
  },
  {
    id: 7,
    name: "Wall-Hung Basin",
    category: "sanitaryware",
    image: "/images/wallhungbasin.jpg?height=400&width=400",
    color: "from-amber-500 to-pink-500",
  },
  {
    id: 8,
    name: "Soap Dispenser",
    category: "accessories",
    image: "/images/soapdispenser.jpg?height=400&width=400",
    color: "from-blue-600 to-indigo-500",
  },
]


export default function Home() {
  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Handle hash links on page load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-purple-50">
    <Header/>
      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-800 to-teal-700 opacity-90"></div>
          <div className="absolute inset-0">
            <HeroAnimation />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block animate-bounce bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-medium mb-2">
                  Premium Quality ✨
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-teal-100 drop-shadow-lg animate-pulse">
                  Luxury Bathroom Fittings & Plumbing Solutions
                </h1>
                <p className="md:text-xl text-white/90 backdrop-blur-sm bg-black/10 p-4 rounded-lg shadow-inner">
                  Transform your bathroom into a masterpiece with Ara Plumber House's premium collection of designer
                  fittings and expert plumbing services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="#gallery"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("gallery")
                    }}
                  >
                    <Button
                      size="lg"
                      className="group relative overflow-hidden bg-white text-purple-900 hover:text-purple-800 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <span className="absolute inset-0 w-0 bg-gradient-to-r from-purple-100 to-teal-100 transition-all duration-[400ms] ease-out group-hover:w-full"></span>
                      <span className="relative flex items-center">
                        Explore Gallery
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("contact")
                    }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="backdrop-blur-md bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50 shadow-lg transition-all duration-300"
                    >
                      Contact Us
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative">
                <CommonSlider images={coverImages} />
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-purple-600 to-blue-500 p-3 rounded-full shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 animate-spin-slow"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full h-auto"
              preserveAspectRatio="none"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-flex items-center justify-center p-1 mb-4 bg-purple-100 rounded-full">
                <div className="px-3 py-1 text-sm font-medium text-purple-800 rounded-full bg-white">Our Services</div>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                  Elevate Your Space
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  We provide a range of premium services to transform your bathroom into a sanctuary
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 opacity-90 transition-all duration-500 group-hover:opacity-100"></div>
                <div className="relative p-6 flex flex-col items-center text-center space-y-4 text-white h-full">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Bath className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Luxury Bathroom Fittings</h3>
                  <p className="text-white/80">
                    Exquisite collection of premium bathroom fittings from Jaquar and other leading brands.
                  </p>
                  <div className="mt-auto pt-4">
                    <a
                      href="#gallery"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("gallery")
                      }}
                    >
                      <Button
                        variant="secondary"
                        className="bg-white text-purple-700 hover:bg-gray-100 border-0 shadow-md hover:shadow-lg"
                      >
                        Explore
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-emerald-500 opacity-90 transition-all duration-500 group-hover:opacity-100"></div>
                <div className="relative p-6 flex flex-col items-center text-center space-y-4 text-white h-full">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Wrench className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Expert Plumbing Services</h3>
                  <p className="text-white/80">
                    Professional plumbing services including installation, repair, and maintenance by certified experts.
                  </p>
                  <div className="mt-auto pt-4">
                    <a
                      href="#about"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("about")
                      }}
                    >
                      <Button
                        variant="secondary"
                        className="bg-white text-teal-700 hover:bg-gray-100 border-0 shadow-md hover:shadow-lg"
                      >
                        Learn More
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-pink-500 opacity-90 transition-all duration-500 group-hover:opacity-100"></div>
                <div className="relative p-6 flex flex-col items-center text-center space-y-4 text-white h-full">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Palette className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Design Consultation</h3>
                  <p className="text-white/80">
                    Expert advice on bathroom design and product selection to create your dream space.
                  </p>
                  <div className="mt-auto pt-4">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection("contact")
                      }}
                    >
                      <Button
                        variant="secondary"
                        className="bg-white text-amber-700 hover:bg-gray-100 border-0 shadow-md hover:shadow-lg"
                      >
                        Book Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="products" className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-purple-50"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-flex items-center justify-center p-1 mb-4 bg-purple-100 rounded-full">
                <div className="px-3 py-1 text-sm font-medium text-purple-800 rounded-full bg-white">
                  Featured Products
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                  Discover Our Collection
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Explore our selection of premium bathroom fittings from Jaquar and other leading brands
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-90 transition-all duration-500 z-10`}
                  ></div>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-gray-900 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 mb-4 group-hover:text-gray-600 transition-colors">
                      {product.description}
                    </p>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-500">
                      <a
                        href="#gallery"
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection("gallery")
                        }}
                      >
                        <Button className="bg-white text-gray-900 hover:bg-white/90 shadow-lg">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"></div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("gallery")
                }}
              >
                <Button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative flex items-center">
                    View All Products
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-800 to-teal-700 opacity-90"></div>
          <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg')] bg-repeat bg-center"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-flex items-center justify-center p-1 mb-4 bg-white/10 backdrop-blur-md rounded-full">
                <div className="px-3 py-1 text-sm font-medium text-white rounded-full bg-white/10">Testimonials</div>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">What Our Customers Say</h2>
                <p className="max-w-[700px] text-white/80 md:text-xl">
                  Don't just take our word for it. Here's what our satisfied customers have to say.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-90 transition-all duration-500 z-0`}
                  ></div>
                  <div className="relative p-6 z-10">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/30 group-hover:border-white/60 transition-all duration-500 shadow-lg">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-white group-hover:text-white transition-colors text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill={i < testimonial.rating ? "#FFD700" : "none"}
                            stroke="#FFD700"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <div className="relative">
                        <svg
                          className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-white/10 group-hover:text-white/20 transition-colors"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.7662 12.86C3.84023 12.86 3.05263 12.5533 2.40341 11.94C1.75419 11.3266 1.42957 10.4467 1.42957 9.29999C1.42957 8.07332 1.83616 6.87332 2.64935 5.69999C3.46253 4.49999 4.31449 3.55332 5.20522 2.85999L6.2212 4.25999C5.60845 4.73999 5.02991 5.27332 4.48558 5.85999C3.94125 6.44666 3.6191 7.12666 3.51013 7.89999C3.71563 7.79332 4.01756 7.73999 4.41592 7.73999C5.17557 7.73999 5.78855 7.97999 6.25486 8.45999C6.72117 8.93999 6.9543 9.55333 6.9543 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0668 12.86 10.2792 12.5533 9.63 11.94C8.98079 11.3266 8.65617 10.4467 8.65617 9.29999C8.65617 8.07332 9.06276 6.87332 9.87595 5.69999C10.6891 4.49999 11.5411 3.55332 12.4318 2.85999L13.4478 4.25999C12.835 4.73999 12.2565 5.27332 11.7122 5.85999C11.1678 6.44666 10.8457 7.12666 10.7367 7.89999C10.9422 7.79332 11.2441 7.73999 11.6425 7.73999C12.4021 7.73999 13.0151 7.97999 13.4814 8.45999C13.9477 8.93999 14.1809 9.55333 14.1809 10.3H14.6242Z"
                            fill="currentColor"
                          />
                        </svg>
                        <p className="text-white/80 group-hover:text-white transition-colors italic relative">
                          "{testimonial.content}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map" className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-flex items-center justify-center p-1 mb-4 bg-purple-100 rounded-full">
                <div className="px-3 py-1 text-sm font-medium text-purple-800 rounded-full bg-white">Our Location</div>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                  Visit Our Showroom
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Come and explore our showroom to see our premium bathroom fittings in person
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 rounded-xl overflow-hidden h-[500px] shadow-xl group relative">
  {/* Embedded Google Map */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.37881912208!2d84.64431291510968!3d25.55693228370545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3984c46a8d12cbb5%3A0x6b7f40c5588fa385!2sNH-922%2C%20Bampali%2C%20Arrah%2C%20Bihar%20802312!5e0!3m2!1sen!2sin!4v1718212345678!5m2!1sen!2sin"
    width="100%"
    height="100%"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
  ></iframe>

  {/* Content Overlay */}
  <div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-center text-center z-10 p-4">
    <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center shadow-lg animate-bounce">
      <MapPin className="h-8 w-8 text-white" />
    </div>
    <p className="text-white font-medium">Visit Our Location</p>
    <p className="text-sm text-gray-200 mt-2">
      NH‑922, Patna – Buxar Hwy, near Water park, Arrah, Bampali, Bihar 802312
    </p>
    <Button
      className="mt-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 shadow-md hover:shadow-lg transition-all duration-300"
      onClick={() =>
        window.open(
          "https://www.google.com/maps/dir//NH-922,+Patna+-+Buxar+Hwy,+near+Water+park,+Arrah,+Bampali,+Bihar+802312/@25.5653618,84.5255762,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3992a10ac7c2d98f:0xc401a0e62a40ff79!2m2!1d84.6079777!2d25.5653849?entry=ttu&g_ep=EgoyMDI1MDYwOS4xIKXMDSoASAFQAw%3D%3D"
        )
      }
    >
      Get Directions
    </Button>
  </div>
</div>

              <div className="space-y-4">
                <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 opacity-90 transition-all duration-500 group-hover:opacity-100"></div>
                  <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center mix-blend-overlay opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                  <div className="relative p-6 flex items-start gap-4 text-white">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl">Our Location</h3>
                      <p className="text-white/80 mt-2">
                        123 Plumbing Street
                        <br />
                        Fixture City, PC 12345
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-emerald-500 opacity-90 transition-all duration-500 group-hover:opacity-100"></div>
                  <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center mix-blend-overlay opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                  <div className="relative p-6 flex items-start gap-4 text-white">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl">Business Hours</h3>
                      <div className="text-white/80 mt-2 space-y-1">
                        <div className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span>10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-pink-500 opacity-90 transition-all duration-500 group-hover:opacity-100"></div>
                  <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center mix-blend-overlay opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                  <div className="relative p-6 flex items-start gap-4 text-white">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl">Contact</h3>
                      <p className="text-white/80 mt-2">
                        Phone: +91 9205688890
                        <br />
                        Email: er.rajasinghcse@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-purple-50"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-flex items-center justify-center p-1 mb-4 bg-purple-100 rounded-full">
                <div className="px-3 py-1 text-sm font-medium text-purple-800 rounded-full bg-white">
                  Product Gallery
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                  Explore Our Collection
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Browse our premium bathroom fittings and fixtures
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-white/50 backdrop-blur-md p-1 rounded-full shadow-lg">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="rounded-full px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {galleryItems.map((item) => (
                    <div
                      key={item.id}
                      className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-90 transition-all duration-500 z-10`}
                      ></div>
                      <div className="aspect-square relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                        />
                        <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 z-20 transition-all duration-500">
                          <div className="p-4 w-full text-white backdrop-blur-sm bg-black/20">
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {categories.slice(1).map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryItems
                      .filter((item) => item.category === category.id)
                      .map((item) => (
                        <div
                          key={item.id}
                          className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-90 transition-all duration-500 z-10`}
                          ></div>
                          <div className="aspect-square relative">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                            />
                            <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 z-20 transition-all duration-500">
                              <div className="p-4 w-full text-white backdrop-blur-sm bg-black/20">
                                <h3 className="font-semibold text-lg">{item.name}</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-50"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center p-1 mb-4 bg-purple-100 rounded-full">
                  <div className="px-3 py-1 text-sm font-medium text-purple-800 rounded-full bg-white">
                    Why Choose Us
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                  The Ara Plumber House Difference
                </h2>
                <ul className="space-y-6">
                  <li className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <ChevronRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-purple-900 group-hover:text-purple-700 transition-colors">
                        Authentic Premium Products
                      </h3>
                      <p className="text-gray-600 mt-1">
                        We offer only genuine products from trusted brands like Jaquar, ensuring unmatched quality and
                        durability.
                      </p>
                    </div>
                  </li>
                  <li className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-2 bg-gradient-to-br from-teal-600 to-emerald-500 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <ChevronRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-teal-900 group-hover:text-teal-700 transition-colors">
                        Industry Expertise
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Our team of certified professionals brings years of experience and in-depth knowledge to every
                        project.
                      </p>
                    </div>
                  </li>
                  <li className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-2 bg-gradient-to-br from-amber-500 to-pink-500 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <ChevronRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-amber-900 group-hover:text-amber-700 transition-colors">
                        Competitive Pricing
                      </h3>
                      <p className="text-gray-600 mt-1">
                        We offer the best products at competitive prices, ensuring exceptional value without
                        compromising on quality.
                      </p>
                    </div>
                  </li>
                  <li className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-500 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <ChevronRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-blue-900 group-hover:text-blue-700 transition-colors">
                        Customer Satisfaction
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Our priority is your complete satisfaction, reflected in our stellar customer testimonials and
                        repeat business.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="pt-6">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("contact")
                    }}
                  >
                    <Button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                      <span className="relative">Contact Us Today</span>
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25"></div>
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src="/images/squarebathroom.jpeg?height=300&width=300"
                        alt="Jaquar bathroom fixture"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src="/images/soapdispenser.jpg?height=300&width=300"
                        alt="Jaquar bathroom fixture"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src="/images/wallhungbasin.jpg?height=300&width=300"
                        alt="Jaquar bathroom fixture"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src="/images/shower.jpg?height=300&width=300"
                        alt="Jaquar bathroom fixture"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-800 to-teal-700 opacity-90"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg')] bg-repeat bg-center"></div>
          <div className="container px-4 md:px-6 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
                Ready to Transform Your Bathroom?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Visit our showroom or contact us today to discuss your bathroom fitting needs and turn your vision into
                reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:er.rajasinghcse@gmail.com">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-white text-purple-900 hover:text-purple-800 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <span className="absolute inset-0 w-0 bg-gradient-to-r from-purple-100 to-teal-100 transition-all duration-[400ms] ease-out group-hover:w-full"></span>
                    <span className="relative flex items-center">
                      Email Us
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </a>
                <a href="tel:+91 9205688890">
                  <Button
                    size="lg"
                    variant="outline"
                    className="backdrop-blur-md bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50 shadow-lg transition-all duration-300"
                  >
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative bg-gradient-to-br from-purple-900 via-blue-800 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg')] bg-repeat bg-center"></div>
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white/90">Ara Plumber House</h3>
              <p className="text-sm text-white/70">
                Your trusted partner for premium bathroom fittings and plumbing solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white/90">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#hero"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("hero")
                    }}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("gallery")
                    }}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("about")
                    }}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("contact")
                    }}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white/90">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("services")
                    }}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Bathroom Fittings
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("services")
                    }}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Plumbing Services
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("services")
                    }}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Consultation
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection("services")
                    }}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Installation
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white/90">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 shrink-0 text-teal-300" />
                  <span className="text-sm text-white/70">NH-922, Patna - Buxar Hwy, near Water park, Arrah, Bampali, Bihar 802312</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 shrink-0 text-teal-300" />
                  <span className="text-sm text-white/70">+91 9205688890,+91 9661815080,+91 8770733490,  
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 shrink-0 text-teal-300" />
                  <span className="text-sm text-white/70">er.rajasinghcse@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-between border-t border-white/10 pt-6">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Ara Plumber House. All rights reserved.
            </p>
            <p className="text-sm text-white/50">
              Designed with <span className="text-red-400">♥</span> for luxury bathroom solutions
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
