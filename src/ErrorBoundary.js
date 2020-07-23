import React from 'react'



export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        // console.log(this.state.errorInfo)
        return (
            <div>
                {
                    this.state.errorInfo && this.state.errorInfo.componentStack ?
                        <div style={{ color: 'red' }}>错误了：{this.state.errorInfo.componentStack}</div> : this.props.children
                }
            </div>
        )

    }
}





