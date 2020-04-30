import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Col,Row,Menu,Typography,Input, Button} from 'antd';
import {DownOutlined } from '@ant-design/icons'
import imagen from '../Complementos/comida.svg';
import { Link } from 'react-router-dom';
import MenuPefil from './MenuPerfil.jsx';
const Header = ({setComidas,nombreUsuario}) =>{
    const buscar=value=>{
        console.log(value)
        axios.get(`https://api.spoonacular.com/recipes/search?query=${value}&number=20&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(res=>{
                console.log(res.data.results);
                let resetas = res.data.results;
                resetas = resetas.map(reseta=>{
                    reseta.image = `https://spoonacular.com/recipeImages/${reseta.image}`;
                    return(reseta);
                });
                setComidas(resetas);
                
            });      
    }
    
    return(
        <Row style={{padding:'20px 50px',boxShadow: '0 2px 8px #f0f1f2'}}>
            <Col xs={8} sm={4} md={2}  ><Link to="/"><img height={50} src={imagen} alt="logo empresa"/></Link></Col>
            <Col xs={10} sm={6} md={4}>
                <Row align="middle" style={{height:"100%"}}>
                    <Typography.Title level={3} style={{margin:0}}  >Fishing Food</Typography.Title>
                </Row>
            </Col>
            <Col xs={0} sm={10} md={6} xl={6}>
                <Row align="middle" style={{height:"100%"}}>
                    <Input.Search
                        placeholder="solo busquedas en ingles"
                        onSearch={value=>{buscar(value)}}
                        style={{ width: '100%' }}
                    />
                </Row>
            </Col>
            <Col xs={0} xl={9} style={{paddingLeft:20}}>
                <Row>
                    <Menu mode="horizontal" defaultSelectedKeys={['inicio']} >
                        <Menu.Item key="inicio">
                            <Link to="/">
                            Inicio
                            </Link>
                        </Menu.Item>
                        
                        <Menu.Item key="direccion2">
                            <Link to="/ruta/2">
                            Direccion 2
                            </Link>
                        </Menu.Item>
                        
                        <Menu.Item key="direccion3">
                            <Link to="/ruta/3">
                            Direccion 3
                            </Link>
                        </Menu.Item>
                        
                        <Menu.Item key="direccion4">
                            <Link to="/ruta/4">
                            Direccion 4
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Row>
            </Col>
            <Col xs={2} xl={0} style={{paddingLeft:20}}>
                <Row align="middle" style={{height:"100%"}}>
                    <Button  shape="circle">
                        <DownOutlined />
                    </Button>
                </Row>
            </Col>
            <Col xs={1} style={{paddingLeft:20}}>
                <Row align="middle" style={{height:"100%"}}>

                    {nombreUsuario? 
                    <MenuPefil nombreUsuario={nombreUsuario}/>:
                    <Link to="/signUp">
                        <Button type="primary">
                            Login
                        </Button>
                    </Link>}

                </Row>
            </Col>
        </Row>
    );
}
const dispatchToProps = dispatch =>{
    return({
        setComidas(comidas){
            dispatch({
                comidas,
                type:'CAMBIAR_COMIDAS'
            });
        },
        setNombreUsuario(nombreUsuario){
            dispatch({
                nombreUsuario,
                type:'CAMBIAR_NOMBRE'
            });
        }
    });
}
const stateToProps=state=>{
    return({
        nombreUsuario:state.nombreUsuario
    });
}
export default connect(stateToProps,dispatchToProps)(Header);