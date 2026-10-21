function Hero (heroData){

return(

  <>
    <section className="bg-[#F8F7F2] px-6 py-20 text-center">

      <h2 className="text-center max-w-4xl mx-auto text-5xl text-[#173F35] font-bold mb-6">{heroData.title}</h2>
      <p className="text-[#5F6B65] text-lg leading-relaxed max-w-2xl mx-auto">{heroData.description}</p>
    
   </section>

  </>
  
 )
    
}

export default Hero