import { memo, useCallback, useEffect, useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: 'React Docs', category: 'study', price: 0 },
  { id: 2, name: 'TypeScript Handbook', category: 'study', price: 0 },
  { id: 3, name: 'Vite Course', category: 'course', price: 49 },
  { id: 4, name: 'State Workshop', category: 'course', price: 88 },
  { id: 5, name: 'UI Patterns', category: 'book', price: 32 },
];

const ProductList = memo(function ProductList({
  items,
  onSelect,
}: {
  items: Product[];
  onSelect: (name: string) => void;
}) {
  useEffect(() => {
    console.log('ProductList rendered');
  }, [items, onSelect]);

  return (
    <section className="rounded-lg border p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="font-bold">Filtered Products</h3>
        <span className="text-sm text-gray-500">memo child</span>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between gap-3 rounded-lg border p-3">
            <span>{item.name}</span>
            <button type="button" onClick={() => onSelect(item.name)}>
              Select
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
});

export default function MemoUseMemoUseCallbackDemo() {
  const [category, setCategory] = useState('all');
  const [keyword, setKeyword] = useState('');
  const [selected, setSelected] = useState('None');
  const [count, setCount] = useState(0);

  const filteredProducts = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();
    return products.filter((product) => {
      const matchCategory = category === 'all' || product.category === category;
      const matchKeyword = product.name.toLowerCase().includes(normalizedKeyword);
      return matchCategory && matchKeyword;
    });
  }, [category, keyword]);

  const handleSelect = useCallback((name: string) => {
    setSelected(name);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2 text-2xl font-bold">memo + useMemo + useCallback</h2>
        <p className="text-sm text-gray-500">
          memo 跳过相同 props 的渲染，useMemo 缓存计算结果，useCallback 缓存函数引用。
        </p>
      </div>

      <section className="rounded-lg border p-4">
        <div className="grid gap-3 md:grid-cols-[1fr_180px_auto]">
          <input
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="Search product"
          />
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="all">All</option>
            <option value="study">Study</option>
            <option value="course">Course</option>
            <option value="book">Book</option>
          </select>
          <button type="button" onClick={() => setCount((value) => value + 1)}>
            Parent: {count}
          </button>
        </div>
        <p className="mt-3 text-sm text-gray-500">Selected: {selected}</p>
      </section>

      <ProductList items={filteredProducts} onSelect={handleSelect} />
    </div>
  );
}
