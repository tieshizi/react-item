import React from 'react'



export default class Son01 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            like: 180
        }
    }

    Jianfei = () => {
        this.setState({
            like: 140
        })

        this.props.getData(140)
    }

    render() {
        return (
            <>
                我是第一个子组建
                <br />
                郝可可体重是：{this.state.like}
                <button onClick={this.Jianfei}>减肥</button>
            </>
        )
    }


}