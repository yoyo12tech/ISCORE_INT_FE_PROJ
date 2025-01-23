// TaskManagement.js
import React, { useState } from "react";
import "./tasksMangment.css";

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]); // Store tasks
  const [showForm, setShowForm] = useState(false); // Toggle form visibility
  const [formData, setFormData] = useState({ name: "", description: "", deadline: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, { ...formData, id: Date.now() }]);
    setFormData({ name: "", description: "", deadline: "" });
    setShowForm(false);
  };

  return (
    <div className="taskManagement-container">
      <div className="taskManagement-header">
        <h1>Task Management:</h1>
        <button className="addTaskButton" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close" : "Add Task"}
        </button>
      </div>

      {showForm && (
        <form className="taskForm" onSubmit={handleAddTask}>
          <input
            type="text"
            name="name"
            placeholder="Task Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Task Description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Create Task</button>
        </form>
      )}

      <div className="tasksGrid">
        {tasks.map((task) => (
          <div className="taskCard" key={task.id}>
            <h2>{task.name}</h2>
            <p>{task.description}</p>
            <p className="taskDeadline">Deadline: {task.deadline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManagement;
