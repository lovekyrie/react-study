import { forwardRef, useImperativeHandle, useRef, useState } from "react";

type SmartInputHandle = {
  focus: () => void;
  clear: () => void;
  fill: (value: string) => void;
};

type SmartInputProps = {
  label: string;
};

const SmartInput = forwardRef<SmartInputHandle, SmartInputProps>(({ label }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
    clear() {
      setValue('');
      inputRef.current?.focus();
    },
    fill(nextValue) {
      setValue(nextValue);
      inputRef.current?.focus();
    },
  }));

  return (
    <label className="flex flex-col gap-2">
      <span>{label}</span>
      <input
        ref={inputRef}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="父组件只能调用暴露出来的方法"
      />
    </label>
  );
});

export default function ForwardRefUseImperativeHandleDemo() {
  const inputHandleRef = useRef<SmartInputHandle>(null);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2 text-2xl font-bold">forwardRef + useImperativeHandle</h2>
        <p className="text-sm text-gray-500">
          子组件把受控的命令式能力暴露给父组件，而不是直接暴露整个 DOM 节点。
        </p>
      </div>

      <section className="rounded-lg border p-4">
        <SmartInput ref={inputHandleRef} label="Smart Input" />

        <div className="mt-4 flex flex-wrap gap-3">
          <button type="button" onClick={() => inputHandleRef.current?.focus()}>
            Focus
          </button>
          <button type="button" onClick={() => inputHandleRef.current?.fill('Hello ref')}>
            Fill
          </button>
          <button type="button" onClick={() => inputHandleRef.current?.clear()}>
            Clear
          </button>
        </div>
      </section>

      <code className="block">
        useImperativeHandle(ref, () =&gt; (&#123; focus, clear, fill &#125;))
      </code>
    </div>
  );
}
