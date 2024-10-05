import noTaskImg from "../assets/tasks_board_empty.jpg";
export default function NoTask() {
  return (
    <div className="notask">
      <img src={noTaskImg} alt="Tasks Image" />
      <h1>You Don't Have Any Tasks Yet!</h1>
      <button>Add a new Task</button>
    </div>
  );
}
