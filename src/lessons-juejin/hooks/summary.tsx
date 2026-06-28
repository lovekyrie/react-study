const notes = [
  'useEffect 处理组件渲染后的副作用，依赖数组决定执行时机。',
  'useReducer 适合 action 明确、状态转换复杂的场景。',
  'useRef 保存 DOM 或可变值，更新 ref 不会触发重新渲染。',
  'useImperativeHandle 用来限制父组件通过 ref 能调用的命令式 API。',
  'useContext 解决跨层级共享数据，适合主题、用户信息、配置等稳定上下文。',
  'memo、useMemo、useCallback 都是性能工具，应在有重复渲染成本时使用。',
];

export default function HooksSummary() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2 text-2xl font-bold">Hooks 总结</h2>
        <p className="text-sm text-gray-500">
          这一组 hooks 的核心是把状态、引用、副作用、上下文和性能优化拆成清晰职责。
        </p>
      </div>

      <ol className="space-y-3">
        {notes.map((note, index) => (
          <li key={note} className="grid grid-cols-[36px_1fr] gap-3 rounded-lg border p-3">
            <span className="grid h-8 w-8 place-items-center rounded-lg border text-sm font-bold">
              {index + 1}
            </span>
            <span>{note}</span>
          </li>
        ))}
      </ol>

      <section className="rounded-lg border p-4">
        <h3 className="mb-3 font-bold">选择建议</h3>
        <p>
          先让代码正确清晰，再考虑 memo 化；先用 state 表达 UI，再用 ref 保存不参与渲染的数据。
        </p>
      </section>
    </div>
  );
}
