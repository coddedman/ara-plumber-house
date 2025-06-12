import Link from "next/link"
import Image from "next/image"

import { Card } from "@/components/ui/card"

// Sample categories data
const categories = [
  {
    id: 1,
    name: "Bathroom Fittings",
    description: "Taps, showers, and accessories",
    image: "/placeholder.svg?height=300&width=300",
    slug: "bathroom-fittings",
  },
  {
    id: 2,
    name: "Pumps",
    description: "Water pumps for all applications",
    image: "/placeholder.svg?height=300&width=300",
    slug: "pumps",
  },
  {
    id: 3,
    name: "Pipes & Fittings",
    description: "PVC, copper, and brass pipes",
    image: "/placeholder.svg?height=300&width=300",
    slug: "pipes",
  },
  {
    id: 4,
    name: "Tools",
    description: "Professional plumbing tools",
    image: "/placeholder.svg?height=300&width=300",
    slug: "tools",
  },
]

export default function ProductCategories() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Shop by Category</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Browse our wide range of plumbing products and bathroom fittings.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link key={category.id} href={`/products/${category.slug}`} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-square relative">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 w-full p-4 text-white">
                      <h3 className="text-xl font-bold">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
