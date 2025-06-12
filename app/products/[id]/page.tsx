import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would typically come from a database or API
const getProductById = (id: string) => {
  // Sample product data
  return {
    id: Number.parseInt(id),
    name: "Premium Shower Head",
    description:
      "High-pressure rainfall shower head with multiple spray settings for a luxurious shower experience. Made from high-quality chrome-plated materials for durability and a sleek look.",
    price: 49.99,
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    category: "Bathroom Fittings",
    features: [
      "Multiple spray settings",
      "High-pressure water flow",
      "Easy installation",
      "Chrome-plated finish",
      "Water-saving technology",
    ],
    specifications: {
      Material: "Chrome-plated ABS",
      Dimensions: "8 inches diameter",
      "Flow Rate": "2.5 GPM",
      Installation: "Wall-mounted",
      Warranty: "5 years",
    },
    stock: 15,
    relatedProducts: [2, 3, 5],
  }
}

export async function generateStaticParams() {
  const productIds = ['1', '2', '3'] // Replace with real IDs if needed
  return productIds.map((id) => ({ id }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:underline underline-offset-4">
                Home
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:underline underline-offset-4">
                Products
              </Link>
              <span>/</span>
              <span>{product.name}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="aspect-square relative rounded-lg overflow-hidden border">
              <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square relative rounded-lg overflow-hidden border cursor-pointer">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - View ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-muted-foreground mt-2">{product.category}</p>
            </div>
            <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>
            <Separator />
            <div>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Button variant="outline" size="icon">
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span className="w-12 text-center">1</span>
                  <Button variant="outline" size="icon">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">{product.stock} in stock</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button className="flex-1">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex-1">
                  Buy Now
                </Button>
              </div>
            </div>
            <Separator />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-2">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <div className="text-sm">
                    <p className="font-medium">Free Shipping</p>
                    <p className="text-muted-foreground">On orders over $100</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <div className="text-sm">
                    <p className="font-medium">5 Year Warranty</p>
                    <p className="text-muted-foreground">Full coverage</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-2">
                  <RotateCcw className="h-5 w-5 text-muted-foreground" />
                  <div className="text-sm">
                    <p className="font-medium">30 Day Returns</p>
                    <p className="text-muted-foreground">Hassle-free returns</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Tabs defaultValue="features">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="mt-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Product Features</h3>
                <ul className="grid gap-2 list-disc pl-5">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="mt-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Technical Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b pb-2">
                      <span className="font-medium">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Customer Reviews</h3>
                <p>No reviews yet. Be the first to review this product.</p>
                <Button>Write a Review</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
