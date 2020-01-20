import React, { Component } from 'react'

export class AddTodoItem extends Component {
    state = {
        title: ''
    }
    
    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <form style={addTodoForm}>
                <input
                    style={addTodoFormInputField}
                    type="text"
                    name="title"
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    style={addTodoFormButton}
                    type="submit"
                    value="Add"
                    className="button"
                />
            </form>
        )
    }
}

const addTodoForm = {
    marginBottom: '8px',
    display: 'flex'
}

const addTodoFormInputField = {
    flex: '10'
}

const addTodoFormButton = {
    flex: '1'
}

export default AddTodoItem;
