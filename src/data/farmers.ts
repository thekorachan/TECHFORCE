export type Farmer = {
  id: string
  name: string
  summary: string
  avatar?: string
  field?: string
  matched?: boolean
}

export const farmers: Farmer[] = [
  { id: '1', name: 'Mr. Nick Kaifreefire', summary: 'ข้าวโพด • เชียงใหม่', avatar: '/img/farmer1.svg', field: '/img/field1.svg', matched: true },
  { id: '2', name: 'Ms. Ploy Green', summary: 'ลำไย • ลำพูน', avatar: '/img/farmer2.svg', field: '/img/field2.svg', matched: false },
  { id: '3', name: 'คุณ สมชาย', summary: 'ข้าว • พะเยา', avatar: '/img/farmer3.svg', field: '/img/field3.svg', matched: true },
  { id: '4', name: 'คุณ สมหญิง', summary: 'ผักสลัด • เชียงราย', avatar: '/img/farmer4.svg', field: '/img/field4.svg', matched: false }
]

export function filterFarmers(list: Farmer[], q: string) {
  const s = q.trim().toLowerCase()
  if (!s) return list
  return list.filter((f) => (f.name + ' ' + f.summary).toLowerCase().includes(s))
}
