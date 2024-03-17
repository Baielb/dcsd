import React from 'react'
import Header from './components/Pages/Header/Header'
import Footer from './components/Pages/Footer/Footer'
import Seac3 from './components/Pages/Seac3/Seac3'
import Seac1 from './components/Pages/Seac1/Seac1'
import Seac2 from './components/Pages/Seac2/Seac2'
import Seac4 from './components/Pages/Seac4/Seac4'

const App = () => {
  return (
    <div>
      <Header />
      <Seac1 />
      <Seac2 />
      <Seac3/>
      <Seac4 />
      <Footer />
    </div>
  )
}

export default App
