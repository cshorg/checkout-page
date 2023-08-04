import Input from "./Input"

import { BiSolidUserCircle, BiSolidCity, BiWorld } from "react-icons/bi"
import { MdMarkunreadMailbox } from "react-icons/md"
import { TiHome } from "react-icons/ti"

const Shipping = () => {
  return (
    <div className="mt-[60px]">
      <div className="text-[18px] text-gray">Shipping address</div>
      <div className="flex flex-col gap-[15px] mt-[15px]">
        <Input
          label={"Full name"}
          placeholder={"Your name..."}
          icon={<BiSolidUserCircle size={24} />}
        />
        <Input
          label={"Address"}
          placeholder={"Your address..."}
          icon={<TiHome size={24} />}
        />
        <Input
          label={"City"}
          placeholder={"Your city..."}
          icon={<BiSolidCity size={24} />}
        />
        <div className="flex gap-[31px]">
          <Input
            label={"Country"}
            placeholder={"Your country..."}
            icon={<BiWorld size={24} />}
          />
          <Input
            label={"Postal code"}
            placeholder={"Your postal code..."}
            icon={<MdMarkunreadMailbox size={24} />}
          />
        </div>
      </div>
    </div>
  )
}

export default Shipping
