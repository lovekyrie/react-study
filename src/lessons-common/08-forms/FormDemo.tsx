import React, { useState } from 'react'

export default function FormDemo() {
  const [formData, setFormData] = useState({
    name: '',
    flavor: 'coconut',
    isGoing: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value
    const name = target.name

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    alert(`Submitted: ${JSON.stringify(formData, null, 2)}`)
  }

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-4">8. Forms (Controlled)</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
        <div>
          <label className="block text-sm font-medium">Name:</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-1 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Favorite Flavor:</label>
          <select
            name="flavor"
            value={formData.flavor}
            onChange={handleChange}
            className="w-full border p-1 rounded"
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </div>

        <div>
          <label className="flex items-center gap-2">
            <input
              name="isGoing"
              type="checkbox"
              checked={formData.isGoing}
              onChange={handleChange}
            />
            Is going?
          </label>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  )
}
