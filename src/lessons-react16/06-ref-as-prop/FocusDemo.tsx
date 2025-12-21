import React, { useRef, forwardRef, useImperativeHandle } from 'react';

// Child component that exposes a DOM node or method
// React 16 requires forwardRef to accept a 'ref' prop
const CustomInput = forwardRef<HTMLInputElement, { label: string }>((props, ref) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-bold">{props.label}</label>
      <input 
        ref={ref}
        type="text" 
        className="border p-2 rounded" 
        placeholder="Focus me with parent button"
      />
    </div>
  );
});

// Set display name for debugging
CustomInput.displayName = 'CustomInput';

export default function FocusDemo() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // Access the DOM node directly
    inputRef.current?.focus();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Ref Forwarding (forwardRef)</h2>
      <CustomInput ref={inputRef} label="My Input" />
      <button 
        onClick={handleClick}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Focus Input
      </button>
    </div>
  );
}

