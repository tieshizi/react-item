import React from 'react';
export default class FetchContainer extends React.Component {


    componentDidMount() {
        fetch('http://localhost:3000/v2/movie/subject/30261964?apikey=0df993c66c0c636e29ecbb5344252a4a')
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <div className="App">
            </div>
        );
    }

}

