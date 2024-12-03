import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Toast } from "./toast";

function Create({ setTodos }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      Toast("error", "Oops, iltimos barcha ma'lumotlarni to'ldiring!!!");
      return;
    }
    Toast("success", "Todoyingiz qo'shildi ; )");

    setTodos((prevTodos) => {
      return [
        ...(prevTodos || []),
        {
          id: Math.random(),
          title,
          description,
        },
      ];
    });

    navigate("/");
  };

  return (
    <div className="relative mx-auto my-0">
      <video
        autoPlay
        muted
        loop
        className="absolute left-0 top-0 z-0 h-[625px] w-full object-cover opacity-25 sm:h-[625px] md:h-[625px]"
      >
        <source
          src="Infinity Sign • Free Infinite Loop Motion Graphics.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 mx-auto w-full opacity-100 sm:w-[80%] md:w-[60%] lg:w-96">
        <h2 className="mb-10 text-center text-3xl font-medium sm:text-4xl md:text-5xl">
          Add New Todo
        </h2>
        <form onSubmit={handleSubmit} className="mx-5">
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

          <button className="btn btn-primary btn-block">Add</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
