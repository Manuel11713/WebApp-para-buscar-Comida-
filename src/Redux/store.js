import {createStore} from 'redux';

let initialState = {
    recetasHome:null,
    query:null
}

const reducerRecetas = (state=initialState,action)=>{
    if(action.type==='CAMBIAR_COMIDAS'){
        return({
            ...state,
            recetasHome:action.comidas
        })
    }
    return state
};


export default createStore(reducerRecetas);