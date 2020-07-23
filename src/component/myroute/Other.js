import React from 'react'
import { Link } from 'react-router-dom'

export default class Other extends React.Component {

    jump = () => {
        this.props.history.push('/city')
    }

    render() {
        return (
            <div>
                other组件
                <button>
                    <Link to='/city'>跳到城市</Link>
                </button>
                <button onClick={this.jump}>
                    跳到城市
                </button>
            </div>
        )
    }

}