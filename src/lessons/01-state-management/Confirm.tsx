type ConfirmProps = {
  name: string;
  email: string;
  onReset: () => void;
};

export function Confirm({ name, email, onReset }: ConfirmProps) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-sm">
      <div className="flex flex-col gap-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white m-0">提交的表单</h3>
        <div className="space-y-2">
          <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span className="text-gray-500 dark:text-gray-400">姓名</span>
            <span className="font-medium text-gray-900 dark:text-white">{name}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
            <span className="text-gray-500 dark:text-gray-400">邮箱</span>
            <span className="font-medium text-gray-900 dark:text-white">{email}</span>
          </div>
        </div>
      </div>
      <button 
        onClick={onReset}
        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium cursor-pointer w-full"
      >
        重置
      </button>
    </div>
  );
}
