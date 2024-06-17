import { CheckCircleIcon } from "@heroicons/react/16/solid";
import Timer from "./Timer";
import { useState } from "react";
export default function Task({
  task,
  handleComplete,
  displayTimer,
  stop,
}: any) {
  return (
    <>
      <h1 className="text-white text-5xl p-5 text-center">{task}</h1>
      {stop && <h1 className="text-white text-xl">Task Completed in</h1>}
      {displayTimer && <Timer stop={stop} />}

      <button
        onClick={handleComplete}
        className="text-white flex items-center p-2 rounded-md bg-teal-600"
      >
        <h1 className=" text-xl">Mark Done</h1>{" "}
        <CheckCircleIcon className="w-6 h-6 text-teal-300" />
      </button>
    </>
  );
}
