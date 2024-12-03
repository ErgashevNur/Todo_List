import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import Modal from "../components/Modal";

import { useState } from "react";

function Home({ todos, editTodo, deleteTodo }) {
  const [todo, setTodo] = useState(null);

  return (
    <div className="mx-auto my-10 max-w-5xl">
      <video
        autoPlay
        muted
        loop
        className="absolute left-0 top-16 z-0 h-full w-full object-cover opacity-25"
      >
        <source
          src="./public/Infinity Sign • Free Infinite Loop Motion Graphics.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <ul className="z-10 mx-8 grid grid-cols-1 gap-5 opacity-100 sm:grid-cols-2 lg:grid-cols-3">
        <Modal todo={todo} editTodo={editTodo} />

        {todos.map((todo) => (
          <li key={todo.id} className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{todo.title}</h2>
              <p>{todo.description.slice(0, 50)}...</p>
              <div className="card-actions justify-end">
                <div className="mt-3 flex w-full justify-between">
                  <Link to="" className="btn btn-outline btn-primary">
                    Read More...
                  </Link>

                  <button
                    className="btn btn-outline btn-error"
                    onClick={() => {
                      setTodo(todo);
                      document.getElementById("edit-todo").showModal();
                    }}
                  >
                    <MdModeEdit />
                  </button>

                  <button
                    className="btn btn-outline btn-accent"
                    onClick={() => deleteTodo(todo.id)} // Delete function
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
