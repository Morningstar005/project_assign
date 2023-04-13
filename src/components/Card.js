import React, { useState } from "react";
import {AiFillDelete, AiFillEdit} from "react-icons/ai"
import EditTask from "../modals/EditTask";
import { toast } from "react-toastify";

const Card = ({taskObj,index,deleteTask,updateListArray}) => {
    const [modal,setModal]= useState(false)
    const [complete,setComplete] = useState(false)


    const handleDelete =()=>{
      deleteTask(index)
      
    }
    const toggle=()=>{
        setModal(!modal);
    }

    const updateTask=(obj)=>{
        updateListArray(obj,index)
    }

    const handleStatus=()=>{
      if(complete=== false){
        toast.success("You Should Complete the task ")
        setComplete(!complete)
        // localStorage.setItem("taskList",JSON.stringify())


      }else if(complete=== true){
        toast.success("completed task")
                handleDelete()

      }

      
      // setComplete(!complete)
      // if(complete === true){
      //   handleDelete()

      // }
     
    }
  return (
    <div className="card-wrapper mobile-wrapper mr-5">
      <div
        className="card-top"
        style={{ backgroundColor: "chartreuse" }}
      ></div>
      <div className="nameHeader">
      {taskObj.username}
      </div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{ backgroundColor: "#F2FAF1", borderRadius: "10px" }}
        >
          {taskObj.name}
        </span>
        <p className="mt-2 description">{taskObj.description}</p>
       <div className="LineFooter mb-1">
        <div >
          <p style={{ position: "absolute" ,left:"20px", bottom: "9px",font:"bold" } }>submit date: <span>{taskObj.date}</span></p>
        </div>
       <div style={{ position: "absolute", right: "20px", bottom: "20px" } }
        >
          <AiFillEdit className="m-2" style={{cursor:"pointer"}} onClick={()=>setModal(true)}/>
          <AiFillDelete onClick={handleDelete} style={{cursor:"pointer"}}/>
        </div>
      </div>
       </div>
      <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>
      <div className="statusbutton">
        <button onClick={handleStatus} className="button">{
          complete?"Completed task":"panding task ?"
          }

        </button>
      </div>
    </div>
  );
};

export default Card;
