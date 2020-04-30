import React,{useState} from 'react';
import HeaderLogin from '../../Helpers/HeaderLogin.jsx';
import {Row,Card,Form,Input,Checkbox,Button} from 'antd';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
const Login = ({setUsuario})=>{
    console.log(process.env.NODE_ENV,process.env.REACT_APP_API_URL)
    const [tipoError,setTipoError] = useState(null);
    const [message,setMessage] = useState(null);
    const [redir,setRedir] = useState(false);
    const onFinish = (values)=>{
        const data = {
            email:values.email,
            password:values.password
        }
        //http://localhost:5000/login
        axios.post(`${process.env.REACT_APP_API_URL}login`,data).then(res=>{
            if(!res.data.ok){setTipoError('error');setMessage(res.data.message)}
            else{
                setUsuario(res.data.name);
                setRedir(true);
            }
        });
    }
    if(redir)return<Redirect to="/"/>
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
                            validateStatus={tipoError}
                            help={message}
                        >
                            <Input placeholder={'tucorreo@ejemplo.com'}/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Ingrese su contraseña' }]}
                            validateStatus={tipoError}
                            help={message}
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

const dispatchToProps = dispatch =>{
    return({
        setUsuario(usuario){
            dispatch({
                type:'CAMBIAR_NOMBRE',
                usuario
            });
        }
    });
}

export default connect(null,dispatchToProps)(Login);