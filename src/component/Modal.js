import React,{useState} from 'react'
import { fetchTodo, updateTodos } from '../actions/Action';
import { connect } from 'react-redux';

const Modal = ({setShowModal, fetchTodo, updateTodos, obj}) => {
    const [dataObject, setdataObject] = useState(obj);
    const [errorMessage, seterrorMessage] = useState({
        titleErr: "",
        descriptionErr: ""
    })
    const [disableBtn, setdisableBtn] = useState({
        titleError: true,
        discriptionError: true
    })
    const disable = Object.values(disableBtn).includes(true)

    const inputValidation = (name,value) => {
        switch (name) {
            case "title":
               if(value === ""){
                   seterrorMessage({...errorMessage,titleErr:"please! fill the title"})
                   setdisableBtn({...disableBtn,titleError:true})
               }
               else if(value.length < 10){
                   seterrorMessage({...errorMessage,titleErr:"title must be upto 10 character"})
                   setdisableBtn({...disableBtn,titleError:true})
               }
               else{
                   seterrorMessage({...errorMessage,titleErr:""})
                   setdisableBtn({...disableBtn,titleError:false})
               }
               return null;
            case "description":
                console.log(value)
               if(value === ""){
                   seterrorMessage({...errorMessage,descriptionErr:"please! fill the discription"})
                   setdisableBtn({...disableBtn,discriptionError:true})
               }
               else if(value.length < 100){
                   seterrorMessage({...errorMessage,descriptionErr:"discription must be 100 words"})
                   setdisableBtn({...disableBtn,discriptionError:true})
               }
               else{
                   seterrorMessage({...errorMessage,descriptionErr:""})
                   setdisableBtn({...disableBtn,discriptionError:false})
               }
               return null;
            default:
                return null;
        }
    }
   
    const changeData = (e) => {
        const {name,value} = e.target;
        setdataObject({...dataObject,[name]:value});
        inputValidation(name,value);
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
                    <button type="button" onClick={()=>setShowModal(false)}>Cancel</button>
                    <button className="next-btn" type="submit" disabled={disable}>Submit</button>
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