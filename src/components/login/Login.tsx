import React, { useEffect, FC, useState } from 'react';
import { Form, Input, Button, Card, Row, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/Login';
import { InitialStateType } from '../../store/reducers/Login';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { LoginType } from '../../types/LoginTypes';
import { RACE_LOGINFORMLABEL, RACE_LOGINFORMMSGS, RACE_LOGINFORMNAME, ROUTESNAME, SUBMIT } from '../../helpers/constants';
import * as types from '../../store/actionTypes/Login';

const Login: FC = () => {

    // Get login data from store
    const loginRes = useSelector((state: InitialStateType) => state.login);
    const [email, setemail] = useState<string>("");
    const [password, setpassword] = useState<string>("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Handle submit click
    const onFinish = (values: LoginType) => {
        dispatch(login(values));
    };

    useEffect(() => {
        // Login response handle
        if (loginRes && loginRes.data?.err) {
            notification[('error')]({
                message: loginRes.data.err,
            });
            dispatch({ type: types.LOGIN_SUCCESS, payload: {...loginRes, err: ""} });
        } else if (loginRes && loginRes.data?.token) {
            navigate('/race')
        }
    }, [loginRes, navigate])

    return (
        <div className="site-card-border-less-wrapper" id="login-wrapper">
            <Row style={{ display: 'flex', alignItems: 'center' }}>
                <Card style={{ width: "500px" }} headStyle={{ textAlign: 'center', fontSize: '22px', fontWeight: 600 }} title={ROUTESNAME.LOGIN.NAME} bordered={false}>
                    <Form
                        name="basic"
                        className="formStyle"
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label={RACE_LOGINFORMLABEL.EMAIL}
                            name={RACE_LOGINFORMNAME.EMAIL}
                            rules={[
                                {
                                    required: true,
                                    type: "email",
                                    message: RACE_LOGINFORMMSGS.EMAIL,
                                },
                            ]}
                        >
                            <Input size="large" id="email" value={email}
                            onChange={(e) => setemail(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label={RACE_LOGINFORMLABEL.PASSWORD}
                            name={RACE_LOGINFORMNAME.PASSWORD}
                            rules={[
                                {
                                    required: true,
                                    message: RACE_LOGINFORMMSGS.PASSWORD,
                                },
                            ]}
                        >
                            <Input.Password size="large" value={password}
                             onChange={(e) => setpassword(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 6,
                                span: 16,
                            }}>
                            <Button type="primary" id="formsubmit" htmlType="submit">
                                {SUBMIT}
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Row>
        </div>
    )
}
export default Login;