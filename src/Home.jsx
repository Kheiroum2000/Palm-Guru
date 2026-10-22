import PalmUpload from "./PalmUpload"
import Hero from "./Hero"
import Payment from "./Payment"
import PalmReading from "./PalmReading"
import { useState } from "react"


function Home ({heroData}){
    const [imageConfirm , setImageConfirm] = useState(false)
    const [paymentComplete, setPaymentComplete] = useState(false)


    // Functions
    const paymentOption = (status) => {
        setImageConfirm(status)
    }

    const FncPaymentSuccess = (x) => {
        setPaymentComplete(x)
    }

    return(
        <>  
        <Hero title={heroData.title} description={heroData.description}/>

        <PalmUpload paymentOption={paymentOption}/>
        
        {imageConfirm && !paymentComplete && <Payment FncPaymentSuccess={FncPaymentSuccess}/>}

        {paymentComplete && <PalmReading/>}

        
        </>
    )
}

export default Home