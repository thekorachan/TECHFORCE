import Avatar from './Avatar'
import MapTile from './MapTile'
import Pill from './Pill'

type Props = {
  title: string
  subtitle?: string
  avatarSrc?: string
  rightImageSrc?: string
  matched?: boolean
  onClick?: () => void
}

export default function ListItem({ title, subtitle, avatarSrc, rightImageSrc, matched, onClick }: Props) {
  return (
    <button onClick={onClick} className="w-full bg-white py-12 px-16 text-left">
  <div className="grid grid-cols-[56px,1fr,72px] items-center gap-[12px]">
        <div className="flex flex-col items-center gap-8">
          <Avatar src={avatarSrc} alt={title} size={56} rounded={14} />
        </div>
        <div className="min-w-0 pr-[8px]">
          <div className="flex flex-wrap items-center gap-[8px]">
            <div className="min-w-0 shrink truncate text-[14px] font-semibold text-text">{title}</div>
            {matched && <Pill className="shrink-0 bg-pill px-[8px] py-[2px] text-[12px] leading-[16px] text-primary">AI - Matched</Pill>}
          </div>
          {subtitle && <div className="mt-4 truncate text-[12px] text-muted pr-[8px]">{subtitle}</div>}
        </div>
        <div className="justify-self-end">
          <MapTile src={rightImageSrc} alt={title} width={72} height={72} />
        </div>
      </div>
    </button>
  )
}
