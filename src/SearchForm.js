import React from 'react';


class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            select: {
                value: 'people',
            },
            input: {
                value: '',
            }
        }
    }

    updateSelect = (e) => {
        this.setState({select: {value: e}})
    }

updateInput = (e) => {
    this.setState({input: {value: e}})
}


    render() {
        return (
            <div>
                <form onSubmit={event => this.props.handleSubmit(event, this.state.select.value, this.state.input.value)}>
                    <select className="form-input" onChange={e => this.updateSelect(e.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="films">Films</option>
                        <option value="species">Species</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="starships">Starships</option>
                    </select>
                    <input 
                        className="form-input" 
                        type="text" 
                        placeholder='e.g. Anakin Skywalker'
                        onChange={e => this.updateInput(e.target.value)}
                    />
                    <button className="form-input" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;