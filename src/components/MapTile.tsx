import { MapPin } from 'lucide-react'
import { useState } from 'react'

type Props = { src?: string; alt: string; width?: number; height?: number; rounded?: number }

export default function MapTile({ src, alt, width = 72, height = 72, rounded = 12 }: Props) {
  const [failed, setFailed] = useState(false)
  const style = { width, height, borderRadius: rounded }
  if (!src || failed) {
    return <div style={{ width, height, borderRadius: 8 } as any} className="bg-gray-200 shadow-subtle" aria-label={alt} />
  }
  return (
    <div style={style as any} className="relative overflow-hidden shadow-subtle">
      <img src={src} alt={alt} onError={() => setFailed(true)} className="h-full w-full object-cover" />
      <div className="absolute bottom-1 right-1 rounded-full bg-white/90 p-1">
        <MapPin size={14} className="text-primary" />
      </div>
    </div>
  )
}
