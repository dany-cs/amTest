import {
    SET_FAVORITES
} from './constants'

const Reducer = (state, action) => {
    switch (action.type){

        case SET_FAVORITES:{
            if(state.favorites.length<5){
                const newFav = [...state.favorites];
                newFav.push(action.payload)
                return {
                    ...state,
                    favorites:newFav
                }
            }else{
                return {
                    ...state
                }
            }
        }
        default:{

        }
    }

}
export default Reducer;
