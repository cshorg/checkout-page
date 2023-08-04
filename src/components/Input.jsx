const Input = ({ label, icon, placeholder }) => {
  return (
    <div className="text-gray">
      <label className="text-[12px] ">{label}</label>
      <div className="relative text-[16px]">
        <div className="absolute top-5 left-3">{icon}</div>
        <input
          className="mt-[4px] text-[12px] lg:text-[16px] w-full outline-none text-gray border-[1px] h-[56px] pl-[44px] rounded-xl border-gray"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default Input
