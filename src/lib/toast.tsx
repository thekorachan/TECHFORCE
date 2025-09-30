import { createContext, useContext, useState, ReactNode, useCallback } from 'react'

type Toast = { id: number; text: string }

const ToastCtx = createContext<{ show: (text: string) => void } | null>(null)

export function useToast() {
  const ctx = useContext(ToastCtx)
  if (!ctx) throw new Error('ToastProvider missing')
  return ctx
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<Toast[]>([])
  const show = useCallback((text: string) => {
    const id = Date.now()
    setList((l) => [...l, { id, text }])
    setTimeout(() => setList((l) => l.filter((t) => t.id !== id)), 1500)
  }, [])
  return (
    <ToastCtx.Provider value={{ show }}>
      {children}
      <div className="pointer-events-none fixed inset-0 z-50 flex items-end justify-center">
        <div className="mb-24 w-full max-w-[390px] px-16">
          {list.map((t) => (
            <div key={t.id} className="mb-8 rounded-[12px] bg-text px-16 py-12 text-center text-white shadow-elevated">
              {t.text}
            </div>
          ))}
        </div>
      </div>
    </ToastCtx.Provider>
  )
}
