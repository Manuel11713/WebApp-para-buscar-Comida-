import {createStore} from 'redux';

let initialState = {
    recetasHome:null,
    query:null, //Query del buscador
    nombreUsuario:null
}

const reducerRecetas = (state=initialState,action)=>{
    if(action.type==='CAMBIAR_COMIDAS'){
        return({
            ...state,
            recetasHome:action.comidas
        });
    }
    if(action.type==='CAMBIAR_NOMBRE'){
        
        return({
            ...state,
            nombreUsuario:action.usuario
        });
    }
    return state
};


export default createStore(reducerRecetas);