import React, {Component} from 'react'

export default class Ccomponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            items: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit (event) {
        event.preventDefault();
        this.setState({
              input: '',
            items: [...this.state.items, this.state.input],

        });
    }

    render () {

        return (
            <div>
              <h3>Todo List</h3>
              <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChange}/>
                <button type="submit">Submit!</button>
              </form>
              <ul>
                {this.state.items.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
              </ul>
            </div>
        )

    }
}
