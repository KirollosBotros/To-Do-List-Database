import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: this.props.todo.completed ? '#D3D3D3' : '#f3f3f3',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            margin: '10px',
            borderRadius: '8px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const { id, title } = this.props.todo;
        return (
            <div  style={this.getStyle()}>
                <h4>
                    <input type='checkbox' style={inputStyle} onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.delI.bind(this, id)}
                    type="button" className="badge badge-danger" style={btnStyle}>Delete</button>
                </h4>
            </div>
        )
    }
}

const btnStyle = {
    float: 'right',
    padding: '6px 15px',
    margin: '6px 0px 0px',
}

const inputStyle = {
    marginRight: '8px',
    marginTop: '18px'
}

export default TodoItem