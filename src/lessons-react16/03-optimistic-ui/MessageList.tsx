import React, { useState, useRef } from 'react';

// Mock API
const sendMessageApi = async (text: string) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (text.includes('error')) throw new Error('Failed to send');
  return text;
};

export default function MessageList() {
  const [messages, setMessages] = useState<string[]>([]);
  const [sending, setSending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputRef.current?.value;
    if (!text || sending) return;

    // 1. Optimistic update: Add message immediately
    const prevMessages = [...messages];
    setMessages(prev => [...prev, text + ' (Sending...)']);
    setSending(true);
    
    // Clear input
    if (inputRef.current) inputRef.current.value = '';

    try {
      // 2. Perform actual request
      await sendMessageApi(text);
      
      // 3. Success: Update message status (remove "Sending...")
      setMessages(prev => 
        prev.map(msg => msg === text + ' (Sending...)' ? text : msg)
      );
    } catch (err) {
      // 4. Error: Rollback
      setMessages(prevMessages);
      alert('Failed to send message');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Optimistic UI (Manual)</h2>
      <ul className="border p-4 rounded min-h-[100px] space-y-2">
        {messages.map((msg, i) => (
          <li key={i} className="bg-gray-100 p-2 rounded">{msg}</li>
        ))}
        {messages.length === 0 && <li className="text-gray-400">No messages</li>}
      </ul>

      <form onSubmit={handleSend} className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          className="border p-2 rounded flex-1"
          placeholder="Type a message..."
        />
        <button 
          type="submit" 
          disabled={sending}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}

