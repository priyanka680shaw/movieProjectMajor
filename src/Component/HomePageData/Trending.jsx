
import { useReducer, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setTreanding } from "../../Redux/Reducer/Movie.Reducer"
import { ApiFetch } from "../../Utils/ApiFetch";
import { Card } from "../Card";

export const Trending = () => {


  /********************************tokens********************************/
  const ApiKey = import.meta.env.VITE_APP_TOKEN;
  const AccessToken = import.meta.env.VITE_APP_ACCESS_TOKEN;

  /****************************************************************/

  const initialState = "day";
  function reducer(state, action) {
    switch (action.type) {
      case "day":
        return state = "day";
      case "week":
        return state = "week";
      default: state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  console.log("state", state)

  /********************************Fatching Api For TopRatedd********************************/

  async function trendingDataFun() {
    const result = await ApiFetch(`
      https://api.themoviedb.org/3/trending/movie/${state}`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AccessToken}`
      }
    })
    console.log("trending", result.data.results);
    //adding data into redux topRated
    Dispatch(setTreanding(result.data.results))
  }

  /****************************************************************/
  /*****************************useEffect for first time calling data***********************************/
  useEffect(() => {
    trendingDataFun()

  }, [state])

  /****************************************************************/
  /******************************Redux**********************************/
  const Dispatch = useDispatch();

  const trendingData = useSelector((state) => state.Movie1stPage.treanding)
  console.log("redux", trendingData)
  /****************************************************************/

  {
    return (
      <>
        <div>
          <div className='topSection flex justify-between p-4'>

            <h1 className='text-3xl font-bold text-white'>Toprated</h1>
            <div className=''>
              <button className='border-2 border-red-900 p-2 bg-green-300 mr-4 rounded font-bold text-xl text-red-700'
                onClick={() => {
                  dispatch({ type: "day" })
                }}>Day</button>
              <button className='border-2 border-red-900 p-2 bg-green-300 mr-4 rounded font-bold text-xl text-red-700'
                onClick={() => {
                  dispatch({ type: "week" })
                }}>Week</button>
            </div>

          </div>
          <div className='cardDisplay'>
            <div className='flex w-full overflow-x-auto overflow-y-hidden  m-auto  '>
              {
                trendingData && trendingData.map((items, indx) => {

                  return (
                    // <NavLink to = "#" key={items.id}>

                    <Card movieItem={items} key={items.id} />

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
}