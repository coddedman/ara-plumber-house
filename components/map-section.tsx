import { MapPin, Clock, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function MapSection() {
  return (
    <section className="w-full py-12 md:py-24 relative overflow-hidden">
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
          <div className="md:col-span-2 rounded-xl overflow-hidden h-[400px] shadow-xl group relative">
            {/* This would be replaced with an actual Google Maps embed in production */}
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"></div>
              <div className="text-center p-4 relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center shadow-lg animate-bounce">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <p className="text-gray-600 font-medium">Interactive Map Coming Soon</p>
                <p className="text-sm text-gray-500 mt-2">123 Plumbing Street, Fixture City, PC 12345</p>
                <Button className="mt-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 shadow-md hover:shadow-lg transition-all duration-300">
                  Get Directions
                </Button>
              </div>
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
                  <Clock className="h-6 w-6" />
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
                    Phone: +1 (555) 123-4567
                    <br />
                    Email: info@araplumberhouse.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
