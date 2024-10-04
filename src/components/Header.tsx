import logoimg from "../assets/task_manager_logo.jpg";
export default function Header() {
  return (
    <header className="header">
      <img src={logoimg} alt="Task Manager Logo" className="logo" />
      <h1>Task Manager</h1>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#tasks">Tasks</a>
          </li>
          <li>
            <a href="#add-task">Add Task</a>
          </li>
          <li>
            <a href="#completed-tasks">Completed</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
