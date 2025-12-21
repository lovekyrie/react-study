type StepTwoProps = {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
};

export function StepTwo({ value, onChange, onNext }: StepTwoProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
      className="flex flex-col gap-4 w-full max-w-sm"
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">邮箱</label>
        <input
          type="email"
          name="email"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="请输入您的邮箱"
        />
      </div>
      <button 
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer"
      >
        下一步
      </button>
    </form>
  );
}
