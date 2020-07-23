##### 全家桶 Router(封装) + AntD(按需加载) + Menu + Login(form) + Fetch(Proxy)

1.  兄弟通信
    father: getData = (data) => {
                this.setState({
                    like: data
                })
            }
            <Son01 getData={this.getData} />
            <br />
            <Son02 like={this.state.like} />
    son01: this.props.getData(140)
    son02: {this.props.like}


2.  Redux 
    https://www.redux.org.cn/
    Redux是javaScript的状态容器,里面封装了对react使用的库叫做React-Redux
    Redux 创建了3个文件store仓库  reducers(处理)  actions(动作触发)

# 基本流程
    1. 安装：
        cnpm install --save redux
        cnpm install --save react-redux   //绑定库
        cnpm install --save-dev redux-devtools   //开发者工具
    2. 创建仓库store
        import { createStore } from "redux"
        import counter from "../reducers/count"
        const store = createStore(counter)
        export default store;
    3. 创建reducers
        const initState = 0; //可能初始数据比较复杂
        export default counter = (state = initState, action) => {
            switch (action.type) {
                case "OnAdd":
                    return state += 1
                    break;
                case "OnMinus":
                    return state -= 1
                    break;
                default:
                    return state
            }
        }
    4. Provider关联
    ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'))
    5. 通过事件触发数据发生变化
        <App
            OnAdd={() => store.dispatch({ type: 'OnAdd' })}
            OnMinus={() => store.dispatch({ type: 'OnMinus' })}
        />
        <Button type='primary' onClick={this.props.OnAdd}>增加H1</Button>
        <Button type='primary' onClick={this.props.OnMinus}>减少H1</Button>
    6. 监听数据的变化
    store.subscribe(()=>{
        console.log(store.getState())
    })
    7. 将数据响应到页面中
        const render = () => {
            ReactDOM.render(
                <Provider store={store}>
                    <App
                        OnAdd={() => store.dispatch({ type: 'OnAdd' })}
                        OnMinus={() => store.dispatch({ type: 'OnMinus' })}
                        value={store.getState()}
                    />
                </Provider>
                , document.getElementById('root'));
        }
        render()
        store.subscribe(render)
        <h1>{this.props.value}</h1>




# redux 读取数据
    在需要读取的页面，关联Redux:
    import { connect } from "react-redux"
    const mapStateToProps = (state) => {
        return {
            count: state
        }
    }
    export default connect(mapStateToProps)(App)  
    读取：<h1>{this.props.count}</h1>


# redux 改变数据
    const mapDispatchToProps = (dispatch) => {
        return {
            OnAdd: () => dispatch({ type: 'OnAdd' }),
            OnMinus: () => dispatch({ type: 'OnMinus' })
        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(App)
    调用：<Button type='primary' onClick={this.props.OnAdd}>增加H1</Button>
        <Button type='primary' onClick={this.props.OnMinus}>减少H1</Button>


# redux actions写法
    import * as countActions from './actions/count'
    import { bindActionCreators } from 'redux'
    const mapDispatchToProps = (dispatch) => {
        return {
            countActions: bindActionCreators(countActions, dispatch)
        }
    }
    <Button type='primary' onClick={this.props.countActions.OnAdd}>增加H1</Button>
    <Button type='primary' onClick={this.props.countActions.OnMinus}>减少H1</Button>


# redux 传参
    this.props.countActions.OnMinus(2)
    export function OnAdd(num) {
        return {
            type: "OnAdd",
            num
        }
    }
    case "OnAdd":
    return state += action.num;


#多个reducers
    import { combineReducers } from 'redux'
    import count from './count'
    import user from './user'
    const rootReducer = combineReducers({
        count,
        user
    })
    export default rootReducer 
    import { createStore } from "redux"
    import rootReducer from "../reducers"
    const store = createStore(rootReducer)
    export default store;

# 增加用户
    const initState = [{
        name: '可可',
        age: 26
    }]
    const user = (state = initState, action) => {
        switch (action.type) {
            case "Add_User":
                //深拷贝  扩展运算符
                // let otherState = JSON.parse(JSON.stringify(state))
                // otherState.push(action.user)
                // return otherState;
                return [...state, action.user]
            default:
                return state
        }
    }
    export default user
    onClick={() => this.props.actionsUsers.Add_User({ name: '铁狮子', age: 15 })}