import { useState } from "react";
import "./App.css";
import JSConfetti from "js-confetti";
import Form from "./components/Form";
import Task from "./components/Task";

function App() {
  const congo = new JSConfetti();
  const [displayTimer, setDisplayTimer] = useState(true);
  const [stopTimer, setStopTimer] = useState(false);
  const [task, setTask] = useState("");
  const [isAcheive, setIsAcheive] = useState(false);
  const handleChange = (e: any) => {
    setTask(e.target.value);
  };
  const createTask = (e: any) => {
    e.preventDefault();
    setIsAcheive(true);
    setDisplayTimer(true);
    setStopTimer(false);
  };
  const getRemarks = () => {
    const remarks = [
      "That's great!!",
      "Awesome, Keep Growing🚀",
      "Congrats!!",
      "You Deserve a break",
      "You are awesome!",
    ];
    return remarks[Math.floor(Math.random() * (remarks.length - 1))];
  };
  const handleComplete = async () => {
    setTask(getRemarks());
    setStopTimer(true);
    await congo.addConfetti();
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        return resolve();
      }, 1300);
    });
    setDisplayTimer(false);
    setIsAcheive(false);
    setTask("");
  };
  return (
    <div className="main flex justify-center items-center min-h-screen  flex-col bg-slate-500 dark:bg-black">
      {!isAcheive && (
        <Form task={task} createTask={createTask} handleChange={handleChange} />
      )}

      {isAcheive && (
        <Task
          task={task}
          handleComplete={handleComplete}
          displayTimer={displayTimer}
          stop={stopTimer}
        />
      )}
    </div>
  );
}

export default App;
