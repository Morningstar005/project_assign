import React, { useState } from "react";
import {toast} from "react-toastify"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const CreateTask = ({ modal, toggle, saveTask }) => {
  const [formData, setformData] = useState({
    taskName:"",
    description:"",
    name:"",
    date:"",
  })


  const handleChange=(event)=>{

    const{name,value}= event.target

    setformData((prev)=>({
      ...prev,
      [name]:value
    }))
    

  }

  const handleSave=()=>{
    let taskObj={}
    taskObj["name"]= formData.taskName
    taskObj["description"] =formData.description
    taskObj["username"]= formData.name
    taskObj["date"]=formData.date
    saveTask(taskObj)
    toast.success("Task Created")

  }



  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form>
         

          <div className="form-group mb-4 flex">
            <label htmlFor="name">Name</label>

            <input type="text" className="form-control" id="name" value={formData.name} name="name" onChange={handleChange} required/>


            <label htmlFor="taskname">Task Name</label>

            <input type="text" id="taskname" className="form-control" value={formData.taskName} onChange={handleChange} name="taskName" required/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" cols="30" rows="5" className="form-control" value={formData.description} onChange={handleChange} required></textarea>
          </div>
          <div>
            <label htmlFor="date">Submit date</label>
            <input type="date" className="form-control" name="date" id="date" value={formData.date} onChange={handleChange} required/>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>
      {" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
