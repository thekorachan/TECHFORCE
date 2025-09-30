import { ReactNode } from 'react'

export default function Pill({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-10 py-2 text-[12px] ${className}`}>{children}</span>
  )
}
