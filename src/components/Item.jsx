import { useState } from "react"
import Counter from "./Counter"

const Item = ({ label, price, discount, img, items }) => {
  const [amount, setAmount] = useState(1)

  return (
    <div className="flex">
      <img className="max-w-[135px] rounded-xl" src={img} alt="image" />

      <div className="ml-[25px] flex flex-col justify-between">
        <div>
          <div className="text-gray">{label}</div>
          <div className="flex items-center gap-[10px] mt-[5px]">
            <div className="text-orange">{"$" + price}</div>
            <div className="text-gray text-[12px]">
              <s>{"$" + discount}</s>
            </div>
          </div>
        </div>
        <Counter value={amount} setAmount={setAmount} />
      </div>
    </div>
  )
}

export default Item
