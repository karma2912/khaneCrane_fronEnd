import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Page1 from './components/pages/Page1'
import Page2 from './components/pages/Page2'
import Page3 from './components/pages/Page3'
import Page4 from './components/pages/Page4'

function App() {

  return (
    <>
    <div>
     <Navbar/>
     <div className=''>
     <Page1/>
     <Page2/>
     <Page3/>
     <Page4/>
     <Footer/>
     </div>
     </div>
    </>
  )
}

export default App
