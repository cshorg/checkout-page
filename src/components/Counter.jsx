const Counter = ({ value, setAmount }) => {
  return (
    <div className="flex items-center justify-between w-[135px] h-[52px] border-[1px] border-gray rounded-xl p-[12px]">
      <div
        onClick={() => setAmount(value - 1)}
        className="cursor-pointer hover:opacity-90 w-[24px] h-[24px] bg-medGray rounded-lg flex items-center justify-center"
      >
        -
      </div>
      <div>{value}</div>
      <div
        onClick={() => setAmount(value + 1)}
        className="cursor-pointer hover:opacity-90 w-[24px] h-[24px] bg-medGray rounded-lg flex items-center justify-center"
      >
        +
      </div>
    </div>
  )
}

export default Counter
