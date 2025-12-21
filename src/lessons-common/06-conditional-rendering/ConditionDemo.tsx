import React, { useState } from 'react';

function UserGreeting() {
  return <h3 className="text-green-600 font-bold">Welcome back!</h3>;
}

function GuestGreeting() {
  return <h3 className="text-gray-500">Please sign up.</h3>;
}

function Greeting({ isLoggedIn }: { isLoggedIn: boolean }) {
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default function ConditionDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(['Hello', 'React']);

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-4">6. Conditional Rendering</h2>
      
      <div className="mb-4">
        <button 
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="bg-gray-800 text-white px-3 py-1 rounded text-sm mb-2"
        >
          Toggle Login
        </button>
        {/* If-Else Logic */}
        {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
        { /* or Judge in the component */}
        <Greeting isLoggedIn={isLoggedIn} />
      </div>

      <div className="p-4 rounded border border-yellow-200">
        <h4 className="font-bold">Inbox</h4>
        {/* Logical && Operator */}
        {unreadMessages.length > 0 && (
          <p>
            You have {unreadMessages.length} unread messages.
          </p>
        )}
      </div>
      
      <button 
        onClick={() => setUnreadMessages([])}
        className="mt-2 text-sm text-blue-500 underline"
      >
        Clear messages
      </button>
    </div>
  );
}

