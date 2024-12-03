import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-base-200">
      <div className="navbar mx-auto max-w-5xl">
        <div className="navbar-start">
          <Link className="btn btn-primary text-2xl font-bold" to="/">
            TODOS
          </Link>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <Link className="btn btn-success" to="/create">
            Create
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
