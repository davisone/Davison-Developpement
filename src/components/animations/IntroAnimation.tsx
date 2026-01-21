'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/ui/Logo'

interface IntroAnimationProps {
  onComplete: () => void
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<'logo' | 'shrink' | 'done'>('logo')

  useEffect(() => {
    // Phase 1: Logo apparaît et reste visible
    const timer1 = setTimeout(() => {
      setPhase('shrink')
    }, 1800)

    // Phase 2: Logo se réduit et se déplace
    const timer2 = setTimeout(() => {
      setPhase('done')
      onComplete()
    }, 2800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-primary flex items-center justify-center"
          onClick={() => {
            setPhase('done')
            onComplete()
          }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={
              phase === 'logo'
                ? { scale: 1, opacity: 1 }
                : {
                    scale: 0.25,
                    opacity: 0,
                    x: typeof window !== 'undefined'
                      ? -(window.innerWidth / 2 - 60)
                      : -200,
                    y: typeof window !== 'undefined'
                      ? -(window.innerHeight / 2 - 40)
                      : -200,
                  }
            }
            transition={{
              duration: phase === 'logo' ? 0.8 : 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Logo size="intro" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
