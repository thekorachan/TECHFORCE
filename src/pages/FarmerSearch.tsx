import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import ListItem from '../components/ListItem'
import { farmers, filterFarmers } from '../data/farmers'
import { useNavigate } from 'react-router-dom'

export default function FarmerSearch() {
  const [q, setQ] = useState('')
  const list = useMemo(() => filterFarmers(farmers, q), [q])
  const nav = useNavigate()
  return (
    <div className="pb-[72px]">
      <div className="sticky top-0 z-10 bg-white">
        <div className="flex h-[52px] items-center justify-center px-16">
          <h1 className="text-[16px] font-semibold">ระบบค้นหาเกษตรกร</h1>
        </div>
        <div className="px-[16px] pb-[12px]">
          <div className="flex h-[40px] items-center gap-[8px] rounded-[20px] border border-line px-[12px]">
            <Search size={18} className="text-muted" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="ค้นหา"
              className="h-full flex-1 bg-transparent text-[14px] outline-none"
            />
          </div>
        </div>
        <div className="divider" />
      </div>

      <div>
        {list.map((f, idx) => (
          <ListItem
            key={f.id}
            title={f.name}
            subtitle={f.summary}
            avatarSrc={f.avatar}
            rightImageSrc={f.field}
            matched={f.matched}
            onClick={() => {
              if (idx === 0) nav('/chat/chiangmai-6')
            }}
          />
        ))}
      </div>
    </div>
  )
}
