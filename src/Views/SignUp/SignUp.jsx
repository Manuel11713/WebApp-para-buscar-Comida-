import React, { useState } from 'react';
import {Row,Card,Form,Input,Checkbox,Button,Divider,message} from 'antd';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import HeaderLogin from '../../Helpers/HeaderLogin.jsx';
import './SignUp.css';
const Login = ({setUsuario}) =>{
    const [redir,setRedir] = useState(false);

    const onFinish=(values)=>{
        let data ={
            email:values.email,
            password:values.password,
            user:values.username
        }
        
        axios.post(`${process.env.REACT_APP_API_URL}signUp`,data).then(res=>{
            //console.log(res)
            if(res.data.code===1){//Si el usuario fue guardado
                if(values.remember===true){
                    localStorage.setItem('token',res.data.token); 
                    localStorage.setItem('usuario',values.username);
                    setUsuario(values.username);
                }
                // else{//Codigo Redux para actualizar el estado
                //     console.log('debes actualizar el redux');
                //     setUsuario(values.username);
                // }


                setRedir(true);
            }
            if(res.data.code===2)message.error(res.data.message);//Si el usuario ya existe en la base de datos
            
        });
    }
    if(redir)return <Redirect to="/"/>

    return(
        <div style={{height:'100%',background:'#fafafa'}}>  
            <HeaderLogin/>
            <Row justify="center" >
                <Card className="container">
                    <Form
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                        <Form.Item
                            label="Nombre de Usuario"
                            name="username"
                            rules={[{ required: true, message: 'Ingresa tu nombre' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Correo"
                            name="email"
                            
                            rules={[{ required: true, message: 'Ingresa tu correo' }]}
                        >
                            <Input placeholder={'tucorreo@ejemplo.com'}/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Ingrese su contraseña' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item  name="remember" valuePropName="checked">
                            <Checkbox>Recordar Sesion</Checkbox>
                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" htmlType="submit" block >
                                Registrarme
                            </Button  >
                        </Form.Item>
                    </Form>
                    <Divider>o registrate con Google</Divider>
                    <Button block>Google (proximamente)</Button>
                    <Link to={'/login'}>¿Ya tienes una cuenta?</Link>
                </Card>
            </Row>
        </div>
    );
}
const dispathToProps = dispatch =>{
    return({
        setUsuario(usuario){
            dispatch({
                usuario,
                type:'CAMBIAR_NOMBRE'
            });
        }
    });
}

export default connect(null,dispathToProps)(Login);
