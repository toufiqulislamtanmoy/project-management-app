# Task Management Application

This is a task management application built using React and Ant Design, featuring state management with Zustand and drag-and-drop functionality with react-beautiful-dnd.

## Project Overview

The project consists of several components:

- **TaskList**: Displays tasks categorized into "To Do", "In Progress", and "Done" sections.
- **TaskItem**: Represents an individual task with options to update, mark as complete, and view details.
- **TaskDetails**: Modal component disp# Task Management Application

This is a task management application built using React and Ant Design, featuring state management with Zustand and drag-and-drop functionality with react-beautiful-dnd.

## Project Overview

The project consists of several components:

- **TaskList**: Displays tasks categorized into "To Do", "In Progress", and "Done" sections.
- **TaskItem**: Represents an individual task with options to update, mark as complete, and view details.
- **TaskDetails**: Modal component displaying detailed information about a task.
- **UpdateTaskForm**: Form component for updating task details.

The application fetches task data from a mock API (`http://localhost:3004/tasks`) using Axios and manages tasks' state using Zustand.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/toufiqulislamtanmoy/project-management-app/

laying detailed information about a task.
- **UpdateTaskForm**: Form component for updating task details.

The application fetches task data from a mock API (`http://localhost:3004/tasks`) using Axios and manages tasks' state using Zustand.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/toufiqulislamtanmoy/project-management-app/

2. Use the command `cd task-management-app` to navigate to the project directory.
3. Use the command `npm install` to install project dependencies.
4. Start development ser `npm run dev`
5. Start json-server `npm run server`

## Features

1. Display tasks categorized by status: "To Do", "In Progress", "Done".
2. Add new tasks with a form.
3. Update task details using a modal form.
4. Mark tasks as complete and update their status.
5. View detailed information about tasks.
6. (Note: Additional features like `filtering`and `drag-and-drop` are in progress due to external factors.)

## Technology Used 

1. ReactAnt Design (for UI components)
2. Zustand (for state management)
3. Axios (for HTTP requests)
4. react-beautiful-dnd (for drag-and-drop functionality)
5. React query for data fetching

## Additional Notes

1. Ensure the mock API server `(http://localhost:3004)` is running to fetch and update tasks.

[Visit Live website](https://project-management-app-snowy-ten.vercel.app/ "Project Management App")
