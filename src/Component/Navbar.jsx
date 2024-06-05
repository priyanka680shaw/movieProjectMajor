import logo from '../assets/logo.svg'

export const Navbar = () => {
  return (
    <>
        <nav className='sticky top-0 z-40'>
            <div className="w-full p-4 bg-black opacity-30 text-white">
                <div className="w-4/5 flex justify-between items-center m-auto ">
                    <div className='logo hover:cursor-pointer'>  
                        <img src={logo} alt='movie Logo'/>
                    </div>
                    <div className='right flex'>
                        <button className='mr-4 text-bold text-xl pl-4 pr-4 pt-2 pb-2 bg-slate-700 rounded hover:text-red-900 hover:cursor-pointer hover:bg-red-300'>Movie</button>
                        <button className='mr-4 text-bold text-xl pl-4 pr-4 pt-2 pb-2 bg-slate-700 rounded hover:text-red-900 hover:cursor-pointer hover:bg-red-300'>Tv Shows</button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}
