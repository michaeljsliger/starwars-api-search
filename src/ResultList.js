import React from 'react';
import Result from './Result';


class ResultList extends React.Component{

    static defaultProps = {
        items: [{name: 'huh'}]
    }

    render() {
        if(this.props.items.length > 0) {

            return (
                <div className="results-list-box">
                {this.props.items.map(el => {
                    return (
                        <Result obj={el}/>
                        )
                    })}
            </div>
        )
    } else {
        return (
            <div>Not found</div>
        )
    }
    }
}

export default ResultList