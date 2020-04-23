import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button, Card, Avatar,Row,Col,Typography,Rate} from 'antd';
const Comidas = ({comidas})=>{
    
    if(!comidas){
        let cargando=[]
        for(let i=0;i<=20;i++){
            cargando.push(
            <Col xs={6}>
                <Card style={{ width: 300, marginTop: 16 }} loading={true}>
                    <Card.Meta
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                    />
                </Card>
            </Col>
            );
        }
        return <Row>{cargando}</Row>;
    }
    //console.log(comidas)
    return(
        <Row style={{padding:'20px 50px'}}>
            
            <Col xs={24}>
                <Typography.Title level={2}>
                    Recetas mas Conocidas
                </Typography.Title>
            </Col>
            {comidas.map(comida=>{
                let calificación = Math.ceil(comida.spoonacularScore/20);
                
                return(
                    <Col xs={6} key={comida.id}>
                        <Link to={`/receta/${comida.id}`}>
                            <Card
                                hoverable
                                style={{ width: 300,marginTop:10 }}
                                cover={
                                <img
                                    alt="example"
                                    src={comida.image}
                                    style={{height:200}}
                                />
                                }
                                actions={[
                                <Button type="link"  >
                                    Created by "Chef Famoso"
                                </Button>
                                ]}
                            >
                                <Card.Meta
                                title={comida.title}
                                
                                />
                                <Rate disabled defaultValue={calificación} />
                            </Card>
                        </Link>
                    </Col>
                );
            })}
            
        </Row>
    );
}
const stateToProps=state=>{
    return({
        comidas:state.recetasHome
    });
}

export default connect(stateToProps,null)(Comidas);