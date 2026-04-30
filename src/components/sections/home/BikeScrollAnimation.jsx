'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TOTAL_FRAMES = 196          
const FRAME_SRCS = Array.from(
  { length: TOTAL_FRAMES },
  (_, i) => `/bike/frame${i + 13}.png`
)

const TEXT_STAGES = [
  {
    start: 0.0,
    end: 0.30,
    tag: 'Chapter I',
    title: 'Born to Ride',
    subtitle: 'A machine that echoes the soul of the open road.',
  },
  {
    start: 0.32,
    end: 0.62,
    tag: 'Chapter II',
    title: 'Pure Performance',
    subtitle: 'Air-cooled. Single-cylinder. Timeless character.',
  },
  {
    start: 0.65,
    end: 1.0,
    tag: 'Chapter III',
    title: 'Experience the Legend',
    subtitle: 'Book your Royal Enfield at TagsBikez today.',
  },
]

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
  const sectionRef    = useRef(null)
  const canvasRef     = useRef(null)
  const textRefs      = useRef([])
  const progressRef   = useRef(null)
  const imagesRef     = useRef([])
  const currentFrame  = useRef(0)
  const rafRef        = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      drawFrame(currentFrame.current)
    }
    resize()
    window.addEventListener('resize', resize)

    const imgs = FRAME_SRCS.map((src) => {
      const img = new Image()
      img.src   = src
      img.onload = () => {
        if (src === FRAME_SRCS[0]) drawFrame(0)
      }
      return img
    })
    imagesRef.current = imgs

    function drawFrame(idx) {
      const i   = Math.min(Math.max(Math.round(idx), 0), TOTAL_FRAMES - 1)
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

    function updateText(progress) {
      TEXT_STAGES.forEach((stage, i) => {
        const el = textRefs.current[i]
        if (!el) return
        const center   = (stage.start + stage.end) / 2
        const halfSpan = (stage.end - stage.start) / 2
        let opacity = 0
        if (progress >= stage.start && progress <= stage.end) {
          const dist = Math.abs(progress - center)
          opacity = Math.max(0, 1 - (dist / halfSpan) * 1.8)
        }
        el.style.opacity   = opacity
        el.style.transform = `translateY(${(1 - Math.min(opacity * 2, 1)) * 24}px)`
      })
    }

    const trigger = ScrollTrigger.create({
      trigger : sectionRef.current,
      start   : 'top top',
      end     : 'bottom bottom',
      scrub   : true,
      onUpdate: (self) => {
        const p  = self.progress
        targetFrame = p * (TOTAL_FRAMES - 1)

        updateText(p)

        if (progressRef.current) {
          progressRef.current.style.width = `${p * 100}%`
        }
      },
    })

    // initial text state
    updateText(0)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
      trigger.kill()
    }
  }, [])

  return (
    <section ref={sectionRef} style={{ position: 'relative', height: '500vh' }}>

      <div
        style={{
          position : 'sticky',
          top      : 0,
          height   : '100vh',
          overflow : 'hidden',
          background: '#000',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position : 'absolute',
            inset    : 0,
            width    : '100%',
            height   : '100%',
            display  : 'block',
          }}
        />

        <div
          style={{
            position  : 'absolute',
            inset     : 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 30%, rgba(0,0,0,0.1) 65%, rgba(0,0,0,0.65) 100%)',
            pointerEvents: 'none',
          }}
        />

        {TEXT_STAGES.map((stage, i) => (
          <div
            key={i}
            ref={(el) => (textRefs.current[i] = el)}
            style={{
              position    : 'absolute',
              bottom      : '15%',
              left        : 0,
              right       : 0,
              textAlign   : 'center',
              opacity     : 0,
              transform   : 'translateY(24px)',
              transition  : 'opacity 0.07s linear, transform 0.07s linear',
              pointerEvents: 'none',
              padding     : '0 1.5rem',
            }}
          >
            {/* <p style={{
              color        : '#f97316',
              fontSize     : '0.6rem',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              fontWeight   : 700,
              marginBottom : '0.55rem',
              fontFamily   : 'system-ui, sans-serif',
            }}>
              {stage.tag}
            </p> */}

            <h2 style={{
              color       : '#fff',
              fontSize    : 'clamp(2rem, 5.5vw, 4.5rem)',
              fontWeight  : 800,
              lineHeight  : 1.05,
              margin      : '0 0 0.7rem',
              letterSpacing: '-0.03em',
              fontFamily  : 'system-ui, sans-serif',
              textShadow  : '0 4px 30px rgba(0,0,0,0.55)',
            }}>
              {stage.title}
            </h2>

            <p style={{
              color      : 'rgba(255,255,255,0.72)',
              fontSize   : 'clamp(0.85rem, 1.8vw, 1.15rem)',
              fontFamily : 'system-ui, sans-serif',
              maxWidth   : '520px',
              margin     : '0 auto',
              lineHeight : 1.65,
              textShadow : '0 2px 12px rgba(0,0,0,0.5)',
            }}>
              {stage.subtitle}
            </p>
          </div>
        ))}

        <div style={{
          position     : 'absolute',
          bottom       : '5%',
          right        : '2.5rem',
          display      : 'flex',
          alignItems   : 'center',
          gap          : '0.55rem',
          color        : 'rgba(255,255,255,0.4)',
          fontSize     : '0.6rem',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          fontFamily   : 'system-ui, sans-serif',
        }}>
          <div style={{ width: '28px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
        </div>

      </div>
    </section>
  )
}
