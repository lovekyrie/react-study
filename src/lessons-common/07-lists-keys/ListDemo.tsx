import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

export default function ListDemo() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build an App' },
    { id: 3, text: 'Deploy to production' },
  ]);

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-4">7. Lists and Keys</h2>
      <p className="mb-2 text-sm text-gray-500">Using 'key' helps React identify changes.</p>
      
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li 
            key={todo.id} 
            className="flex justify-between items-center p-2 bg-white border rounded shadow-sm"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 text-sm font-bold px-2 hover:bg-red-50 rounded"
            >
              X
            </button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && <p className="text-center text-gray-400 mt-4">All done!</p>}
    </div>
  );
}

