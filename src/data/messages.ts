export type Conversation = { id: string; name: string; last: string; time: string; avatar?: string }

export const conversations: Conversation[] = [
  { id: 'chiangmai-6', name: 'เบทการ เชียงใหม่ 6', last: "Hey, how’s it going?", time: '09:12', avatar: '/img/farmer1.svg' },
  { id: 'mit-odd', name: 'มิท ออด', last: 'เรามาคุยกันเร็วๆนี้', time: 'เมื่อวาน', avatar: '/img/farmer2.svg' },
  { id: 'farmer-a', name: 'เกษตรกร A', last: 'Let’s catch up soon', time: 'พฤ.', avatar: '/img/farmer3.svg' },
  { id: 'coop-cnx-4', name: 'โครงการสหกรณ์ เชียงใหม่ เฟส 4', last: 'Sounds good!', time: 'จ.', avatar: '/img/farmer4.svg' },
  { id: 'big-truck', name: 'บิ๊ก รถขนขยะย์ ยายใหญ่สามขุน', last: 'I’ll be there in 10', time: 'ส.', avatar: '/img/farmer5.svg' },
  { id: 'extend', name: 'โครงการขยาย', last: 'Can we reschedule?', time: 'ศ.', avatar: '/img/farmer6.svg' },
  { id: 'hilife', name: 'กลุ่มบริษัทไฮไลฟ์', last: 'I’m running late', time: 'ศ.', avatar: '/img/farmer7.svg' }
]
