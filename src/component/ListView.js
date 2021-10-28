import React from 'react'
import { connect } from 'react-redux';
import { selectObject } from '../actions/Action';

const ListView = ({ setShowModal, todos, selectObject, obj }) => {
    const emptyObj = {
        title: "",
        description: "",
        status: ""
    }

    const handleCreate = () => {
        setShowModal(true);
        selectObject(emptyObj);
    }

    const handleUpdate = (todo) => {
        setShowModal(true);
        selectObject(todo)
    }

    const todoList = () => {
        return todos.map((todo,index) => {
            return (
                <div className="todo-container red-body" key={index}>
                     <p>{todo.title}</p><i className="fa fa-pencil" onClick={()=>handleUpdate(todo)}></i>
                </div>
            )
        })
    }

    const todoProcess = () => {
        return todos.map((todo,index) => {
            if (todo.status === "Process") {
                
                return (
                    <div className="todo-container blue-body" key={index}>
                        <p>{todo.title}</p><i className="fa fa-pencil" onClick={()=>selectObject(todo)}></i>
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
                    <div className="todo-container green-body" key={index}>
                        <p>{todo.title}</p><i className="fas fa-pencil" onClick={()=>selectObject(todo)}></i>
                    </div>
                )
            }
            return null
        })
    }
    return (
        <div className="list-container">
            <h3>Pratical Task</h3>
            <button onClick={handleCreate}>Create</button>
            <div className="field-list-container">
                <div className="todo-column column">
                    <div className="column-header red-header">To Do</div>
                    <div className="column-body ">
                        {todos.length !== 0 ? todoList() : null}
                    </div>
                </div>
                <div className="process-column column">
                    <div className="column-header blue-header">In Process</div>
                    <div className="column-body ">
                        {todos.length !== 0 ? todoProcess() : null}
                    </div>
                </div>
                <div className="done-column column">
                    <div className="column-header green-header">Done</div>
                    <div className="column-body ">
                        {todos.length !== 0 ? todoDone() : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    selectObject
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo,
        obj: state.obj
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListView);