import Checkout from "./components/Checkout"
import Information from "./components/Information"
import Preview from "./components/Preview"

function App() {
  return (
    <div className="flex flex-col items-center justify-center font-display">
      <Checkout />
      <div className="flex mt-[50px] gap-[120px]">
        <Information />
        <Preview />
      </div>
    </div>
  )
}

export default App
