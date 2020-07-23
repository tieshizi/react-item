import React from 'react'
// import Other from './Other'
// import Other1 from './Other1'
// import { Link } from 'react-router-dom'

export default class Home extends React.Component {

    Jump = () => {
        this.props.history.push({ pathname: '/sports', state: { current: 'sports' } })
    }

    render() {
        return (
            <div>
                首页
                {/* <hr />
                <button onClick={this.Jump}> 跳到运动</button>
                <button>
                    <Link to='/movies/叶落归根'>跳到电影</Link>
                </button>
                <button>
                    <Link to={{
                        pathname: '/login',
                        search: '?name=可可',
                        hash: '#hash',//唯一数据的索引
                        state: { formDash: true }, //可能是权限判断      
                    }}>跳到登陆
                    </Link>
                </button>
                <hr />
                <Other history={this.props.history} />
                <hr />
                <Other1 /> */}
            </div>
        )
    }
}