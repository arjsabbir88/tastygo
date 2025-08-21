"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Clock, Users } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Artisan Pizza Perfection",
    subtitle: "Wood-fired excellence in every bite",
    description: "Handcrafted with premium ingredients and baked to perfection in our traditional wood-fired oven.",
    image: "https://i.postimg.cc/ncQGts33/slice-crispy-pizza-with-meat-cheese.jpg",
    rating: 4.9,
    cookTime: "12 min",
    serves: "2-3 people",
    price: "$24",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 2,
    title: "Fresh Sushi Selection",
    subtitle: "Ocean to table freshness",
    description: "Premium sashimi-grade fish prepared by our master sushi chefs with authentic Japanese techniques.",
    image: "https://i.postimg.cc/rpgS95pw/japanese-food-sushi-sashimi.jpg",
    rating: 4.8,
    cookTime: "15 min",
    serves: "1-2 people",
    price: "$32",
    color: "from-teal-500 to-blue-600",
  },
  {
    id: 3,
    title: "Gourmet Burger Bliss",
    subtitle: "Elevated comfort food",
    description: "Grass-fed beef patty with artisanal toppings and house-made sauce on a brioche bun.",
    image: "https://i.postimg.cc/NFZ8HYj8/double-bacon-cheeseburger.jpg",
    rating: 4.7,
    cookTime: "8 min",
    serves: "1 person",
    price: "$18",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 4,
    title: "Decadent Chocolate Cake",
    subtitle: "Sweet indulgence awaits",
    description: "Rich triple-layer chocolate cake with Belgian chocolate ganache and fresh berries.",
    image: "https://i.postimg.cc/ZYWMC5fd/delicious-dessert-table.jpg",
    rating: 4.9,
    cookTime: "Ready now",
    serves: "4-6 people",
    price: "$28",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 5,
    title: "Decadent Ice Cream Sundae",
    subtitle: "Sweet indulgence awaits",
    description: "with Belgian chocolate ganache and fresh berries.",
    image: "https://i.postimg.cc/tJ6kD7fv/delicious-ice-cream-with-topping.jpg",
    rating: 4.9,
    cookTime: "Ready now",
    serves: "4-6 people",
    price: "$25",
    color: "from-purple-500 to-pink-600",
  }
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className="relative h-[80vh] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 z-5">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-60`} />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white space-y-6">
              <div className="space-y-4">
                <div
                  key={`subtitle-${currentSlide}`}
                  className="animate-fade-in-up opacity-0 animation-delay-200"
                  style={{ animationFillMode: "forwards" }}
                >
                  <span className="text-sm font-medium tracking-wider uppercase opacity-90">
                    {currentSlideData.subtitle}
                  </span>
                </div>

                <div
                  key={`title-${currentSlide}`}
                  className="animate-fade-in-up opacity-0 animation-delay-400"
                  style={{ animationFillMode: "forwards" }}
                >
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">{currentSlideData.title}</h1>
                </div>

                <div
                  key={`description-${currentSlide}`}
                  className="animate-fade-in-up opacity-0 animation-delay-600"
                  style={{ animationFillMode: "forwards" }}
                >
                  <p className="text-lg lg:text-xl opacity-90 max-w-lg leading-relaxed">
                    {currentSlideData.description}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div
                key={`stats-${currentSlide}`}
                className="animate-fade-in-up opacity-0 animation-delay-800"
                style={{ animationFillMode: "forwards" }}
              >
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{currentSlideData.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{currentSlideData.cookTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{currentSlideData.serves}</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                key={`cta-${currentSlide}`}
                className="animate-fade-in-up opacity-0 animation-delay-1000"
                style={{ animationFillMode: "forwards" }}
              >
                <div className="flex items-center gap-4 pt-4">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-2">
                    Order Now - {currentSlideData.price}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                  >
                    View Menu
                  </Button>
                </div>
              </div>
            </div>

            {/* Image Preview */}
            <div className="hidden lg:block">
              <div
                key={`image-${currentSlide}`}
                className="animate-fade-in-right opacity-0 animation-delay-600"
                style={{ animationFillMode: "forwards" }}
              >
                <div className="relative">
                  <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img
                      src={currentSlideData.image || "/placeholder.svg"}
                      alt={currentSlideData.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white text-black px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    {currentSlideData.price}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Auto-play Indicator */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            isAutoPlaying ? "bg-green-500 text-white" : "bg-white/20 text-white backdrop-blur-sm"
          }`}
        >
          {isAutoPlaying ? "Auto" : "Manual"}
        </button>
      </div>
    </div>
  )
}
