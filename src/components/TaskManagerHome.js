import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";


const TaskManagerHome = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  console.log(taskList)
  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList",JSON.stringify(tempList))
    setTaskList(tempList);
    setModal(false);
  };

  useEffect(()=>{
    const tempList= JSON.parse(localStorage.getItem('taskList'));
    if(tempList){
        setTaskList(tempList)
    }
  },[])

  const deleteTask = (index)=>{
    let tempList= taskList
    tempList.splice(index,1)
    localStorage.setItem("taskList",JSON.stringify(tempList))
    setTaskList(taskList)
    window.location.reload()

  }

  const updateListArray=(obj,index)=>{
    let tempList= taskList
    tempList[index]=obj
    localStorage.setItem("taskList",JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }


  return (
    <>
      <div className="header text-center" style={{}}>
        <h1 className="">Task Manager</h1>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
        <p>This Site is Created By Hemant Bhatnagar</p>
       
      </div>

      <div className="task-container">
        {taskList.map((obj, index) => (
            <Card key={index} taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>
        ))}
      </div>

      <CreateTask toggle={toggle} modal={modal} saveTask={saveTask} updateListArray={updateListArray}/>
    </>
  );
};

export default TaskManagerHome;
