import { Link } from "react-router-dom"

function Header (){

 return (

    <>
    <header className="bg-[#F8F7F2] flex items-center justify-between px-8 py-5 border-b border-gray-200">

     <h1 className="text-3xl text-[#173F35] flex justify-center items-center py-1">The Palm Guru</h1>

      <nav className="text-base py-2 my-1 px-2 flex gap-8 text-[#374151]" >

        <Link className="hover:text-[#2F7D5B]" to="/">Home</Link>
        <Link className="hover:text-[#2F7D5B]" to="how-it-works">How it Works</Link>
        <Link className="hover:text-[#2F7D5B]" to="/about">About</Link>

      </nav>
      
    </header>
    </>



    )
}

export default Header