import React from 'react'
import { connect } from 'react-redux';

const ListView = ({ setShowModal, todos }) => {
    const todoList = () => {
        return todos.map((todo,index) => {
            return (
                <div className="todo-container" key={index}>
                    <div className="todo-title"><span>Title:</span><p>{todo.title}</p></div>
                    <div className="todo-description"><span>Description:</span> <p>{todo.description}</p></div>
                    <div className="todo-description"><span>Status:</span> <p>{todo.status}</p></div>
                </div>
            )
        })
    }

    const todoProcess = () => {
        return todos.map((todo,index) => {
            if (todo.status === "Process") {
                
                return (
                    <div className="todo-container" key={index}>
                        <div className="todo-title"><span>Title:</span><p>{todo.title}</p></div>
                        <div className="todo-description"><span>Description:</span>  <p>{todo.description}</p></div>
                    </div>
                )
            }
            return null
        })
    }

    const todoDone = () => {
        return todos.map((todo,index) => {
            
            if (todo.status === "Done") {
                return (
                    <div className="todo-container" key={index}>
                        <div className="todo-title"><span>Title:</span> <p>{todo.title}</p></div>
                        <div className="todo-description"><span>Description:</span><p>{todo.description}</p></div>
                    </div>
                )
            }
            return null
        })
    }
    return (
        <div className="list-container">
            <h3>Pratical Task</h3>
            <button onClick={() => setShowModal(true)}>Create</button>
            <div className="field-list-container">
                <div className="todo-column column">
                    <div className="column-header">To Do</div>
                    <div className="column-body">
                        {todos.length !== 0 ? todoList() : null}
                    </div>
                </div>
                <div className="process-column column">
                    <div className="column-header">In Process</div>
                    <div className="column-body">
                        {todos.length !== 0 ? todoProcess() : null}
                    </div>
                </div>
                <div className="done-column column">
                    <div className="column-header">Done</div>
                    <div className="column-body">
                        {todos.length !== 0 ? todoDone() : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo
    }
}

export default connect(mapStateToProps)(ListView);