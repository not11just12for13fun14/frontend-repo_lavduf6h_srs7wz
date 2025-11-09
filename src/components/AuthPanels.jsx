import { useState } from 'react';

function Input({ label, type = 'text', value, onChange, required, placeholder }) {
  return (
    <label className="block">
      <span className="text-sm text-gray-700">{label}{required && <span className="text-red-500">*</span>}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </label>
  );
}

function AuthPanels({ mode, onClose }) {
  const [active, setActive] = useState(mode || 'login');

  return (
    <div className="fixed inset-0 z-30 bg-black/40 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="flex border-b border-gray-200">
          {['login','register','forgot'].map((m) => (
            <button
              key={m}
              onClick={() => setActive(m)}
              className={`flex-1 py-3 text-sm font-medium capitalize ${active===m? 'text-indigo-700 border-b-2 border-indigo-600 bg-indigo-50' : 'text-gray-600'}`}
            >
              {m === 'forgot' ? 'Forgot Password' : m}
            </button>
          ))}
          <button onClick={onClose} className="px-3 text-gray-500 hover:text-gray-700">✕</button>
        </div>
        {active === 'login' && <LoginForm />}
        {active === 'register' && <RegisterForm />}
        {active === 'forgot' && <ForgotForm />}
      </div>
    </div>
  );
}

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Logging in as ${username}`);
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Sign in</h3>
      <Input label="Username" value={username} onChange={setUsername} required placeholder="jane_doe" />
      <Input label="Password" type="password" value={password} onChange={setPassword} required placeholder="••••••••" />
      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-md py-2 font-medium">Sign in</button>
      <p className="text-xs text-gray-500">By continuing you agree to our <a href="#privacy" className="underline">Privacy Policy</a>.</p>
    </form>
  );
}

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Registered ${username} (${email}) as ${role}`);
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Create account</h3>
      <Input label="Username" value={username} onChange={setUsername} required placeholder="jane_doe" />
      <Input label="Email" type="email" value={email} onChange={setEmail} required placeholder="jane@example.com" />
      <label className="block">
        <span className="text-sm text-gray-700">User Role<span className="text-red-500">*</span></span>
        <select value={role} onChange={(e)=>setRole(e.target.value)} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          <option value="user">User</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
      </label>
      <Input label="Password" type="password" value={password} onChange={setPassword} required placeholder="••••••••" />
      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-md py-2 font-medium">Create account</button>
      <p className="text-xs text-gray-500">By creating an account you agree to our <a href="#privacy" className="underline">Privacy Policy</a>.</p>
    </form>
  );
}

function ForgotForm() {
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Forgot password</h3>
      <Input label="Email" type="email" value={email} onChange={setEmail} required placeholder="jane@example.com" />
      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-md py-2 font-medium">Send reset link</button>
      <p className="text-xs text-gray-500">We’ll email you a secure link to reset your password.</p>
    </form>
  );
}

export default AuthPanels;
