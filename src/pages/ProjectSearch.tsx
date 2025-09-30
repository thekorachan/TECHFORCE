import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import Pill from '../components/Pill'
import { projects, filterProjects } from '../data/projects'

export default function ProjectSearch() {
  const [q, setQ] = useState('')
  const list = useMemo(() => filterProjects(projects, q), [q])
  return (
    <div className="pb-[72px]">
      <div className="sticky top-0 z-10 bg-white">
        <div className="flex h-[52px] items-center justify-center px-16">
          <h1 className="text-[16px] font-semibold">ระบบค้นหาโครงการ</h1>
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
        {list.map((p) => (
          <div key={p.id} className="w-full bg-white py-12 px-16">
            <div className="flex items-center gap-12">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-8">
                  <div className="truncate text-[14px] font-semibold text-text">{p.name}</div>
                  {p.matched && <Pill className="bg-pill text-primary">AI - Matched</Pill>}
                </div>
                <div className="mt-4 truncate text-[12px] text-muted">{p.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
