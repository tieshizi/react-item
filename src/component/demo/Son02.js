import React from 'react'
import { connect } from "react-redux"


class Son02 extends React.Component {

    render() {
        return (
            <>
                我是第二个子组建，我的兄弟说他的体重是：{this.props.like}
                <br />
                还有一个远方亲戚总是变{this.props.count}
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Son02)
