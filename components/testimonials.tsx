"use client"

import Image from "next/image"

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

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 relative overflow-hidden">
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
  )
}
