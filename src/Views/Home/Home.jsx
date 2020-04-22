import React,{useEffect,useState} from 'react';

import Header from '../../Helpers/Header.jsx';
import Comidas from '../../Helpers/Comidas.jsx';
import axios from 'axios';
const Home = ({cambiarComidas}) =>{
    const [comidas,setComidas] = useState(null);
    useEffect(()=>{
        const fetchComidas =async ()=>{
            let comidas = await axios.get('https://api.spoonacular.com/recipes/random?number=20&apiKey=cbdf02b947dc4c3183ed95e3c59fa007');
            setComidas(comidas.data.recipes);
        }
        fetchComidas();
    },[cambiarComidas]);
    return(
        <>
            <Header setComidas={setComidas}/>
            <Comidas comidas={comidas}/>
        </>
    );
}


export default Home;