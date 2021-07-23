import React from 'react';
import { Button } from 'antd'
import './global.less';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from "react-redux"
// import { OnAdd, OnMinus } from "./actions/count"
import * as countActions from './actions/count'
import { bindActionCreators } from 'redux'
import ErrorBoundary from './ErrorBoundary'
import Layout from './component/myroute/MyLayout'
import routes from './router/routes'
// import Home from './component/myroute/Home'
// import Sports from './component/myroute/Sports'
// import Movies from './component/myroute/Movies'
import City from './component/myroute/City'
// import Luoyang from './component/myroute/cityList/Luoyang'
// import Shanghai from './component/myroute/cityList/Shanghai'
// import Login from './component/myroute/Login'
import User from './component/demo/User'
// import Form from './component/demo/Form'
// import Wrong from './component/demo/Wrong'
// import Fetch from './component/demo/Fetch'
// import Father from './component/demo/Father'
// import './App.css';
// import { Dosomething, Url } from './tools';
// 可可2021年练习git
class App extends React.Component {
  render() {
    return (
      <div>
        <Router >
          <ErrorBoundary>
            <Switch>
              <Layout>
                <Switch>
                  <Redirect from='/haha' to='/' />

                  {
                    routes.map((route, key) => {
                      if (!route[404]) {
                        if (route.routes) {
                          return <City key={route.path} path='/city'>
                            <Switch>
                              {
                                route.routes.map((r, k) => {
                                  if (!r[404]) {
                                    return <Route key={k} exact={r.exact} path={r.path} component={r.component}></Route>
                                  } else {
                                    return <Route key={key} render={() => <div>404...</div>}></Route>
                                  }
                                })
                              }
                            </Switch>
                          </City>
                        }
                        return <Route key={key} exact={route.exact} path={route.path} component={route.component} routes={route.routes}></Route>
                      } else {
                        return <Route key={key} render={() => <div>404...</div>}></Route>
                      }
                    })
                  }

                </Switch>
              </Layout>
            </Switch>
            <hr />
            {/* <Father /> */}
            {/* <Form /> */}
            {/* <Fetch /> */}
            <User name={'铁狮子'} />
            {/* <Wrong /> */}
            {/* <div style={{ marginTop: 400 }} id='keke'> 我是测试less </div> */}
            {/* <Button type='primary'>按需加载</Button> */}
            <h1>{this.props.count}</h1>
            {/* <Button type='primary' onClick={this.props.OnAdd}>增加H1</Button>
            <Button type='primary' onClick={this.props.OnMinus}>减少H1</Button> */}
            <Button type='primary' onClick={() => this.props.countActions.OnAdd(5)}>增加H1</Button>
            <Button type='primary' onClick={() => this.props.countActions.OnMinus(2)}>减少H1</Button>
            {/* {Dosomething()}
            {console.log(Url)} */}
          </ErrorBoundary>
        </Router >

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // OnAdd: () => dispatch(OnAdd()),
//     // OnMinus: () => dispatch(OnMinus())
//     OnAdd: () => dispatch({ type: 'OnAdd' }),
//     OnMinus: () => dispatch({ type: 'OnMinus' })
//   }
// }



const mapDispatchToProps = (dispatch) => {
  return {
    countActions: bindActionCreators(countActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)