import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import data from "./data/Quotes"
import Quote from "./components/Quote"

function App() {
  

  return (
    <div>
      <Navbar />
      {
        data.map( (item,index) => <Quote content={item.quote} author={item.author} />)
      }
      <Footer />
    </div>
  )
}

export default App
