import { useReducer, useState } from "react";

type Todo = {
  id: number;
  title: string;
  done: boolean;
};

type State = {
  todos: Todo[];
  selectedId: number;
};

type Action =
  | { type: 'add'; title: string }
  | { type: 'toggle'; id: number }
  | { type: 'rename'; id: number; title: string }
  | { type: 'clearDone' };

const initialState: State = {
  selectedId: 1,
  todos: [
    { id: 1, title: '拆分 reducer action', done: true },
    { id: 2, title: '用 draft 写嵌套状态更新', done: false },
    { id: 3, title: '保持 reducer 返回新对象', done: false },
  ],
};

function produce<T>(state: T, recipe: (draft: T) => void): T {
  const draft = structuredClone(state);
  recipe(draft);
  return draft;
}

function reducer(state: State, action: Action): State {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'add': {
        const nextId = Math.max(0, ...draft.todos.map((todo) => todo.id)) + 1;
        draft.todos.push({ id: nextId, title: action.title, done: false });
        draft.selectedId = nextId;
        break;
      }
      case 'toggle': {
        const todo = draft.todos.find((item) => item.id === action.id);
        if (todo) {
          todo.done = !todo.done;
          draft.selectedId = todo.id;
        }
        break;
      }
      case 'rename': {
        const todo = draft.todos.find((item) => item.id === action.id);
        if (todo) {
          todo.title = action.title;
        }
        break;
      }
      case 'clearDone': {
        draft.todos = draft.todos.filter((todo) => !todo.done);
        draft.selectedId = draft.todos[0]?.id ?? 0;
        break;
      }
      default:
        break;
    }
  });
}

export default function UseReducerImmerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [title, setTitle] = useState('');

  const activeTodo = state.todos.find((todo) => todo.id === state.selectedId);
  const doneCount = state.todos.filter((todo) => todo.done).length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2 text-2xl font-bold">useReducer + immer</h2>
        <p className="text-sm text-gray-500">
          用 draft 风格描述复杂状态更新，reducer 仍然保持纯函数和不可变返回。
        </p>
      </div>

      <form
        className="flex flex-col gap-3 md:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          const nextTitle = title.trim();
          if (!nextTitle) return;
          dispatch({ type: 'add', title: nextTitle });
          setTitle('');
        }}
      >
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="新增任务"
        />
        <button type="submit">Add Todo</button>
      </form>

      <div className="grid gap-4 md:grid-cols-[1fr_220px]">
        <ul className="space-y-3">
          {state.todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between gap-3 rounded-lg border p-3"
            >
              <label className="flex min-w-0 flex-1 items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => dispatch({ type: 'toggle', id: todo.id })}
                />
                <span className={todo.done ? 'line-through opacity-70' : ''}>{todo.title}</span>
              </label>
              <button
                type="button"
                onClick={() => dispatch({ type: 'rename', id: todo.id, title: `${todo.title} *` })}
              >
                Rename
              </button>
            </li>
          ))}
        </ul>

        <aside className="rounded-lg border p-4">
          <h3 className="mb-3 font-bold">State Snapshot</h3>
          <p>Total: {state.todos.length}</p>
          <p>Done: {doneCount}</p>
          <p>Active: {activeTodo?.title ?? 'None'}</p>
          <button
            type="button"
            className="mt-4"
            onClick={() => dispatch({ type: 'clearDone' })}
          >
            Clear Done
          </button>
        </aside>
      </div>

      <code className="block">
        draft.todos.push(...) / todo.done = !todo.done
      </code>
    </div>
  );
}
