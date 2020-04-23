import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../../Helpers/Header.jsx';

import {CheckOutlined} from '@ant-design/icons'
import {Col,Row,Breadcrumb,List,Button,Typography} from 'antd';

const Receta = ({id,comidas})=>{
    const [ingredientes,setIngredientes] = useState([]);
    const [instrucciones,setInstrucciones] = useState([]);
    useEffect(()=>{
        const fectData = async ()=>{
            let res1 = await axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=cbdf02b947dc4c3183ed95e3c59fa007`);
            let res2 = await axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=cbdf02b947dc4c3183ed95e3c59fa007`);
            setIngredientes(res1.data.ingredients);
            if(res2.data[0]===undefined)setInstrucciones(null);
            else setInstrucciones(res2.data[0].steps);
            
        }
        fectData();
    },[id]);
    console.log(comidas)
    if(!comidas)return <Redirect to='/'/>
    id = Number(id);
    let comida = comidas.find(comida=>comida.id===id);
    console.log(comida)
    if(!comida)return <Redirect to='/'/>
    return(
        <>
            <Header/>
            <Breadcrumb style={{padding:30}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Recetas</Breadcrumb.Item>
                <Breadcrumb.Item>{comida.title}</Breadcrumb.Item>
            </Breadcrumb>
            <Row style={{padding:"0 50px 50px 50px"}}>
                <Col xs={24}>
                    <Row justify={"center"}>
                        <img alt={comida.Title} src={comida.image}/>
                    </Row>
                </Col>
                <Col xs={24}>
                    <List
                        header={<div>Lista de Ingredientes</div>}
                        itemLayout="horizontal"
                        dataSource={ingredientes}
                        renderItem={ingre => (
                        <List.Item key={ingre.name} >
                            <List.Item.Meta
                            avatar={<Button type="primary"  shape="circle"><CheckOutlined /></Button>}
                            title={<Typography.Text >{ingre.name}</Typography.Text>}
                            />
                        </List.Item>
                        )}
                    />
                    {!instrucciones?<div>No hay instrucciones para esta Receta</div>:
                    <List
                        header={<div>Instrucciones</div>}
                        itemLayout="horizontal"
                        dataSource={instrucciones}
                        renderItem={instruc => (
                        <List.Item key={instruc.number}  >
                            <List.Item.Meta
                            avatar={<Button type="danger"  shape="circle"><CheckOutlined /></Button>}
                            title={<Typography.Text >{instruc.step}</Typography.Text>}
                            />
                        </List.Item>
                        )}
                    />}
                </Col>
            </Row>
        </>
    );
}
const stateToProps=state=>{
    return({
        comidas:state.recetasHome
    })
}

export default connect(stateToProps,null)(Receta);