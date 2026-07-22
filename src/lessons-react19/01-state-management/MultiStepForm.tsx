import { useState } from 'react'
import { Confirm } from './Confirm'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'

export function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  // 更新帮助函数，让代码更清晰
  const updateField = (field: 'name' | 'email', value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 dark:border-gray-700">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
          Lesson 1
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
          State Management & Component Splitting
        </p>

        {/* 简单的进度条 */}
        <div className="flex gap-2 mt-6 mb-2">
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-colors duration-300 ${
                i <= step ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="w-full">
        {step === 1 && (
          <StepOne
            value={formData.name}
            onChange={val => updateField('name', val)}
            onNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <StepTwo
            value={formData.email}
            onChange={val => updateField('email', val)}
            onNext={() => setStep(3)}
          />
        )}

        {step === 3 && (
          <Confirm
            name={formData.name}
            email={formData.email}
            onReset={() => {
              setStep(1)
              setFormData({ name: '', email: '' })
            }}
          />
        )}
      </div>
    </div>
  )
}
