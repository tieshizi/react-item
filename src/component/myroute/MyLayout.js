import React from 'react'
import { Menu, Row, Col, Dropdown, Button } from 'antd';
import { StarOutlined, CopyrightCircleOutlined, ContainerOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import Login from './Login'
import { Link, withRouter } from 'react-router-dom';


class MyLayout extends React.Component {
    goBack = () => {
        sessionStorage.removeItem('username')
        this.props.history.push('/login')
    }

    render() {
        const { location: { pathname } } = this.props
        const menu = (
            <Menu onClick={this.goBack}>
                <Menu.Item key="1">
                    退出
              </Menu.Item>
            </Menu>
        );
        // console.log(pathname)
        return (
            <div>
                <Row>
                    <Col span={2}>
                    </Col>
                    <Col span={20}>
                        {pathname == '/login' || (!sessionStorage.getItem('username')) ? <Login /> :
                            <div>
                                <Menu
                                    onClick={this.handleClick}
                                    selectedKeys={pathname == '/' ? 'home' : pathname} mode="horizontal"
                                >
                                    <Menu.Item key="home">
                                        <Link to='/'>
                                            <HomeOutlined />
                                            首页
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="movies" >
                                        <Link to='/movies'>
                                            <StarOutlined />
                                            影视
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="sports" >
                                        <Link to='/sports'>
                                            <ContainerOutlined />
                                            运动
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="city">
                                        <Link to='/city'>
                                            <CopyrightCircleOutlined />
                                            城市
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item style={{ float: 'right' }} key="login" >
                                        {/* <Link to='/login'> */}

                                        {sessionStorage.getItem('username') ?
                                            <Dropdown overlay={menu}>
                                                <Button>
                                                    {sessionStorage.getItem('username')}<UserOutlined />
                                                </Button>
                                            </Dropdown>
                                            :
                                            '登陆|注册'}
                                        {/* </Link> */}
                                    </Menu.Item>
                                </Menu>
                                {this.props.children}
                            </div>}
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }

}

export default withRouter(MyLayout)