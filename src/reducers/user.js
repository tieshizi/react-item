
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