import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS);
  const [categorySelected, setCategorySelected] = useState("All");

  const handleCategoryClicked = (category) => {
    setCategorySelected(category);
  };

  const handleDeleteTask = (taskText) => {
    setTaskList(taskList.filter((task) => task.text !== taskText));
  };

  const handleTaskFormSubmit = (newTask) => {
    if (newTask.text === "") return;
    setTaskList([...taskList, newTask]);
  };

  const displayedTasks = taskList.filter((task) => {
    if (categorySelected === "All") return true;
    return categorySelected === task.category;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategoryClicked={handleCategoryClicked}
        categorySelected={categorySelected}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={displayedTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
