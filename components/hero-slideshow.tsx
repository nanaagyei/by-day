"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/hero/plumber.jpg",
    alt: "Professional plumber at work",
    category: "Home Services",
  },
  {
    image: "/images/hero/electrician.jpg",
    alt: "Skilled electrician installing fixtures",
    category: "Electrical",
  },
  {
    image: "/images/hero/carpenter.jpg",
    alt: "Expert carpenter crafting furniture",
    category: "Construction",
  },
  {
    image: "/images/hero/chef.jpg",
    alt: "Professional chef preparing food",
    category: "Hospitality",
  },
  {
    image: "/images/hero/designer.jpg",
    alt: "Creative designer at work",
    category: "Creative",
  },
  {
    image: "/images/hero/mechanic.jpg",
    alt: "Automotive mechanic repairing a car",
    category: "Automotive",
  },
  {
    image: "/images/hero/therapist.jpg",
    alt: "Wellness therapist providing massage",
    category: "Wellness",
  },
  {
    image: "/images/hero/security.jpg",
    alt: "Security professional on duty",
    category: "Security",
  },
  {
    image: "/images/hero/tech.jpg",
    alt: "IT professional providing support",
    category: "Technology",
  },
]

export default function HeroSlideshow() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 20,
    dragFree: false,
    containScroll: "trimSnaps",
    align: "center",
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (!emblaApi) return
    if (isPlaying) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext()
      }, 4000)
      return () => clearInterval(autoplay)
    }
  }, [emblaApi, isPlaying])

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%]">
              <div className="relative h-[400px] w-full sm:h-[450px] lg:h-[550px]">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block rounded-full bg-primary/90 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                    {slide.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Fixed Navigation Controls */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                selectedIndex === index
                  ? "w-8 bg-primary"
                  : "bg-background/80 backdrop-blur-sm hover:bg-background"
              )}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
          onClick={scrollNext}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
      </div>
    </div>
  )
} 