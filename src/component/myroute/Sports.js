import React from 'react'

export default class Detail extends React.Component {

    state = {
        num: 0
    }
    setNum = () => {
        const { num } = this.state
        this.setState({ num: num + 1 })
    }

    componentDidMount() {
        this.Timer = setInterval(() => {
            console.log(this.state.num)
            this.setNum()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.Timer);
    }

    render() {
        return (
            <div>
                运动
                <hr />
                我是定时器:{this.state.num}
            </div>
        )
    }
}