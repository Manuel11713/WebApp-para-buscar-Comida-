import React from 'react';
import {Row,Col,Typography} from 'antd';
import imagen from '../Complementos/comida.svg';
import { Link } from 'react-router-dom';
const HeaderLogin = () =>(
    <Row style={{padding:'20px 50px',boxShadow: '0 2px 8px #f0f1f2',background:'#fff'}}  >
        <Col xs={8} sm={4} md={2}  ><Link to="/"><img height={50} src={imagen} alt="logo empresa"/></Link></Col>
        <Col xs={10} sm={6} md={4}>
            <Row align="middle" style={{height:"100%"}}>
                <Typography.Title level={3} style={{margin:0}}  >Fishing Food</Typography.Title>
            </Row>
        </Col>
    </Row>
);

export default HeaderLogin;