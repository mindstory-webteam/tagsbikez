'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TOTAL_FRAMES = 240
const FRAME_SRCS = Array.from(
  { length: TOTAL_FRAMES },
  (_, i) => `/bike/frame${i + 1}.png`
)

function drawCoverFit(ctx, img, cw, ch) {
  const iw = img.naturalWidth
  const ih = img.naturalHeight
  if (!iw || !ih) return
  const scale = Math.max(cw / iw, ch / ih)
  const x = (cw - iw * scale) / 2
  const y = (ch - ih * scale) / 2
  ctx.clearRect(0, 0, cw, ch)
  ctx.drawImage(img, x, y, iw * scale, ih * scale)
}

export default function BikeScrollAnimation() {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const currentFrame = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawFrame(currentFrame.current)
    }
    resize()
    window.addEventListener('resize', resize)

    const imgs = FRAME_SRCS.map((src) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        if (src === FRAME_SRCS[0]) drawFrame(0)
      }
      return img
    })
    imagesRef.current = imgs

    function drawFrame(idx) {
      const i = Math.min(Math.max(Math.round(idx), 0), TOTAL_FRAMES - 1)
      const img = imagesRef.current[i]
      if (img?.complete && img.naturalWidth) {
        drawCoverFit(ctx, img, canvas.width, canvas.height)
      }
    }

    let targetFrame = 0
    function loop() {
      currentFrame.current += (targetFrame - currentFrame.current) * 0.12
      drawFrame(currentFrame.current)
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onEnter: () => document.body.classList.add('hide-navbar-force'),
      onLeave: () => document.body.classList.remove('hide-navbar-force'),
      onEnterBack: () => document.body.classList.add('hide-navbar-force'),
      onLeaveBack: () => document.body.classList.remove('hide-navbar-force'),
      onUpdate: (self) => {
        targetFrame = self.progress * (TOTAL_FRAMES - 1)
      },
    })

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
      trigger.kill()
      document.body.classList.remove('hide-navbar-force')
    }
  }, [])

  return (
    <section ref={sectionRef} style={{ position: 'relative', height: '500vh' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          background: '#000',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 30%, rgba(0,0,0,0.1) 65%, rgba(0,0,0,0.65) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </section>
  )
}
