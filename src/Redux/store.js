import {createStore} from 'redux';

let initialState = {
    recetasHome:[]
}

const reducerRecetas = (state=initialState,action)=>{

    return state
};


export default createStore(reducerRecetas);