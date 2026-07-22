# antfu ESLint：保存格式化但不报红

> Related source: [eslint.config.js](../../../eslint.config.js)

## Meaning

`@antfu/eslint-config` 把 ESLint 当格式化工具用（不配 Prettier）。很多规则是**风格偏好**，不是 bug。

典型行为：

1. IDE 里用 `eslint.rules.customizations` 把 `style/*` 等规则设为 `severity: off`，但保留 `fixable: true` → **编辑器不报红**
2. 保存时跑 `source.fixAll.eslint` → **仍会按规则自动改格式**

因此「没报错却被改掉」是预期设计，不是配置坏了。

## In This Project

项目用：

```js
export default antfu({ react: true })
```

JSX 里 `Hello, {name}!` 被拆成多行，多半是 `style/jsx-one-expression-per-line`：每个 JSX 子节点单独一行。

不想要这种换行时，可在配置里关掉：

```js
export default antfu({
  react: true,
  rules: {
    'style/jsx-one-expression-per-line': 'off',
  },
})
```
