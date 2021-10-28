import React,{useState} from 'react'
import { fetchTodo, updateTodos } from '../actions/Action';
import { connect } from 'react-redux';

const Modal = ({setShowModal, fetchTodo, updateTodos, obj}) => {
    const [dataObject, setdataObject] = useState(obj)
   
    const changeData = (e) => {
        const {name,value} = e.target;
        setdataObject({...dataObject,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(obj.title === ""){
            fetchTodo(dataObject);
        }else{
            updateTodos(dataObject)
        }
        setShowModal(false);
    }

    return (
        <div className="modal-container">
            <h2 className="modal-header modal-element">Create Item</h2>
            <form onSubmit={handleSubmit}>
                <label className="form-label" htmlFor="title-select">Title:</label>
                <input type="text" placeholder="&nbsp;" id="title-select" className="form-input" name="title" value={dataObject.title} onChange={(e) => changeData(e)} required />
                {/* <span className="validation">{inputValidation.nameErr}</span> */}
                <label className="form-label" htmlFor="description-select">Description:</label>
                <textarea type="email" placeholder="&nbsp;" id="description-select" className="form-input" name="description" value={dataObject.description} onChange={(e) => changeData(e)} />
                {/* <span className="validation">{inputValidation.emailErr}</span> */}
                <select name="status" value={dataObject.status} onChange={changeData} >
                    <option disabled></option>
                    <option>Process</option>
                    <option>Done</option>
                </select>
                <div className="form-btns">
                    <button type="button" onClick={()=>setShowModal(false)}>Cancel</button>
                    <button className="next-btn" type="submit" >Submit</button>
                </div>
            </form>
        </div >
    )
}

const mapDispatchToProps = {
    fetchTodo,
    updateTodos
}

const mapStateToProps = (state) => {
    return {
        obj: state.obj
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Modal);