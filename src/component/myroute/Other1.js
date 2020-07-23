import React from 'react'
import { withRouter } from 'react-router-dom'

class Other1 extends React.Component {

    jump = () => {
        this.props.history.push('/city')
    }

    render() {
        return (
            <div>
                other1组件
                <button onClick={this.jump}>
                    跳到城市
                </button>
            </div>
        )
    }

}
export default withRouter(Other1)