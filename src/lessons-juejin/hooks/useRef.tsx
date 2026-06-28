import { useRef, useState } from "react";

export default function UseRefDemo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const hiddenCountRef = useRef(0);
  const [visibleCount, setVisibleCount] = useState(0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2 text-2xl font-bold">useRef</h2>
        <p className="text-sm text-gray-500">
          useRef 可以保存 DOM 引用，也可以保存不会触发重新渲染的可变值。
        </p>
      </div>

      <section className="rounded-lg border p-4">
        <h3 className="mb-3 font-bold">DOM Ref</h3>
        <div className="flex flex-col gap-3 md:flex-row">
          <input ref={inputRef} placeholder="点击按钮会聚焦到这里" />
          <button type="button" onClick={() => inputRef.current?.focus()}>
            Focus Input
          </button>
        </div>
      </section>

      <section className="rounded-lg border p-4">
        <h3 className="mb-3 font-bold">Mutable Ref</h3>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-lg border p-3">
            <p className="text-sm text-gray-500">Ref updates</p>
            <strong>不会自动渲染</strong>
          </div>
          <div className="rounded-lg border p-3">
            <p className="text-sm text-gray-500">Synced state value</p>
            <strong>{visibleCount}</strong>
          </div>
          <div className="rounded-lg border p-3">
            <p className="text-sm text-gray-500">Ref read timing</p>
            <strong>事件中读取</strong>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              hiddenCountRef.current += 1;
            }}
          >
            Add Ref Only
          </button>
          <button type="button" onClick={() => setVisibleCount(hiddenCountRef.current)}>
            Sync To State
          </button>
        </div>
      </section>
    </div>
  );
}
