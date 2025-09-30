export type Project = { id: string; name: string; description: string; matched?: boolean }

export const projects: Project[] = [
  { id: 'p1', name: 'บริษัท เบทเกิร์ท', description: 'โครงการรับซื้อผลผลิตมาตรฐาน', matched: true },
  { id: 'p2', name: 'กลุ่มมิชรaka – MIhr Phol Group', description: 'สร้างมูลค่าเพิ่มให้ชุมชน', matched: true },
  { id: 'p3', name: 'บริษัท ไทราว จำกัด (มหาชน)', description: 'สนับสนุนเกษตรกรไทย', matched: true },
  { id: 'p4', name: 'บริษัท ออฆ่าแสดงสินค้าเกษตรำ จำกัด', description: 'เครือข่ายซัพพลายเชน', matched: true }
]

export function filterProjects(list: Project[], q: string) {
  const s = q.trim().toLowerCase()
  if (!s) return list
  return list.filter((p) => (p.name + ' ' + p.description).toLowerCase().includes(s))
}
