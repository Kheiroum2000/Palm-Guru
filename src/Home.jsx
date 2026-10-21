import PalmUpload from "./PalmUpload"
import Hero from "./Hero"
import Payment from "./Payment"
import { useState } from "react"


function Home ({heroData}){
    const [imageConfirm , setImageConfirm] = useState(false)

    const paymentOption = (status) => {
        setImageConfirm(status)
    }

    return(
        <>  
        <Hero title={heroData.title} description={heroData.description}/>

        <PalmUpload paymentOption={paymentOption}/>
        
        {imageConfirm && <Payment/>}
        
        </>
    )
}

export default Home