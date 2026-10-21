import Header from './Header.jsx'
import Hero from './Hero.jsx'
import PalmUpload from './PalmUpload.jsx'
import About from './About.jsx'
import { Routes , Route } from 'react-router-dom'
import HowItWorks from './HowItWorks.jsx'
import Home from './Home.jsx'

function App (){
  const heroData =
   {title: "Discover What Your Palm Reveals!",
    description: "Explore the traditional art of palm reading."
   }
  return (
    <>
    <Header/>

    <Routes>
      
    <Route path='/' element={ 
            <>
            <Home heroData={heroData}/>

            </>
          }
           />
    
    <Route path='/about' element={
      <About/>
    }
    />

    <Route path='/how-it-works' element={<HowItWorks/>}
    />

    </Routes>


    </>
  )
}


export default App