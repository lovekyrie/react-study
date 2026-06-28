import { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react";

type ProfileContextValue = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  role: string;
  toggleRole: () => void;
};

const ProfileContext = createContext<ProfileContextValue | null>(null);

function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used inside ProfileContext.Provider');
  }
  return context;
}

function ProfileEditor() {
  const { name, setName, role, toggleRole } = useProfile();

  return (
    <section className="rounded-lg border p-4">
      <h3 className="mb-3 font-bold">Editor</h3>
      <label className="mb-3 flex flex-col gap-2">
        <span>Name</span>
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <button type="button" onClick={toggleRole}>
        Toggle Role: {role}
      </button>
    </section>
  );
}

function ProfilePreview() {
  const { name, role } = useProfile();

  return (
    <section className="rounded-lg border p-4">
      <h3 className="mb-3 font-bold">Preview</h3>
      <p>
        {name || 'Unnamed'} is learning React as a <strong>{role}</strong>.
      </p>
    </section>
  );
}

export default function UseContextDemo() {
  const [name, setName] = useState('React Learner');
  const [role, setRole] = useState('student');

  const value: ProfileContextValue = {
    name,
    setName,
    role,
    toggleRole: () => setRole((current) => (current === 'student' ? 'mentor' : 'student')),
  };

  return (
    <ProfileContext.Provider value={value}>
      <div className="space-y-6">
        <div>
          <h2 className="mb-2 text-2xl font-bold">useContext</h2>
          <p className="text-sm text-gray-500">
            Provider 提供共享数据，深层组件通过 useContext 读取，避免逐层传 props。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <ProfileEditor />
          <ProfilePreview />
        </div>

        <code className="block">
          const value = useContext(ProfileContext)
        </code>
      </div>
    </ProfileContext.Provider>
  );
}
