type Props = {
  label: string
  placeholder?: string
  value: string
  onChange: (v: string) => void
  type?: string
}

export default function InputRow({ label, placeholder, value, onChange, type = 'text' }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <label className="text-[13px] text-muted">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-[44px] rounded-[12px] border border-line px-[14px] text-[14px] outline-none focus:border-primary"
      />
    </div>
  )
}
