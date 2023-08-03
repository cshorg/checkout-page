import Checkout from "./components/Checkout"
import Information from "./components/Information"

function App() {
  return (
    <div className="font-display flex items-center flex-col justify-center">
      <Checkout />
      <div>
        <Information />
      </div>
    </div>
  )
}

export default App
