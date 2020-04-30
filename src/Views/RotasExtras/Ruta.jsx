import React from 'react';

import Header from '../../Helpers/Header.jsx';

const Ruta = ({id}) =>{
    return(
        <>
        <Header/>
        <div>
            Ruta: {id} 
        </div>
        </>
    );
}

export default Ruta;