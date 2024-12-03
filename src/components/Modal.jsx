import React, { useEffect } from "react";
import { useState } from "react";
import { Toast } from "../pages/toast";

function Modal({ todo, editTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      Toast("error", "Oops, iltimos barcha ma'lumotlarni to'ldiring!!!");
      return;
    }
    Toast("success", "Todoyingiz o'zgartirildi ; )");

    editTodo({
      id: todo.id,
      title,
      description,
    });
    () => document.getElementById("edit-todo").close();
  };

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [todo]);

  return (
    <>
      <dialog id="edit-todo" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            <label className="form-control mb-5 w-full">
              <div className="label">
                <span className="label-text">Title:</span>
              </div>
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full bg-transparent"
                value={title}
              />
            </label>

            <label className="form-control mb-5 w-full">
              <div className="label">
                <span className="label-text">Description:</span>
              </div>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                className="textarea textarea-primary bg-transparent"
                placeholder="Description of Todo"
                value={description}
              ></textarea>
            </label>

            <div className="modal-action">
              <button className="btn btn-primary">Submit</button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("edit-todo").close()}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Modal;
