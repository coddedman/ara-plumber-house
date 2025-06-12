import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Filter, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

// Sample products data
const products = [
  {
    id: 1,
    name: "Premium Shower Head",
    description: "High-pressure rainfall shower head with multiple spray settings",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Bathroom Fittings",
  },
  {
    id: 2,
    name: "Submersible Water Pump",
    description: "Powerful submersible pump for efficient water drainage",
    price: 129.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Pumps",
  },
  {
    id: 3,
    name: "Modern Basin Mixer Tap",
    description: "Sleek chrome basin mixer tap with ceramic disc technology",
    price: 79.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Bathroom Fittings",
  },
  {
    id: 4,
    name: "PVC Pipe Set",
    description: "Complete set of PVC pipes and connectors for plumbing projects",
    price: 34.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Pipes & Fittings",
  },
  {
    id: 5,
    name: "Toilet Seat",
    description: "Durable and easy-to-clean toilet seat with soft-close mechanism",
    price: 39.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Bathroom Fittings",
  },
  {
    id: 6,
    name: "Booster Pump",
    description: "Compact booster pump to increase water pressure in your home",
    price: 149.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Pumps",
  },
  {
    id: 7,
    name: "Bathroom Sink",
    description: "Modern ceramic bathroom sink with overflow protection",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Bathroom Fittings",
  },
  {
    id: 8,
    name: "Pipe Wrench Set",
    description: "Professional-grade pipe wrench set for plumbing repairs",
    price: 45.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Tools",
  },
]

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:underline underline-offset-4">
                Home
              </Link>
              <span>/</span>
              <span>Products</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Search</h3>
              <div className="relative">
                <Input placeholder="Search products..." className="pr-10" />
                <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
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
                    className="h-4 w-4"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </Button>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/products/bathroom-fittings" className="text-sm hover:underline underline-offset-4">
                    Bathroom Fittings
                  </Link>
                </li>
                <li>
                  <Link href="/products/pumps" className="text-sm hover:underline underline-offset-4">
                    Pumps
                  </Link>
                </li>
                <li>
                  <Link href="/products/pipes" className="text-sm hover:underline underline-offset-4">
                    Pipes & Fittings
                  </Link>
                </li>
                <li>
                  <Link href="/products/tools" className="text-sm hover:underline underline-offset-4">
                    Tools
                  </Link>
                </li>
              </ul>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold mb-4">Price Range</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="min-price" className="text-sm">
                    Min
                  </label>
                  <Input id="min-price" type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="max-price" className="text-sm">
                    Max
                  </label>
                  <Input id="max-price" type="number" placeholder="1000" />
                </div>
              </div>
              <Button className="w-full mt-4">Apply</Button>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-sm text-muted-foreground">Showing {products.length} products</p>
              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      <span>Filter</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Newest</DropdownMenuItem>
                      <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                      <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                      <DropdownMenuItem>Popularity</DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-bold">${product.price.toFixed(2)}</span>
                      <span className="text-xs text-muted-foreground">{product.category}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex gap-2">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/products/${product.id}`}>View Details</Link>
                    </Button>
                    <Button size="icon" variant="outline">
                      <ShoppingCart className="h-4 w-4" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
