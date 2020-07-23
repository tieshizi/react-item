import React from 'react'
import Son01 from './Son01'
import Son02 from './Son02'


export default class Father extends React.Component {

    state = {
        like: 180
    }

    getData = (data) => {
        this.setState({
            like: data
        })
    }


    render() {
        return (
            <>
                <h3>我是父组件</h3>
                <Son01 getData={this.getData} />
                <br />
                <Son02 like={this.state.like} />
            </>
        )
    }


}