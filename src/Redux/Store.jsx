import {configureStore} from '@reduxjs/toolkit'
import { Movie1stPage } from './Reducer/Movie.Reducer'
//importing reducers

export const createStore = configureStore({
    reducer : {
        Movie1stPage,
    }
})