// 纯函数
// 函数中接收2个参数：
// state:状态
// actions：动作
// 
// 通过actions触发了reducer,reducer改变之后重新响应给了Provider,视图改变

const initState = 10; //可能初始数据比较复杂

const counter = (state = initState, action) => {

    switch (action.type) {
        case "OnAdd":
            return state += action.num;
        case "OnMinus":
            return state -= action.num;
        default:
            return state
    }

}

export default counter