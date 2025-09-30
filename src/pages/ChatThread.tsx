import { ChevronLeft, Circle, Paperclip, Send } from 'lucide-react'
import ChatBubble from '../components/ChatBubble'

export default function ChatThread() {
  return (
    <div className="pb-[84px]">
      <div className="sticky top-0 z-10 bg-white">
        <div className="flex h-[52px] items-center justify-center px-16">
          <button aria-label="back" className="absolute left-16 text-muted">
            <ChevronLeft size={22} />
          </button>
          <div className="flex items-center gap-8">
            <span className="text-[16px] font-semibold">เบทการ เชียงใหม่ 6</span>
            <Circle size={8} className="text-primary" />
          </div>
        </div>
        <div className="divider" />
      </div>

      <div className="space-y-8 p-16">
        <ChatBubble direction="in" text="สวัสดีค่ะ บริษัทของเรามีโครงการมาตรฐานพืชเศรษฐกิจ ‘รับซื้อเกษตรผ่านสัญญา’ และมีผู้เชี่ยวชาญ ดูแลตอนการปลูก เพื่อให้มีผลผลิต" />
        <div className="text-center text-[11px] text-muted">10:01</div>
        <ChatBubble direction="out" text="น่าสนใจ แต่กังวลว่าถ้าปลูกแล้ว ‘คุณภาพไม่คงที่มาตรฐาน’ จะทำได้ไหม?" />
        <div className="text-center text-[11px] text-muted">10:04</div>
        <ChatBubble direction="in" text="เราจะทำงานร่วมกับคุณ เพื่อให้ได้คุณภาพตามเงื่อนไขมาตรฐานค่ะ" />
        <ChatBubble direction="out" text="น่าสนใจมากครับ งั้นนัดทีมมาประชุมสรุปกันได้เลย" />
        <ChatBubble direction="in" text="ได้ค่ะ" />
      </div>

      <div className="fixed bottom-[72px] left-1/2 z-10 w-full max-w-[390px] -translate-x-1/2 px-16">
        <div className="flex items-center gap-8 rounded-full border border-line bg-white px-12 py-8 shadow-subtle">
          <span className="text-[14px] text-muted">ข้อความ</span>
          <div className="flex-1" />
          <Send size={18} className="text-primary" />
          <Paperclip size={18} className="text-muted" />
        </div>
      </div>
    </div>
  )
}
