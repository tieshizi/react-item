import React from 'react'
import qs from "query-string"

export default class Movies extends React.Component {

    render() {
        let user = qs.parse(this.props.location.search)
        // console.log(this.props.match.params.id)
        return (
            <div>
                影视：{this.props.match.params.id}
                人物：{user.name}
            </div>
        )
    }

}