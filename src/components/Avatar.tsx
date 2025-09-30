import { useState } from 'react'

type Props = {
  src?: string
  alt: string
  size?: number
  rounded?: number
}

export default function Avatar({ src, alt, size = 44, rounded = 12 }: Props) {
  const [failed, setFailed] = useState(false)
  const style = { width: size, height: size, borderRadius: rounded }
  if (!src || failed) {
    return <div style={{ width: size, height: size, borderRadius: 8 }} className="bg-gray-200" aria-label={alt} />
  }
  return <img src={src} alt={alt} onError={() => setFailed(true)} style={style} className="object-cover" />
}
