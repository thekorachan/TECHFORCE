type Props = { direction: 'in' | 'out'; text: string }

export default function ChatBubble({ direction, text }: Props) {
  const isOut = direction === 'out'
  return (
    <div className={`flex ${isOut ? 'justify-end' : 'justify-start'} w-full`}>
      <div
        className={
          (isOut
            ? 'bg-[#1D4ED8] text-white'
            : 'bg-white text-text shadow-subtle') +
          ' max-w-[80%] rounded-[14px] px-12 py-10 text-[14px] leading-[20px]'
        }
      >
        {text}
      </div>
    </div>
  )
}
