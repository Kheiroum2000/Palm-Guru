import { useRef, useState } from "react"
import Home from "./Home"

function PalmUpload({paymentOption}){
    const [selectImage, setSelectImage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState(false)
    const [isImageConfirmed, setIsImageConfirmed] = useState(false)
    const reference = useRef(null)

    const handleChange = (e) => {
        setSelectImage(e.target.files[0])
        setIsImageConfirmed(false)
        setResult(false)
        paymentOption(false)
        
    }

    const submitBtn = () => {
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
            setResult(true)

        
        },3000)
    }

    const ImageConfirm = () => {
        setIsImageConfirmed(true)
        paymentOption(true)
    }

    const cancelBtn = () => {
        setSelectImage(null)
        reference.current.value = ""
        setIsImageConfirmed(false)
        paymentOption(false)

    }



    return (
        <>
        <section className="max-w-2xl mx-auto px-6 py-12 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mt-3">

        {!selectImage && <h4 className="text-[#173F35] text-xl font-semibold mb-6">Please select a clear Palm image</h4>}

        {!result &&
        <>
        {/*File input - Tailwind class */}
        <input className="block w-full text-sm text-gray-600 p-3 mb-5 cursor-pointer file:mr-4 file:rounded-md file:border-0 file:bg-[#173F35] file:px-4 file:py-2 file:text-white hover:file:bg-[#2F7D5B]"

        //function
        onChange={handleChange}

        //type
        type="file" accept="image/*"
        
        disabled={isLoading}
        ref={reference}>

        </input>
        </>}
        {/* end */}

            
        {selectImage && !result && !isLoading && <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer " onClick={cancelBtn}>Cancel</button>}

        {selectImage && !result && <>
        <img className="block max-w-75 h-auto rounded-xl border border-gray-200 my-5" src={URL.createObjectURL(selectImage)}></img>
        </>}

        {selectImage && isImageConfirmed && !result && !isLoading && <>
        <button className="px-5 py-2 rounded-lg bg-[#173F35] text-white hover:bg-[#2F7D5B]" onClick={submitBtn}>Submit</button>
        </>}
        

        { selectImage && !isImageConfirmed && !result &&
        <>
            <input className="mr-2 accent-[#2F7D5B]" type="checkbox" onChange={ImageConfirm}></input>
            <label className="text-gray-700 text-[15px]"> Do you confirm the Image? if not press Cancel button. </label>

            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer " onClick={cancelBtn}>Cancel</button>
        </> 
         }

        {isLoading && <h4 className="text-[#2F7D5B] font-medium mt-5">Analyzing your palm...</h4>}

        {result && <h4 className="text-[#173F35] font-semibold mt-5">Your palm reading is ready!</h4>}

        
        </section>

        </>
    )
}

export default PalmUpload