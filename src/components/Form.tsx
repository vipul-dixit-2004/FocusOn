import { BellAlertIcon } from "@heroicons/react/16/solid";

export default function Form({ task, handleChange, createTask }: any) {
  return (
    <>
      <h1 className="text-black dark:text-white m-5 text-3xl sm:text-6xl ">
        {task == "" ? "What you wanna Focus on?" : task}
      </h1>
      <form className="flex ring-4 rounded-md bg-white" onSubmit={createTask}>
        <input
          type="text"
          className="bg-inherit rounded-md p-2 focus:outline-none "
          value={task}
          name="task"
          onChange={handleChange}
          placeholder="Focus on"
        />
        <button
          className="bg-inherit  rounded-md p-2 focus:text-teal-800 hover:text-teal-700"
          onSubmit={createTask}
        >
          <BellAlertIcon className="h-6 w-6" />
        </button>
      </form>
    </>
  );
}
