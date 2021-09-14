import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

/* COMPONENTS */
import Header from './Components/Header'
import Models from './Components/Models'
AOS.init()
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Models></Models>
    </div>
  )
}

export default App
