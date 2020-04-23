import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import Header from '../../Helpers/Header.jsx';
import Comidas from '../../Helpers/Comidas.jsx';
import axios from 'axios';
const Home = ({setComidas}) =>{
    setComidas(null);
    useEffect(()=>{
        const fetchComidas =async ()=>{
            let comidas = await axios.get('https://api.spoonacular.com/recipes/random?number=20&apiKey=cbdf02b947dc4c3183ed95e3c59fa007');
            setComidas(comidas.data.recipes);
        }
        fetchComidas();
    },[setComidas]);
    return(
        <>
            <Header />
            <Comidas />
        </>
    );
}
const dispatchToProps = dispatch =>{
    return({
        setComidas(comidas){
            dispatch({
                comidas,
                type:"CAMBIAR_COMIDAS"
            })
        }
    });
}

export default connect(null,dispatchToProps)(Home);