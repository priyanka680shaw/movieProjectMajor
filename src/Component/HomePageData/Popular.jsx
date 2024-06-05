
import { useReducer , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux"
import { setwhatsPopular } from "../../Redux/Reducer/Movie.Reducer"
import { ApiFetch } from "../../Utils/ApiFetch";
import { Card } from "../Card";

export const Popular = () => {

  /********************************tokens********************************/  
  const ApiKey = import.meta.env.VITE_APP_TOKEN;
  const AccessToken = import.meta.env.VITE_APP_ACCESS_TOKEN;

/****************************************************************/

const initialState = "movie";
function reducer(state  ,action){
  switch(action.type){
      case "movie" : 
          return state =  "movie";
      case "tv" :
          return state= "tv";
      default  : state
  }
}

const [state , dispatch] = useReducer(reducer  , initialState)
console.log("state" ,state)

/********************************Fatching Api For TopRatedd********************************/  

 async function populargDataFun(){
      const result = await ApiFetch(`https://api.themoviedb.org/3/${state}/popular` , {
          headers : {
              accept: 'application/json',
              Authorization : `Bearer ${AccessToken}`
          }  
      })
    console.log("poplur",result.data.results);
      //adding data into redux topRated
     // Dispatch(setwhatsPopular(result.data.results)) 
      Dispatch(setwhatsPopular(result.data.results)) 
  }

/****************************************************************/  
/*****************************useEffect for first time calling data***********************************/  
  useEffect(()=>{
    populargDataFun()
      
  } , [state])

/****************************************************************/
/******************************Redux**********************************/    
const Dispatch = useDispatch();

const popularData = useSelector((state)=>state.Movie1stPage.popular)
console.log("redux" , popularData)
/****************************************************************/  



return (
  <>
     <div>
      <div className='topSection flex justify-between p-4'>
   
        <h1 className='text-3xl font-bold text-white'>What's Popular</h1>
         <div className=''>
              <button className='border-2 border-red-900 p-2 bg-green-300 mr-4 rounded font-bold text-xl text-red-700' 
              onClick={()=>{
                  dispatch({type : "movie"})
              }}>Movies</button>
              <button className='border-2 border-red-900 p-2 bg-green-300 mr-4 rounded font-bold text-xl text-red-700'
              onClick={()=>{
                  dispatch({type : "tv"})
              }}>TV Shows</button>
         </div>
   
      </div>
      <div className='cardDisplay'>
      <div className='flex w-full overflow-x-auto overflow-y-hidden  m-auto '>
      {
              popularData && popularData.map((items , indx)=>{
                  
                  return(
                     // <NavLink to = "#" key={items.id}>

                          <Card movieItem = {items}  key={items.id}/>
                         
                    //  </NavLink>
                  )
              })
          }
      </div>
         
      </div>
  </div>
  </>
)

}








