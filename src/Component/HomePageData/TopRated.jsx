import React, { useEffect, useReducer } from 'react'
import { ApiFetch } from '../../Utils/ApiFetch';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../Card';
import { setToprated } from '../../Redux/Reducer/Movie.Reducer';
import { NavLink } from 'react-router-dom';


export const TopRated = () => {

    /********************************tokens********************************/
    const ApiKey = import.meta.env.VITE_APP_TOKEN;
    const AccessToken = import.meta.env.VITE_APP_ACCESS_TOKEN;

    /****************************************************************/

    const initialState = "movie";
    function reducer(state, action) {
        switch (action.type) {
            case "movie":
                return state = "movie";
            case "tv":
                return state = "tv";
            default: state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    //console.log("state" ,state)

    /********************************Fatching Api For TopRatedd********************************/

    async function topRatedData() {
        const topRatedDataResult = await ApiFetch(`https://api.themoviedb.org/3/${state}/top_rated`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${AccessToken}`
            }
        })
        //console.log("data",topRatedDataResult.data.results);
        //adding data into redux topRated
        Dispatch(setToprated(topRatedDataResult.data.results))
    }

    /****************************************************************/
    /*****************************useEffect for first time calling data***********************************/
    useEffect(() => {
        topRatedData()

    }, [state])

    /****************************************************************/
    /******************************Redux**********************************/
    const Dispatch = useDispatch();

    const topRatedata = useSelector((state) => state.Movie1stPage.topRated)
    console.log("redux", topRatedata
    )
    /****************************************************************/


    return (
        <>
            <div>
                <div className='topSection flex justify-between p-4'>

                    <h1 className='text-3xl font-bold text-white'>Toprated</h1>
                    <div className=''>
                        <button className='border-2 border-red-900 p-2 bg-green-300 mr-4 rounded font-bold text-xl text-red-700'
                            onClick={() => {
                                dispatch({ type: "movie" })
                            }}>Movies</button>
                        <button className='border-2 border-red-900 p-2 bg-green-300 mr-4 rounded font-bold text-xl text-red-700'
                            onClick={() => {
                                dispatch({ type: "tv" })
                            }}>TV Shows</button>
                    </div>

                </div>
                <div className='cardDisplay'>
                    <div className='flex w-full overflow-x-auto overflow-y-hidden  m-auto  '>
                        {
                            topRatedata && topRatedata.map((items, indx) => {

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
