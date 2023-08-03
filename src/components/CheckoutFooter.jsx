import { useState } from "react"

import { BsCheck } from "react-icons/bs"

const CheckoutFooter = () => {
  const [checkbox, setCheckbox] = useState(false)

  return (
    <div className="flex flex-col mt-[20px]">
      <div className="text-gray text-[12px] flex gap-[12px] items-center ">
        <div
          onClick={() => setCheckbox(!checkbox)}
          className={`text-orange w-[21px] flex items-center justify-center h-[21px] border-[1px] rounded-md border-gray cursor-pointer hover:opacity-90`}
        >
          {checkbox && <BsCheck size={18} />}
        </div>
        Save this information for next time
      </div>
      <div className="flex justify-end mt-[20px]">
        <button className="h-[54px] w-[166px] rounded-xl bg-orange text-white hover:opacity-90 ">
          Continue
        </button>
      </div>
    </div>
  )
}

export default CheckoutFooter
