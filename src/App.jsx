import Checkout from "./components/Checkout"
import Information from "./components/Information"
import Preview from "./components/Preview"

function App() {
  return (
    <div className="flex flex-col items-center justify-center font-display">
      <Checkout />
      <div className="px-[13px] lg:px-0 grid grid-cols-1 lg:grid-cols-2 mt-[50px] gap-[40px] lg:gap-[120px]">
        <div className="mb-[30px] lg:mb-0">
          <Information />
        </div>
        <div className="row-start-1 lg:row-auto">
          <Preview />
        </div>
      </div>
    </div>
  )
}

export default App
