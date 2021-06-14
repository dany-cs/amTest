import { useReducer, createContext } from 'react'
import MainReducer from './reducer'
import {
    SET_FAVORITES
} from './constants'

const initialState = {
    favorites: [],
}

const MainContext = createContext();

const MainState = (props) => {
    const [state, dispatch] = useReducer(MainReducer, initialState)


    const setFavorite = (item) => {
        dispatch({
            type: SET_FAVORITES,
            payload: item
        })
    }

    const value = {
        ...state,
        setFavorite
    }

    return (
        <MainContext.Provider value={value}>
            {props.children}
        </MainContext.Provider>
    )
}
export { MainContext };
export default MainState;