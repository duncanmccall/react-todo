import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    
    changeStyle = () => {
        return {
            padding: '16px',
            marginBottom: '4px',
            backgroundColor: '#fff7de',
            border: 'solid 1px #fff0bd',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;

        return (
            <div style={ this.changeStyle() }>
                <p style={todoItem}>
                    <input type="checkbox" onChange={ this.props.toggleComplete.bind(this, id) } />
                    {' '}
                    { title }
                    <button style={todoDeleteButton} onClick={ this.props.deleteTodo.bind(this, id) }>x</button>
                </p>
            </div>
        )
    }
}

const todoItem = {
    position: 'relative'
}

const todoDeleteButton = {
    position: 'absolute',
    top: '-3px',
    right: '0px',
    positionTop: '0px',
    background: '#ffbb80',
    color: 'white',
    border: 'solid 1px #ffac63',
    cursor: 'pointer',
    float: 'right',
    borderRadius: '50%'

}

// Prop types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
