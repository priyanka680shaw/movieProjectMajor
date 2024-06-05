import { createBrowserRouter , createRoutesFromElements, Route , RouterProvider } from "react-router-dom"
import { Layout } from "./Component/Layout"
import { Movie } from "./Component/Movie"
import { TvShows } from "./Component/TvShows"
import { Hero } from "./Component/Hero"
import { Home } from "./Component/Home"
import ToggleButton from "./Component/Button"
function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Layout/>}>
        <Route path="" element ={<Home/>}/>
        <Route path="movie" element = {<Movie/>}/>
        <Route path="tvShows" element = {<TvShows/>}/>
    </Route>
  )
)
//console.log(import.meta.env.VITE_APP_APIKEY)
//console.log(import.meta.env.VITE_APP_ACCESS_TOKEN)
  return (
    <>
  

      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
