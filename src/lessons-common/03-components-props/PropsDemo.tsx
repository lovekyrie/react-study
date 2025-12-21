import React from 'react';

// Child Component
function Welcome(props: { name: string; role?: string }) {
  return (
    <li className="p-2 bg-white rounded shadow-sm border">
      Hello, <strong>{props.name}</strong> 
      {props.role && <span className="text-xs ml-2 bg-blue-100 text-blue-800 px-2 py-0.5 rounded">{props.role}</span>}
    </li>
  );
}

// Parent Component
export default function PropsDemo() {
  return (
    <div className="p-4 border rounded shadow-sm bg-gray-50">
      <h2 className="text-xl font-bold mb-4">3. Components and Props</h2>
      <p className="mb-2">Composing components:</p>
      <ul className="space-y-2">
        <Welcome name="Sara" />
        <Welcome name="Cahal" role="Admin" />
        <Welcome name="Edite" role="Editor" />
      </ul>
    </div>
  );
}

