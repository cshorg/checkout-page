import { useState } from "react"
import Item from "./Item"

const Preview = () => {
  const [items, setItems] = useState([
    {
      name: "Vintage Backbag",
      price: "54.99",
      discount: "94.99",
      img: "/photo1.png",
      amount: "1"
    },
    {
      name: "Levi Shoes",
      price: "74.99",
      discount: "124.99",
      img: "/photo2.png",
      amount: "1"
    }
  ])

  const total = () => {
    let itemsTotal = 19

    for (let i = 0; i < items.length; i++) {
      itemsTotal += parseFloat(items[i].price)
    }

    return itemsTotal.toFixed(2)
  }

  return (
    <div className="flex flex-col justify-between w-[350px] lg:w-[383px] h-[535px] bg-lightGray rounded-xl p-[32px]">
      <div className="flex flex-col gap-[30px]">
        {items &&
          items.map((item, index) => (
            <Item
              key={index}
              label={item.name}
              price={item.price}
              discount={item.discount}
              img={item.img}
              items={items}
            />
          ))}
      </div>
      <div>
        <hr />
        <div className="py-[12px] flex items-center justify-between">
          <div className="text-[18px]">Shipping</div>
          <div className="text-[14px]">$19</div>
        </div>
        <hr />
        <div className="pt-[12px] flex items-center justify-between">
          <div className="text-[18px]">Total</div>
          <div className="text-[14px]">{total()}</div>
        </div>
      </div>
    </div>
  )
}

export default Preview
