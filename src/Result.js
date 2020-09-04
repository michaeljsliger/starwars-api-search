import React from 'react';

class Result extends React.Component {

    render() {
        return (
            <div>{this.props.obj.name}</div> 
        )
    }
}

export default Result;