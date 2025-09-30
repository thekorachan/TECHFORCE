import { Pencil, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import Avatar from '../components/Avatar'
import { conversations } from '../data/messages'
import { useNavigate } from 'react-router-dom'

export default function MessageList() {
  const [q, setQ] = useState('')
  const nav = useNavigate()
  const list = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return conversations
    return conversations.filter((c) => (c.name + ' ' + c.last).toLowerCase().includes(s))
  }, [q])

  return (
    <div className="pb-[72px]">
      <div className="sticky top-0 z-10 bg-white">
        <div className="flex h-[52px] items-center px-16">
          <h1 className="text-[16px] font-semibold">กล่องข้อความ</h1>
          <div className="flex-1" />
          <button className="text-muted" aria-label="compose">
            <Pencil size={20} />
          </button>
        </div>
        <div className="px-[16px] pb-[12px]">
          <div className="flex h-[40px] items-center gap-[8px] rounded-[20px] border border-line px-[12px]">
            <Search size={18} className="text-muted" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="ค้นหาโครงการ"
              className="h-full flex-1 bg-transparent text-[14px] outline-none"
            />
          </div>
        </div>
        <div className="divider" />
      </div>

      <div>
        {list.map((c, idx) => (
          <button
            key={c.id}
            onClick={() => idx === 0 && nav('/chat/chiangmai-6')}
            className="w-full bg-white py-12 px-16 text-left"
          >
            <div className="flex items-center gap-12">
              <Avatar src={c.avatar} alt={c.name} size={44} rounded={12} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-8">
                  <div className="truncate text-[14px] font-semibold text-text">{c.name}</div>
                  <div className="shrink-0 text-[12px] text-muted">{c.time}</div>
                </div>
                <div className="mt-4 truncate text-[13px] text-muted">{c.last}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
