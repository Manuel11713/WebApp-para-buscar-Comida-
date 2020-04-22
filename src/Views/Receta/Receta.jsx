import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Header from '../../Helpers/Header.jsx';


const Receta = ({id})=>{
    const [ingredientes,setIngredientes] = useState([]);
    //const [pasos,setPasos] = useState([]);
    useEffect(()=>{
        const fectData = async ()=>{
            let res1 = await axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=cbdf02b947dc4c3183ed95e3c59fa007`);
            //let res2 =  axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions`);
            console.log(res1.data.ingredients);
        }
        fectData();

    },[id]);
    return(
        <>
            <Header/>
        </>
    );
}

export default Receta;