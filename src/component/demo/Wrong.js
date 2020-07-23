import React from 'react'
export default class Wrong extends React.Component {

    handleAgeClick = () => {
        this.setState({
            age: this.state.age + 1
        })
    }


    render() {
        return (
            <div>
                <h4>测试错误边界 </h4>
                <button onClick={() => this.handleAgeClick()}>长大了</button>
                <div>
                    <h4>内容：</h4>
                    <ul>
                        {null.map((item, index) => {
                            return <li key={index}>{item.title}</li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }

}
