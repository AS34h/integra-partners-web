import { Metadata } from 'next'

const fadeInImmediate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0 }
}

export default function JuridiqueOHADALayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
