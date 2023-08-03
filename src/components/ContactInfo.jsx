import Input from "./Input"

import { MdEmail, MdPhone } from "react-icons/md"

const ContactInfo = () => {
  return (
    <div className="mt-[50px]">
      <div className="text-[18px] text-gray">Contact information</div>
      <div className="mt-[15px]">
        <Input
          label={"E-mail"}
          placeholder={"Enter your email..."}
          icon={<MdEmail size={24} />}
        />
      </div>
      <div className="mt-[15px]">
        <Input
          label={"Phone"}
          placeholder={"Enter your phone..."}
          icon={<MdPhone size={24} />}
        />
      </div>
    </div>
  )
}

export default ContactInfo
