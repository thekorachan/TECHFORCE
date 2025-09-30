import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import InputRow from '../components/InputRow'
import MapTile from '../components/MapTile'
import { useToast } from '../lib/toast'

export default function FarmerProfileForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [area, setArea] = useState('')
  const [water, setWater] = useState('')
  const [crop, setCrop] = useState('')
  const [desc, setDesc] = useState('')
  const { show } = useToast()

  return (
    <div className="pb-[88px]">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-white">
        <div className="flex h-[52px] items-center justify-center px-16">
          <button aria-label="back" className="absolute left-16 text-muted">
            <ChevronLeft size={22} />
          </button>
          <h1 className="text-[16px] font-semibold">ข้อมูลเกษตรกร</h1>
        </div>
        <div className="divider" />
      </div>

      <div className="space-y-16 p-16">
        <InputRow label="ชื่อ - นามสกุล" value={name} onChange={setName} placeholder="" />
        <InputRow label="อีเมล" value={email} onChange={setEmail} placeholder="" />
        <InputRow label="เบอร์โทรศัพท์" value={phone} onChange={setPhone} placeholder="" />

        <div className="pt-8">
          <div className="pb-12 text-[14px] font-semibold">ที่ตั้งแปลงเพาะปลูก</div>
          <div className="space-y-16">
            <InputRow label="ขนาดพื้นที่ (ไร่)" value={area} onChange={setArea} placeholder="" />
            <InputRow label="แหล่งน้ำ" value={water} onChange={setWater} placeholder="" />
            <InputRow label="ประเภทพืช" value={crop} onChange={setCrop} placeholder="" />
            <InputRow label="คำอธิบาย" value={desc} onChange={setDesc} placeholder="" />
          </div>
        </div>

        <div>
          <div className="mb-8 text-[13px] text-muted">แผนที่</div>
          <MapTile alt="map" width={358} height={160} rounded={12} />
        </div>
      </div>

      {/* Sticky primary button */}
      <div className="fixed bottom-[72px] left-1/2 w-full max-w-[390px] -translate-x-1/2 px-16">
        <button
          onClick={() => show('บันทึกสำเร็จ')}
          className="h-[52px] w-full rounded-cta bg-primary text-[16px] font-semibold text-white shadow-subtle active:bg-primary-press"
        >
          บันทึกข้อมูล
        </button>
      </div>
    </div>
  )
}
