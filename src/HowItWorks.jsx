function HowItWorks (){
    return(
        <>
        <section className="bg-[#F8F7F2] min-h-screen px-6 py-16">
            <div className= "max-w-4xl mx-auto">

                <h1 className="text-4xl font-bold text-[#173F35] mb-10">How it Works.</h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-[#173F35] mb-3">1. Upload your Palm Image:</h2>
                        <p className="text-[#5F6B65] leading-relaxed">
                        Upload a clear image of your palm.
                        </p>
                    </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-[#173F35] mb-3">2. Confirm Your Image</h2>
                        <p className="text-[#5F6B65] leading-relaxed">
                        Review the image and confirm it before submitting.
                        </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

                    <h2 className="text-xl font-semibold text-[#173F35] mb-3">3. Complete Payment</h2>
                        <p className="text-[#5F6B65] leading-relaxed">
                        Pay to unlock your palm reading.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

                    <h2 className="text-xl font-semibold text-[#173F35] mb-3">4. Get Your Reading</h2>
                        <p className="text-[#5F6B65] leading-relaxed">
                        Palm Guru processes the image and displays your result</p>
                </div>

                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#173F35] mb-4">
                    See How Palm Reading Works
                    </h2>

                <video className="w-full rounded-2xl shadow-sm border border-gray-200" controls preload="metadata">

                <source src="/palm-reading-demo.mp4" type="video/mp4" />
                Your browser does not support video playback.

                </video>

                </div>

            </div>

        </section>

        </>
    )
}
export default HowItWorks