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
        if(!status){
            setPaymentComplete(false)
        }
    }

    const FncPaymentSuccess = (x) => {
        setPaymentComplete(x)
    }

    return(
        <>  
        {!paymentComplete && <Hero title={heroData.title} description={heroData.description}/>}

        {!paymentComplete &&<PalmUpload paymentOption={paymentOption}/>}
        
        {imageConfirm && !paymentComplete && <Payment FncPaymentSuccess={FncPaymentSuccess}/>}

        {paymentComplete && <PalmReading/>}

        
        </>
    )
}

export default Home