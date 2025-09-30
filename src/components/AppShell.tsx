import { ReactNode } from 'react'
import { User, MessageSquare, Search as SearchIcon } from 'lucide-react'

type Props = {
  currentPath: string
  onNavigate: (path: string) => void
  children: ReactNode
}

export default function AppShell({ currentPath, onNavigate, children }: Props) {
  const isSearch = currentPath === '/search-farmers'
  const isProfile = currentPath === '/' || currentPath === '/search-projects' || currentPath === '/messages'
  const isChat = currentPath.startsWith('/chat/')
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
      {/* Tab bar */}
      <nav className="sticky bottom-0 z-10 border-t border-line bg-white">
        <div className="grid grid-cols-3 items-center px-[16px] py-[12px]">
          <button aria-label="ค้นหาเกษตรกร" onClick={() => onNavigate('/search-farmers')} className="flex w-full flex-col items-center gap-[4px]">
            <SearchIcon size={22} color={isSearch ? 'var(--primary)' : '#6B7280'} />
            <span className={`text-[12px] ${isSearch ? 'text-primary' : 'text-muted'}`}>ค้นหาเกษตรกร</span>
          </button>
          <button aria-label="โปรไฟล์" onClick={() => onNavigate('/')} className="flex w-full flex-col items-center gap-[4px]">
            <User size={22} color={isProfile ? 'var(--primary)' : '#6B7280'} />
            <span className={`text-[12px] ${isProfile ? 'text-primary' : 'text-muted'}`}>โปรไฟล์</span>
          </button>
          <button aria-label="แชท" onClick={() => onNavigate('/messages')} className="flex w-full flex-col items-center gap-[4px]">
            <MessageSquare size={22} color={isChat ? 'var(--primary)' : '#6B7280'} />
            <span className={`text-[12px] ${isChat ? 'text-primary' : 'text-muted'}`}>แชท</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
