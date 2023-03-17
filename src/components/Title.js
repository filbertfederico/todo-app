import "../styles/title.css";
import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { useState,useEffect } from "react";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";

import { db } from "../firebase";
function Title() {
  const[openAddModal, setOpenAddModal] = useState(false);
  const[tasks, setTasks]=useState([])

  /* function to get all tasks from firestore in realtime */

  useEffect(()=>{
    const q = query(collection(db, "tasks"), orderBy("created","desc"));
    onSnapshot(q,(QuerySnapshot)=>{
      setTasks(QuerySnapshot.docs.map(doc=>({
        id: doc.id,
        data: doc.data()
      })))
    })
  })


  return (
    <div className="title">
      <header>Todo App</header>
      <div className="title__container">
        <button onClick={() => setOpenAddModal(true)}>New Task +</button>
        <div className="title">
        {tasks.map((tasks)=>(
            <TodoList
            id = {tasks.id}
            key = {tasks.id}
            completed = {tasks.data.completed}
            title = {tasks.data.title}
            description = {tasks.data.description}
            />
          ))}
          {/* <TodoList
            id={1}
            title="READ A BOOK"
            description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
            completed={false}
          />
          <TodoList
            id={2}
            title="COMPLETE A REACT BUILD"
            description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
            completed={false}
          /> */}
        </div>
      </div>

      {openAddModal && (
        <AddTodo onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
    </div>
  );
}

export default Title;
