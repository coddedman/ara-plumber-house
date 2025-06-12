import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

// Sample featured products data (Jaquar-inspired)
const featuredProducts = [
  {
    id: 1,
    name: "Jaquar Ornamix Prime",
    description: "Premium basin mixer with quarter turn technology",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-purple-600 to-blue-500",
  },
  {
    id: 2,
    name: "Jaquar Florentine",
    description: "Luxury shower system with rainfall and handheld options",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-teal-600 to-emerald-500",
  },
  {
    id: 3,
    name: "Jaquar Artize",
    description: "Designer faucet with sleek chrome finish",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-amber-500 to-pink-500",
  },
  {
    id: 4,
    name: "Jaquar Kubix Prime",
    description: "Modern square design bathroom accessories",
    image: "/placeholder.svg?height=300&width=300",
    color: "from-blue-600 to-indigo-500",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="w-full py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-purple-50"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="inline-flex items-center justify-center p-1 mb-4 bg-purple-100 rounded-full">
            <div className="px-3 py-1 text-sm font-medium text-purple-800 rounded-full bg-white">Featured Products</div>
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
                  <Link href="/gallery">
                    <Button className="bg-white text-gray-900 hover:bg-white/90 shadow-lg">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"></div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/gallery">
            <Button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative flex items-center">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
