import React from 'react'

// export default class Form extends React.Component {
// //受控组件
//     constructor() {
//         super();
//         this.state = {
//             name: '',
//             age: '',
//         }
//     }

//     handleNameChange = (e) => {
//         console.log('name', e.target.value)
//         this.setState({
//             name: e.target.value
//         })
//     }

//     handleAgeChange = (e) => {
//         console.log('age', e.target.value)
//         this.setState({
//             age: e.target.value
//         })
//     }

//     handleSubmit = (event) => {
//         const { name, age } = this.state
//         console.log(name, age)
//         // 阻止默认事件  很重要
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     名字：
//                         <input type="text" value={this.state.name} name='username' onChange={this.handleNameChange} />
//                 </label>

//                 <label>
//                     年龄：
//                         <input type="text" value={this.state.age} name='age' onChange={this.handleAgeChange} />
//                     <input type="submit" value="提交" />
//                 </label>
//             </form>
//         )
//     }
// }

export default class Form2 extends React.Component {
    // 非受控组件
    // ref react中是不能直接操作Dom
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    deleteTitle = () => {
        // 原生node节点
        console.log(this.myRef)
        this.myRef.current.innerText = '12343567'
    }

    handleSubmit = (event) => {
        console.log(this.name.value, this.age.value);
        event.preventDefault();
    }

    render() {
        return (
            <div ref={this.myRef}>
                <h3 id='hh'>下面是一个表单</h3>
                <p>这个表单涉及到非受控组件</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        名字:<input ref={(a) => this.name = a} type="text" name='username' />
                    </label>
                    <label>
                        年龄:<input ref={(a) => this.age = a} type="text" name='age' />
                    </label>
                    <input type="submit" value="提交" />
                </form>
                <button onClick={() => this.deleteTitle()}>我是按钮</button>
            </div>
        );
    }

}


















