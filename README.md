# React Study

这个项目用于复盘 React 16.8 Hooks 时代写法与 React 19/19.2 写法的差异。运行时使用 React 19，`lessons-react16` 目录保留的是“React 16 风格写法”，用于和 React 19 的新 API 做同主题对比。

## 运行

```bash
corepack pnpm install
corepack pnpm dev
```

常用检查：

```bash
corepack pnpm run lint
corepack pnpm run build
```

## 课程结构

- `lessons-common`: JSX、组件、事件、列表、表单、Context 等通用基础。
- `lessons-react16`: React 16.8 Hooks 时代的手动实现方式。
- `lessons-react19`: React 19 在客户端 SPA 中可直接演示的新能力。
- `lessons-juejin`: 额外学习笔记。

## React 16 vs React 19 对比

| 主题 | React 16 风格 | React 19 风格 |
| --- | --- | --- |
| 表单异步提交 | `onSubmit`、手动 `isLoading/error/success` | `form action`、`useActionState`、`useFormStatus` |
| 乐观 UI | 手动备份、插入临时状态、失败回滚 | `useOptimistic` 管理临时乐观状态 |
| 数据读取 | `useEffect` + `useState` + loading 状态 | `use()` 读取 Promise，配合 `Suspense` fallback |
| Context | `useContext()` 必须顶层调用，`<Context.Provider>` | `use(Context)` 可条件调用，`<Context>` 可直接作为 provider |
| ref 透传 | 子组件必须使用 `forwardRef` | 函数组件可直接接收 `ref` prop |
| ref 清理 | callback ref 主要接收 node/null | callback ref 可返回 cleanup 函数 |
| 非紧急异步更新 | 手动 loading 状态更常见 | `useTransition` 支持 async transition action |
| 显示/隐藏保留状态 | 条件渲染会卸载子树 | React 19.2 `Activity` 可隐藏并保留状态 |
| Effect 中读取最新值 | 常用 ref 或扩大依赖数组 | React 19.2 `useEffectEvent` 拆分响应式依赖和最新值读取 |

## 当前覆盖的升级点

- React 19: Actions、`useActionState`、`useFormStatus`、`useOptimistic`、`use()`、`ref as prop`、callback ref cleanup、`<Context>` provider 简写、async `useTransition`。
- React 19.2: `Activity`、`useEffectEvent`。
- 未在 Vite SPA 中实现的内容：Server Components、Server Actions、static APIs、`cacheSignal`、预渲染相关能力。这些更适合在 Next.js、Remix 或自定义 SSR/RSC 环境中演示。

## 版本约定

- `react` / `react-dom`: React 19.2。
- `@types/react` / `@types/react-dom`: 与 React 19 对齐，确保新 API 可以被 TypeScript 正确识别。
- `pnpm-lock.yaml` 需要提交，用于固定实际解析版本。
