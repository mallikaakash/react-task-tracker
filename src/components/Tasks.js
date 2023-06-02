import Task from "./Task";
import { useState } from "react";
const Tasks = () => {
    // const tasks = []
  const [tasks , setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th",
      reminder: true,
    },
    {
      id: 2,
      text: "School Appointment",
      day: "Feb 6th",
      reminder: true,
    },
    {
      id: 3,
      text: "Office Appointment",
      day: "Feb 7th",
      reminder: false,
    },
  ]);
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
