'use client'
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname } from 'next/navigation'

function ScrollToTopOnRouteChange() {
  const pathname = usePathname()
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, lenis])

  return null
}

export default function LenisProvider({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useLenis(ScrollTrigger.update)

  return (
    <ReactLenis 
      root 
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      }}
    >
      <ScrollToTopOnRouteChange />
      {children}
    </ReactLenis>
  )
}


