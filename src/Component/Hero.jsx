

export const Hero = () => {
    return (
      <>
          <div className="Hero w-full h-screen bg-gray-700 flex justify-center items-center text-white bg-[url('../assets/bg.avif')] bg-cover bg-center">
              <div className="searchBar">
                  <h1 className="text-center text-[100px] font-bold">Welcome .</h1>
                  <p className="text-[25px] text-center font-bold">Millions of movies, TV shows and people to discover. Explore now.</p>
                  <div className="searchbar   p-2 m-4 flex justify-center ">
                      <input type="text" placeholder="Search for a Movies or TV Shows...." className="w-[700px] bg-white pt-4 font-bold pb-4 pl-8 text-xl rounded-tl-[40px] rounded-bl-[40px]"/>
                      <button className="w-[200px] bg-white p-4 bg-red-700  border-r-5 rounded-tr-[40px] rounded-br-[40px] text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-50">Search</button>
                  </div>
              </div>    
          </div>
      </>
    )
  }
  