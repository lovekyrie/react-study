import React, { ReactNode } from 'react';

// A generic "Box" component (Composition)
function FancyBorder(props: { color: string, children: ReactNode }) {
  return (
    <div className={'border-4 rounded-xl p-4 mb-4 ' + (
      props.color === 'blue' ? 'border-blue-500' : 'border-pink-500'
    )}>
      {props.children}
    </div>
  );
}

function Dialog(props: { title: string, message: string, children?: ReactNode }) {
  return (
    <FancyBorder color="blue">
      <h1 className="text-2xl font-bold mb-2">{props.title}</h1>
      <p className="text-gray-600 mb-4">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

export default function CompositionDemo() {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-4">10. Composition vs Inheritance</h2>
      
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!"
      />

      <Dialog
        title="Mars Exploration"
        message="How should we refer to you?"
      >
        {/* Specialization via composition */}
        <div className="flex gap-2">
          <input className="border p-1 rounded" placeholder="Your name" />
          <button className="bg-blue-500 text-white px-3 py-1 rounded">
            Sign Up
          </button>
        </div>
      </Dialog>
    </div>
  );
}

