import React from 'react'
import { connect } from 'react-redux';
import { selectObject,deleteTodos } from '../actions/Action';

const ListView = ({ setShowModal, todos, selectObject, obj, deleteTodos }) => {
    const emptyObj = {
        title: "",
        description: "",
        status: ""
    }

    const handleCreate = () => {
        setShowModal(true);
        selectObject(emptyObj);
        document.getElementById('list-display').style.filter = 'blur(1.5px)'
    }

    const handleUpdate = (todo) => {
        setShowModal(true);
        selectObject(todo);
        document.getElementById('list-display').style.filter = 'blur(1.5px)'
    }

    const handleDelete = (todo) => {
        deleteTodos(todo);
    }

    const todoList = () => {
        return todos.map((todo,index) => {
            return (
                <div className="todo-container red-body" key={index}>
                     <p>{todo.title}</p>
                     <i className="fa fa-pencil" onClick={()=>handleUpdate(todo)}></i>
                     <i className="fas fa-trash" id="delete-Btn" onClick={()=>handleDelete(todo)}></i>
                </div>
            )
        })
    }

    const todoProcess = () => {
        return todos.map((todo,index) => {
            if (todo.status === "Process") {
                
                return (
                    <div className="todo-container blue-body" key={index}>
                        <p>{todo.title}</p>
                        <i className="fa fa-pencil" onClick={()=>handleUpdate(todo)}></i>
                        <i className="fas fa-trash" id="delete-Btn" onClick={()=>handleDelete(todo)}></i>
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
                        <p>{todo.title}</p>
                        <i className="fas fa-pencil" onClick={()=>handleUpdate(todo)}></i>
                        <i className="fas fa-trash" id="delete-Btn" onClick={()=>handleDelete(todo)}></i>
                    </div>
                )
            }
            return null
        })
    }
    return (
        <div className="list-container" id="list-display">
            <h3>Jira Task</h3>
            <div className="create-btn"><button onClick={handleCreate}>Create</button></div>
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
    selectObject,
    deleteTodos
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo,
        obj: state.obj
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListView);