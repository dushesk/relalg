import { API_URL } from "./api.js";

export const getAllTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  console.log(response);
  if (!response.ok) {
    throw new Error('An error occurred while fetching tasks');
  }
  return response.json();
};

export const getTaskById = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the task');
  }
  return response.json();
};

export const createTask = async (task) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error('An error occurred while creating the task');
  }
  return response.json();
};

export const updateTask = async (id, task) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error('An error occurred while updating the task');
  }
  return response.json();
};

export const deleteTask = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('An error occurred while deleting the task');
  }
};
