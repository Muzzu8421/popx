import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginScreen() {
  const navigate = useNavigate()

  const [form,   setForm]   = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const update = (key, val) => {
    setForm(prev => ({ ...prev, [key]: val }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.email.trim())    e.email    = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.password.trim()) e.password = 'Password is required'
    return e
  }

  const handleLogin = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    navigate('/profile', {
      state: { user: { email: form.email, fullName: 'Marry Doe', company: 'Angelina' } },
    })
  }

  return (
    <div className="w-full min-h-[844px] bg-white flex flex-col">

      {/* Header */}
      <div className="px-6 pt-10 pb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-popx-purple text-sm font-medium mb-6 hover:opacity-70 transition-opacity"
          aria-label="Go back"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </button>

        <h1 className="text-[22px] font-bold text-popx-dark leading-snug">
          Signin to your<br />
          <span className="text-popx-purple">PopX</span> account
        </h1>
        <p className="mt-2 text-sm text-popx-grey leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 pb-10 flex flex-col gap-5">

        {/* Email */}
        <div>
          <label className="field-label">Email address</label>
          <input
            className="input-field"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={e => update('email', e.target.value)}
          />
          {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
        </div>

        {/* Password */}
        <div>
          <label className="field-label">Password</label>
          <input
            className="input-field"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={e => update('password', e.target.value)}
          />
          {errors.password && <span className="text-red-500 text-xs mt-1 block">{errors.password}</span>}
        </div>

        {/* Forgot */}
        <div className="flex justify-end -mt-2">
          <button className="text-xs text-popx-purple font-medium hover:underline">
            Forgot password?
          </button>
        </div>

        {/* Login */}
        <button className="btn-primary mt-1" onClick={handleLogin}>
          Login
        </button>

        <p className="text-center text-xs text-popx-grey-light">
          Don't have an account?{' '}
          <button
            className="text-popx-purple font-medium hover:underline"
            onClick={() => navigate('/create-account')}
          >
            Create Account
          </button>
        </p>
      </div>
    </div>
  )
}
