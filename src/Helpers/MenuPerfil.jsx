import React from 'react';
import {Popover,Button} from 'antd';
import {UserOutlined} from '@ant-design/icons'
import {connect} from 'react-redux';

const MenuPerfil = ({nombreUsuario,setNombreUsuario})=>{

    const content = (
        <div>
            <p>Ver perfil</p>
            <p>Otra acción</p>
            <Button onClick={()=>{localStorage.removeItem('token');localStorage.removeItem('usuario');setNombreUsuario(null);}}>Salir</Button>
        </div>
    );


    return(
    <Popover content={content} title={nombreUsuario} placement="bottom" >
        <Button shape="circle"><UserOutlined/></Button>
    </Popover>
    );

}
const dispathToProps = dispath=>{
    return({setNombreUsuario(nombreUsuario){
        dispath({
            nombreUsuario,
            type:'CAMBIAR_NOMBRE'
        });
    }});
}

export default connect(null,dispathToProps)(MenuPerfil);