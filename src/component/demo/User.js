import React from 'react'
import propTypes from 'prop-types'
// import $ from 'jquery'
import { connect } from "react-redux"
import * as actionsUsers from '../../actions/user'
import { bindActionCreators } from 'redux'

class User extends React.Component {

    constructor() {
        super();
        this.state = {
            age: 25,
            data1: [],
        }
    }

    componentDidMount() {
        // $.ajax({
        //     type: 'get',
        //     url: 'http://jsonplaceholder.typicode.com/posts?userId=1',
        //     success: (data) => {
        //         // console.log(data)
        //         this.setState({ data1: data })
        //     }
        // })
    }

    handleAgeClick = () => {
        this.setState({
            age: this.state.age + 1
        })
    }


    render() {
        console.log(this.props.user)
        return (
            <div>
                {/* <h4>名字：{this.props.name} </h4>
                <h4>年龄：{this.state.age} </h4>
                <button onClick={() => this.handleAgeClick()}>年龄长大</button> */}
                <div>
                    {/* <h4>内容：</h4>
                     <ul>
                        {this.state.data1.map((item, index) => {
                            return <li key={index}>{item.title}</li>
                        })}
                    </ul> */}
                </div>
                <hr />
                <h2>Redux用户： </h2>
                {this.props.user.map((item, index) => {
                    return <p key={index}> {item.name}-->{item.age}</p>
                })}
                <button type='primary'
                    onClick={() => this.props.actionsUsers.Add_User({ name: '铁狮子', age: 15 })}>

                    增加用户

                </button>

            </div>
        )
    }
}

User.propTypes = {
    name: propTypes.string
}

// User.defaultProps = {
//     name: '铁狮子',
// }



const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actionsUsers: bindActionCreators(actionsUsers, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)