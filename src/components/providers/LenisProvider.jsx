'use client'
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
      {children}
    </ReactLenis>
  )
}


