import React from 'react';
import {Col,Row,Menu,Typography,Input, Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';

import imagen from '../Complementos/comida.svg';
const Header = () =>{
    return(
        <Row style={{padding:'20px 50px',boxShadow: '0 2px 8px #f0f1f2'}}>
            <Col xs={1}><img height={50} src={imagen} alt="logo empresa"/></Col>
            <Col xs={4}>
                <Row align="middle" style={{height:"100%"}}>
                    <Typography.Title level={3} style={{margin:0}}  >Fishing Food</Typography.Title>
                </Row>
            </Col>
            <Col xs={10}>
                <Row align="middle" style={{height:"100%"}}>
                    <Input.Search
                        
                        onSearch={value => console.log(value)}
                        style={{ width: '100%' }}
                    />
                </Row>
            </Col>
            <Col xs={7}>
                <Row>
                    <Menu mode="horizontal" selectedKeys={['inicio']} >
                        <Menu.Item key="inicio">
                            Inicio
                        </Menu.Item>
                        
                        <Menu.Item key="direccion2">
                            direccion 2
                        </Menu.Item>
                        
                        <Menu.Item key="direccion3">
                            direccion 3
                        </Menu.Item>
                        
                        <Menu.Item key="direccion4">
                            direccion 4
                        </Menu.Item>
                    </Menu>
                </Row>
            </Col>
            <Col xm={2}>
                <Row align="middle" style={{height:"100%"}}>
                    <Button  shape="circle">
                        <UserOutlined />
                    </Button>
                </Row>
            </Col>
        </Row>
    );
}

export default Header;