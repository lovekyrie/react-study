import React from 'react';

export default function JsxDemo() {
  const name = "React Learner";
  const element = <span>Hello, {name}!</span>;
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  function formatName(user: { firstName: string, lastName: string }) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const rawHtml = "<span>I am <strong>HTML</strong> string</span>";

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-4">1. JSX vs HTML</h2>
      <div className="space-y-4">
        <section>
          <h3 className="font-semibold border-b mb-2">Basic Syntax</h3>
          <p>Variable: {element}</p>
          <p>Function Call: Hello, {formatName(user)}!</p>
          <p>Math: 2 + 2 = {2 + 2}</p>
        </section>

        {/* New Section: Fragments */}
        <section>
          <h3 className="font-semibold border-b mb-2">Children & Fragments</h3>
          <p className="mb-2 text-sm text-gray-600">
            JSX tags may contain children. If you don't want an extra wrapping <code>&lt;div&gt;</code>, 
            use Fragments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-2 rounded">
              <p className="font-bold text-sm mb-1">Standard (Wrapped in div):</p>
              <div>
                <h4 className="font-bold">Hello!</h4>
                <p>Good to see you here.</p>
              </div>
            </div>

            <div className="border p-2 rounded">
              <p className="font-bold text-sm mb-1">Fragment (No extra node):</p>
              <React.Fragment>
                <h4 className="font-bold">Hello!</h4>
                <p>Good to see you here.</p>
              </React.Fragment>
            </div>

            <div className="border p-2 rounded md:col-span-2">
              <p className="font-bold text-sm mb-1">Short Syntax <code>&lt;&gt;...&lt;/&gt;</code>:</p>
              <>
                <h4 className="font-bold">Hello!</h4>
                <p>Good to see you here.</p>
              </>
            </div>
          </div>
        </section>

        <section className="p-4 rounded border border-yellow-200 text-sm">
          <h3 className="font-bold text-lg mb-3">Key Differences from HTML</h3>
          
          {/* 1. Class -> className */}
          <div className="mb-3">
            <p className="font-bold">1. className (instead of class):</p>
            <div className="bg-blue-100 text-blue-800 p-1 rounded">
              <code>&lt;div className="bg-blue-100"&gt;</code>
            </div>
          </div>

          {/* 2. For -> htmlFor */}
          <div className="mb-3">
            <p className="font-bold">2. htmlFor (instead of for):</p>
            <div className="flex items-center gap-2 mt-1">
              <label htmlFor="demo-input" className="cursor-pointer underline">
                Click Label to Focus Input
              </label>
              <input id="demo-input" className="border p-1 rounded" placeholder="Input" />
            </div>
            <code className="block mt-1 text-gray-500">&lt;label htmlFor="id"&gt;</code>
          </div>

          {/* 3. CamelCase Attributes */}
          <div className="mb-3">
            <p className="font-bold">3. CamelCase Attributes:</p>
            <p className="mb-1">HTML attributes like <code>onclick</code>, <code>tabindex</code> become camelCase.</p>
            <button 
              onClick={() => alert('Clicked!')} 
              tabIndex={0}
              className="bg-blue-100 px-2 py-1 text-blue-800 rounded hover:bg-blue-200"
            >
              Test onClick & tabIndex
            </button>
          </div>

          {/* 4. Style Object */}
          <div className="mb-3">
            <p className="font-bold">4. Style Prop (Object, not string):</p>
            <div style={{ color: 'red', fontWeight: 'bold', border: '1px dashed red', padding: '4px' }}>
              I am styled with an object!
            </div>
            <code className="block mt-1 text-gray-500">style=&#123;&#123; color: 'red' &#125;&#125;</code>
          </div>

          {/* 5. innerHTML */}
          <div className="mb-3">
            <p className="font-bold">5. dangerouslySetInnerHTML (instead of innerHTML):</p>
            <div 
              className="border p-1 text-blue-600"
              dangerouslySetInnerHTML={{ __html: rawHtml }} 
            />
          </div>

          {/* 6. Exceptions */}
          <div>
            <p className="font-bold">6. Exceptions (Keep original):</p>
            <ul className="list-disc pl-5">
              <li><code>aria-*</code> attributes (e.g., <code>aria-label</code>)</li>
              <li><code>data-*</code> attributes (e.g., <code>data-testid</code>)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
