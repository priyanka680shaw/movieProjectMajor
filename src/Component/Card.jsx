

export const Card = ({movieItem}) => {
    //console.log("movieItem" , movieItem)
   
    return (
        <>
            
                <div className="cardContainer m-2 h-[450px] border-2 border-black ">
                    <div className="card w-[300px] h-[400px] relative">
                        {/* poster */}
                        <img src= {`https://image.tmdb.org/t/p/original/${movieItem.backdrop_path}`} alt="picture" className='w-[300px] h-[375px] ' />
                        {/* card details */}
                        <div className='outerpart bg-red-400'>
                            <div className='topBox absolute bottom-0 flex w-[300px] justify-between'>
                                <div className="rating w-[50px] h-[50px] bg-red-100 rounded-[50%] flex justify-center items-center ">
                                    <p className='font-bold text-green-900 text-lg'>{movieItem.vote_average
}</p>
                                </div>
                                
                            </div>
                            {/* bottom box */}
                            <h1 className='text-end font-bold pr-4 text-green-900 text-lg pr-2'>{movieItem.title}</h1>
                            <p className='text-end font-bold pr-4 text-green-900 text-lg pr-2'>{movieItem.release_date
}</p>
                        </div>
                    </div>
                </div>
        </>
    )
}
