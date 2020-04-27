import React from 'react';
import HeaderLogin from '../../Helpers/HeaderLogin.jsx';
import {Row,Card,Form,Input,Checkbox,Button} from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
const Login = ()=>{
    const onFinish = (values)=>{
        console.log(values)
        const data = {
            email:values.email,
            password:values.password
        }
        axios.post('http://localhost:5000/login',data).then(res=>console.log(res));
    }
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
                                Iniciar Sesion
                            </Button  >
                        </Form.Item>
                    </Form>
                    <Link to={'/signUp'}>Registrate</Link>
                </Card>
            </Row>
        </div>
    );
}
export default Login;