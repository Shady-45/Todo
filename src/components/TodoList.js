import React, { useRef, useEffect, useState } from "react";
import "../App.css";
import TodoImage from "../assets/todo-img.png";
import { BsCheckSquareFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const TodoList = () => {
  /* const [done, setDone] = useState(false); */
  const [task, setTask] = useState(" ");

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    refContainer.current.focus();
  });
  const refContainer = useRef(null);
  const changeProperty = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      const taskItems = {
        id: new Date().getTime().toString(),
        task,
        isDone: false,
      };

      setTasks((tasks) => {
        return [...tasks, taskItems];
      });
      setTask(" ");
      console.log(tasks);
    }
  };
  const delelteTodo = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const checkList = (id) => {
    const mes = (tasks.find((item) => item.id !== id).isDone = true);
    console.log(mes);
  };
  return (
    <>
      <section className="main-section">
        <main>
          <div className="heading">
            <div className="title">
              <h2>Mr Rager's </h2>
              <h3 className="text-white">To Do List</h3>
            </div>

            <p className="text-info">
              Simply add the tasks you need to complete, Mr. Rager will save it,
              and once you're done, check the box.
            </p>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <input
              className="form-input"
              type="text"
              value={task}
              ref={refContainer}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="form-submit" type="submit">
              Add
            </button>
          </form>
        </main>
        <article>
          <img className="mr-rager" src={TodoImage} alt="" />
        </article>
      </section>
      <div className="tasks-section">
        {tasks.map((taskItems) => {
          const { id, task, isDone } = taskItems;
          return (
            <article key={id} className="task">
              {isDone ? (
                <s>
                  {" "}
                  <h1 id="tas" ref={changeProperty}>
                    {task}
                  </h1>
                </s>
              ) : (
                <h1 id="tas" ref={changeProperty}>
                  {task}
                </h1>
              )}
              <p className="icon">
                <BsCheckSquareFill onClick={() => checkList(id)} />
                <MdDelete onClick={() => delelteTodo(id)} />
              </p>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
