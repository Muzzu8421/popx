import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateAccount() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    fullName:   '',
    phone:      '',
    email:      '',
    password:   '',
    company:    '',
    isAgency:   'yes',
  })

  const [errors, setErrors] = useState({})

  const update = (key, val) => {
    setForm(prev => ({ ...prev, [key]: val }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.fullName.trim())  e.fullName = 'Full name is required'
    if (!form.phone.trim())     e.phone    = 'Phone number is required'
    if (!form.email.trim())     e.email    = 'Email address is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.password.trim())  e.password = 'Password is required'
    else if (form.password.length < 6) e.password = 'Minimum 6 characters'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    navigate('/profile', { state: { user: form } })
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
          Create your<br />
          <span className="text-popx-purple">PopX</span> account
        </h1>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 pb-10 flex flex-col gap-5 overflow-y-auto">

        {/* Full Name */}
        <Field label="Full Name *" error={errors.fullName}>
          <input
            className="input-field"
            type="text"
            placeholder="Marry Doe"
            value={form.fullName}
            onChange={e => update('fullName', e.target.value)}
          />
        </Field>

        {/* Phone */}
        <Field label="Phone number *" error={errors.phone}>
          <input
            className="input-field"
            type="tel"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={e => update('phone', e.target.value)}
          />
        </Field>

        {/* Email */}
        <Field label="Email address *" error={errors.email}>
          <input
            className="input-field"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={e => update('email', e.target.value)}
          />
        </Field>

        {/* Password */}
        <Field label="Password *" error={errors.password}>
          <input
            className="input-field"
            type="password"
            placeholder="Min. 6 characters"
            value={form.password}
            onChange={e => update('password', e.target.value)}
          />
        </Field>

        {/* Company */}
        <Field label="Company name">
          <input
            className="input-field"
            type="text"
            placeholder="Your company (optional)"
            value={form.company}
            onChange={e => update('company', e.target.value)}
          />
        </Field>

        {/* Agency radio */}
        <div>
          <span className="field-label">Are you an Agency? *</span>
          <div className="flex gap-6 mt-2">
            {['yes', 'no'].map(opt => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <span
                  className={`
                    w-5 h-5 rounded-full border-2 flex items-center justify-center
                    transition-colors duration-200
                    ${form.isAgency === opt
                      ? 'border-popx-purple'
                      : 'border-popx-grey-light'}
                  `}
                  onClick={() => update('isAgency', opt)}
                >
                  {form.isAgency === opt && (
                    <span className="w-2.5 h-2.5 rounded-full bg-popx-purple" />
                  )}
                </span>
                <span className="text-sm text-popx-dark capitalize">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button className="btn-primary mt-2" onClick={handleSubmit}>
          Create Account
        </button>

        <p className="text-center text-xs text-popx-grey-light mt-1">
          Already have an account?{' '}
          <button
            className="text-popx-purple font-medium hover:underline"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  )
}

/* ── Reusable field wrapper ── */
function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="field-label">{label}</label>
      {children}
      {error && (
        <span className="text-red-500 text-xs mt-0.5">{error}</span>
      )}
    </div>
  )
}
