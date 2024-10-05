import logoimg from "../assets/task_manager_logo.jpg";
export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logoimg} alt="Task Manager Logo" />
      </div>

      <h1 className="title">Task Manager</h1>
      <div className="nav-buttons">
        <button>Tasks</button>
        <button>Add Tasks</button>
        <button>Completed</button>
      </div>
    </header>
  );
}
