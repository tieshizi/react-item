import React from 'react'
import { Link } from 'react-router-dom'

export default class City extends React.Component {

    render() {
        return (
            <div>
                城市
                <ul>
                    <li>
                        <Link to='/city'>去洛阳</Link>
                    </li>
                    <li>
                        <Link to='/city/shanghai'>去上海</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }

}