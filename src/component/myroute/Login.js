import React from 'react'
import { Tabs, Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import api from '../../api'
const { TabPane } = Tabs;

class Login extends React.Component {

    onFinish = values => {
        // console.log('Received values of form: ', values);
        api.getLogin({
            apikey: '0df993c66c0c636e29ecbb5344252a4a'
        }).then(response => response.json())
            .then(data => {
                if (data.title) {
                    sessionStorage.setItem('username', data.title)
                    message.success('登陆成功')
                    this.props.history.push('/')
                }
            })
    };

    onRegFinish = (values) => {
        console.log(values);
    }

    render() {
        return (
            <div style={{ width: 400, padding: 30, border: '1px solid yellowgreen', borderRadius: '5%', margin: '200px auto' }}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="登陆" key="1">

                        <Form
                            name="login"
                            initialValues={{ username: '123' }}
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{
                                    required: true,
                                    message: 'Please input your Username!',
                                }]}
                            >
                                <Input prefix={<UserOutlined />} placeholder="Username"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{
                                    required: true,
                                    message: 'Please input your Password!',
                                }]}
                            >
                                <Input
                                    prefix={<LockOutlined />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                    登陆
                                 </Button>
                            </Form.Item>
                        </Form>

                    </TabPane>
                    <TabPane tab="注册" key="2">
                        <Form
                            name="register"
                            onFinish={this.onRegFinish}
                        >
                            <Form.Item
                                name="reg_username"
                                rules={[{
                                    required: true,
                                    message: 'Please input your Username!',
                                }]}
                            >
                                <Input prefix={<UserOutlined />} placeholder="Username"
                                />
                            </Form.Item>
                            <Form.Item
                                name="reg_password"
                                rules={[{
                                    required: true,
                                    message: 'Please input your Password!',
                                }]}
                            >
                                <Input
                                    prefix={<LockOutlined />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                    注册
                                </Button>
                            </Form.Item>
                        </Form>

                    </TabPane>
                </Tabs>
            </div>
        )
    }
}


export default withRouter(Login)