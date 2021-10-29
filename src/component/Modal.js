import React, { useState, useEffect } from 'react'
import { fetchTodo, updateTodos, progressCreateTodos, doneCreateTodos, progressUpdateTodos, doneUpdateTodos, doneDeleteTodos, progressDeleteTodos } from '../actions/Action';
import { connect } from 'react-redux';

const Modal = ({ setShowModal, fetchTodo, updateTodos, obj, progressCreateTodos, doneCreateTodos, progressUpdateTodos, doneUpdateTodos, doneDeleteTodos, progressDeleteTodos }) => {
    const [dataObject, setdataObject] = useState(obj);
    const [errorMessage, seterrorMessage] = useState({
        titleErr: "",
        descriptionErr: ""
    })
    const [disableBtn, setdisableBtn] = useState({
        titleError: true,
        discriptionError: true
    })
    let disable = Object.values(disableBtn).includes(true)

    const inputValidation = (name, value) => {
        switch (name) {
            case "title":
                if (value === "") {
                    seterrorMessage({ ...errorMessage, titleErr: "please! fill the title" })
                    setdisableBtn({ ...disableBtn, titleError: true })
                }
                else if (value.length < 3) {
                    seterrorMessage({ ...errorMessage, titleErr: "title must be upto 3 character" })
                    setdisableBtn({ ...disableBtn, titleError: true })
                }
                else {
                    seterrorMessage({ ...errorMessage, titleErr: "" })
                    setdisableBtn({ ...disableBtn, titleError: false })
                }
                return null;
            case "description":
                console.log(value)
                if (value === "") {
                    seterrorMessage({ ...errorMessage, descriptionErr: "please! fill the discription" })
                    setdisableBtn({ ...disableBtn, discriptionError: true })
                }
                else if (value.length < 10) {
                    seterrorMessage({ ...errorMessage, descriptionErr: "discription must be 10 characters" })
                    setdisableBtn({ ...disableBtn, discriptionError: true })
                }
                else {
                    seterrorMessage({ ...errorMessage, descriptionErr: "" })
                    setdisableBtn({ ...disableBtn, discriptionError: false })
                }
                return null;
            case "status":
                if (value !== obj.status) {
                    setdisableBtn({ ...disableBtn, titleError: false, discriptionError: false })
                }
            default:
                return null;
        }
    }

    const changeData = (e) => {
        const { name, value } = e.target;
        setdataObject({ ...dataObject, [name]: value });
        inputValidation(name, value);
    }

    const handleCancel = () => {
        setShowModal(false);
        document.getElementById('list-display').style.filter = 'blur(0px)'
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dataObject)
        if (obj.title === "") {
            if (dataObject.status === "Process") {
                fetchTodo(dataObject);
                progressCreateTodos(dataObject);
            } else if (dataObject.status === "Done") {
                fetchTodo(dataObject);
                doneCreateTodos(dataObject);
            } else {
                fetchTodo(dataObject);
            }
        } else if (obj.title !== "") {
            if (dataObject.status === "Process") {
                if (dataObject.status === obj.status) {
                    updateTodos(dataObject,obj);
                    progressUpdateTodos(dataObject);
                } else if (dataObject.status !== obj.status) {
                    updateTodos(dataObject,obj);
                    progressCreateTodos(dataObject);
                    doneDeleteTodos(dataObject);
                }
            } else if (dataObject.status === "Done") {
                if (dataObject.status === obj.status) {
                    updateTodos(dataObject,obj);
                    doneUpdateTodos(dataObject);
                } else if (dataObject.status !== obj.status) {
                    updateTodos(dataObject,obj);
                    doneCreateTodos(dataObject);
                    progressDeleteTodos(dataObject);
                }
            }
        }
        setShowModal(false);
        document.getElementById('list-display').style.filter = 'blur(0px)';
    }

    return (
        <div className="modal-container">
            <h2 className="modal-header">Create Item</h2>
            <form onSubmit={handleSubmit}>
                <label className="form-label" htmlFor="title-select">Title:</label>
                <input type="text" placeholder="&nbsp;" id="title-select" className="form-input" name="title" value={dataObject.title} onChange={(e) => changeData(e)} required />
                <span className="validation">{errorMessage.titleErr}</span>
                <label className="form-label" htmlFor="description-select">Description:</label>
                <textarea type="email" placeholder="&nbsp;" id="description-select" className="form-input" name="description" value={dataObject.description} onChange={(e) => changeData(e)} />
                <span className="validation">{errorMessage.descriptionErr}</span>
                <select name="status" value={dataObject.status} onChange={changeData} >
                    <option disabled></option>
                    <option>Process</option>
                    <option>Done</option>
                </select>
                <div className="form-btns">
                    <button type="button" onClick={handleCancel}>Cancel</button>
                    <button className="next-btn" type="submit" disabled={disable}>Submit</button>
                </div>
            </form>
        </div >
    )
}

const mapDispatchToProps = {
    fetchTodo,
    updateTodos,
    progressCreateTodos,
    doneCreateTodos,
    progressUpdateTodos,
    doneUpdateTodos,
    doneDeleteTodos,
    progressDeleteTodos
}

const mapStateToProps = (state) => {
    return {
        obj: state.obj
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Modal);