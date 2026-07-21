import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import BackgroundEmber from './BackgroundEmber'
import BackgroundTide from './BackgroundTide'
import BackgroundArcane from './BackgroundArcane'

export default function Backdrop() {
  const { theme } = useTheme()

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <AnimatePresence mode="sync">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {theme === 'ember' && <BackgroundEmber />}
          {theme === 'tide' && <BackgroundTide />}
          {theme === 'arcane' && <BackgroundArcane />}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
    </div>
  )
}
