import React from 'react'
import { Link } from 'react-router-dom'


export default class Detail extends React.Component {
    render() {
        return (
            <div>
                详情
                {this.props.children}
                <button> <Link to='/city/luoyangnew'>跳到洛阳</Link></button>
            </div>
        )
    }
}