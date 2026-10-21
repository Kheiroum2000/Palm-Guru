function Payment (){
 return (

    <section className="bg-[#F8F7F2] py-16 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">

        <h2 className="text-3xl font-bold text-[#173F35] mb-3">
          Unlock Your Palm Reading
        </h2>

        <p className="text-[#5F6B65] mb-6">
          Your palm image is confirmed! Continue to unlock
          your personalized palm reading.
        </p>

        <div className="bg-[#F8F7F2] rounded-xl p-6 mb-6">
          <p className="text-sm text-gray-500 mb-2">
            One-Time Payment
          </p>

          <h3 className="text-4xl font-bold text-[#173F35]">
            $9.99
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            No subscription required
          </p>
        </div>

        <button
          type="button"
          className="w-full bg-[#173F35] text-white py-3 rounded-xl font-semibold hover:bg-[#2F7D5B] transition-colors cursor-pointer"
        >
          Proceed to Payment
        </button>

        <p className="text-xs text-gray-400 mt-4">
          Payment integration coming soon
        </p>

      </div>
    </section>
  



 )
}

export default Payment