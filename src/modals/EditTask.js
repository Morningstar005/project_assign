import React, { useState } from "react";
// import { toast } from "react-toastify";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
  const [formData, setformData] = useState({
    taskName: taskObj.name,
    description: taskObj.description,
    name:taskObj.username,
    date:taskObj.date,

  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleUpdate=(e)=>{
    e.preventDefault();
    let tempObj={};
    tempObj["name"]=formData.taskName;
    tempObj["description"]=formData.description;
    tempObj["username"]= formData.name
    tempObj["date"]=formData.date
    updateTask(tempObj)

  }

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group mb-4 flex"> 

          <label htmlFor="name">Name</label>

<input type="text" className="form-control" id="name" value={formData.name} name="name" onChange={handleChange}/>
            <label htmlFor="taskname">Rewrite Task</label>
            <input
              type="text"
              id="taskname"
              className="form-control"
              value={formData.taskName}
              onChange={handleChange}
              name="taskName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Update Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="5"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="date">Submit date</label>
            <input type="date" className="form-control" name="date" id="date" value={formData.date} onChange={handleChange} />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
