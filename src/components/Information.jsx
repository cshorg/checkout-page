import CheckoutFooter from "./CheckoutFooter"
import ContactInfo from "./ContactInfo"
import Shipping from "./Shipping"

const Information = () => {
  return (
    <div className="w-[465px]">
      <ContactInfo />
      <Shipping />
      <CheckoutFooter />
    </div>
  )
}

export default Information
