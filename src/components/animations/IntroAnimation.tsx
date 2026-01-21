'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface IntroAnimationProps {
  onComplete: () => void
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<'enter' | 'glow' | 'pulse' | 'exit' | 'done'>('enter')

  useEffect(() => {
    // Phase 1: Logo entre avec effet dramatique
    const timer1 = setTimeout(() => setPhase('glow'), 800)

    // Phase 2: Effet de glow intense
    const timer2 = setTimeout(() => setPhase('pulse'), 1800)

    // Phase 3: Pulse et préparation sortie
    const timer3 = setTimeout(() => setPhase('exit'), 2800)

    // Phase 4: Animation de sortie vers navbar
    const timer4 = setTimeout(() => {
      setPhase('done')
      onComplete()
    }, 3800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-primary flex items-center justify-center overflow-hidden"
          onClick={() => {
            setPhase('done')
            onComplete()
          }}
        >
          {/* Particules dorées en arrière-plan */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-accent"
                initial={{
                  x: '50vw',
                  y: '50vh',
                  scale: 0,
                  opacity: 0,
                }}
                animate={phase !== 'enter' ? {
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  scale: [0, Math.random() * 2 + 1, 0],
                  opacity: [0, 0.8, 0],
                } : {}}
                transition={{
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 0.5,
                  ease: 'easeOut',
                }}
              />
            ))}
          </div>

          {/* Cercles de glow qui s'expandent */}
          <AnimatePresence>
            {(phase === 'glow' || phase === 'pulse') && (
              <>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`ring-${i}`}
                    className="absolute rounded-full border-2 border-accent/30"
                    initial={{ width: 200, height: 200, opacity: 0 }}
                    animate={{
                      width: [200, 600 + i * 200],
                      height: [200, 600 + i * 200],
                      opacity: [0.6, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      ease: 'easeOut',
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          {/* Glow effect derrière le logo */}
          <motion.div
            className="absolute rounded-full bg-accent/20 blur-3xl"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={
              phase === 'exit'
                ? { width: 0, height: 0, opacity: 0 }
                : phase !== 'enter'
                ? { width: 400, height: 400, opacity: 0.6 }
                : {}
            }
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          {/* Logo principal */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={
              phase === 'exit'
                ? {
                    scale: 0.15,
                    rotate: 0,
                    opacity: 0,
                    x: typeof window !== 'undefined' ? -(window.innerWidth / 2 - 80) : -200,
                    y: typeof window !== 'undefined' ? -(window.innerHeight / 2 - 50) : -200,
                  }
                : phase === 'pulse'
                ? { scale: [1.2, 1.3, 1.2], rotate: 0, opacity: 1 }
                : phase === 'glow'
                ? { scale: 1.2, rotate: 0, opacity: 1 }
                : { scale: 1.2, rotate: 0, opacity: 1 }
            }
            transition={
              phase === 'enter'
                ? { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }
                : phase === 'pulse'
                ? { duration: 0.8, repeat: 1, ease: 'easeInOut' }
                : phase === 'exit'
                ? { duration: 1, ease: [0.16, 1, 0.3, 1] }
                : { duration: 0.5 }
            }
          >
            {/* Effet de shine sur le logo */}
            <motion.div
              className="absolute inset-0 z-20 overflow-hidden rounded-lg"
              initial={{ opacity: 0 }}
              animate={phase === 'glow' ? { opacity: 1 } : { opacity: 0 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                initial={{ x: '-200%' }}
                animate={phase === 'glow' ? { x: '200%' } : {}}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Logo Image - TRÈS GRAND */}
            <motion.div
              animate={
                phase === 'pulse'
                  ? {
                      filter: [
                        'drop-shadow(0 0 20px rgba(201, 162, 39, 0.5))',
                        'drop-shadow(0 0 60px rgba(201, 162, 39, 0.8))',
                        'drop-shadow(0 0 20px rgba(201, 162, 39, 0.5))',
                      ],
                    }
                  : phase === 'glow'
                  ? { filter: 'drop-shadow(0 0 40px rgba(201, 162, 39, 0.6))' }
                  : { filter: 'drop-shadow(0 0 0px rgba(201, 162, 39, 0))' }
              }
              transition={{ duration: 0.8, repeat: phase === 'pulse' ? 1 : 0 }}
            >
              <Image
                src="/images/logo.png"
                alt="Davison Développement"
                width={350}
                height={350}
                className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Texte qui apparaît */}
          <motion.div
            className="absolute bottom-[20%] text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={
              phase === 'exit'
                ? { opacity: 0, y: -20 }
                : phase !== 'enter'
                ? { opacity: 1, y: 0 }
                : {}
            }
            transition={{ duration: 0.6, delay: phase === 'glow' ? 0.3 : 0 }}
          >
            <motion.p
              className="text-accent text-xl md:text-2xl font-light tracking-[0.3em] uppercase"
              animate={phase === 'pulse' ? { opacity: [1, 0.5, 1] } : {}}
              transition={{ duration: 0.8, repeat: 1 }}
            >
              Davison Développement
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
