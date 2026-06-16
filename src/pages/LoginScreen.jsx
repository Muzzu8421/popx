import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginScreen() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const update = (key, val) => {
    setForm(prev => ({ ...prev, [key]: val }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.email.trim()) e.email = 'Email is required'
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
    <div className="w-[375px] min-h-[700px] bg-[#F7F8F9] flex flex-col">

      {/* Header */}
      <div className="px-5 pt-11 pb-2">
        <h1 className="text-[28px] font-medium text-[#1D2226] leading-tight">
          Signin to your<br />PopX account
        </h1>
        <p className="mt-3 text-[18px] text-[#1D2226] opacity-60 leading-snug">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>
      </div>

      {/* Form */}
      <div className="px-5 pt-8 flex flex-col gap-5">

        {/* Email */}
        <div>
          <div className="relative border border-[#CBCBCB] rounded-[6px] bg-white px-3 pt-[10px] pb-[10px]">
            <label className="absolute -top-[9px] left-3 bg-white px-1 text-[11px] font-semibold text-[#6C25FF]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={form.email}
              onChange={e => update('email', e.target.value)}
              className="w-full text-[14px] text-[#1D2226] placeholder-[#CBCBCB] bg-transparent outline-none"
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>
          )}
        </div>

        {/* Password */}
        <div>
          <div className="relative border border-[#CBCBCB] rounded-[6px] bg-white px-3 pt-[10px] pb-[10px]">
            <label className="absolute -top-[9px] left-3 bg-white px-1 text-[11px] font-semibold text-[#6C25FF]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={form.password}
              onChange={e => update('password', e.target.value)}
              className="w-full text-[14px] text-[#1D2226] placeholder-[#CBCBCB] bg-transparent outline-none"
            />
          </div>
          {errors.password && (
            <span className="text-red-500 text-xs mt-1 block">{errors.password}</span>
          )}
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full h-[46px] bg-[#C4C4C4] text-white text-[16px] font-medium rounded-[6px] mt-1"
        >
          Login
        </button>
      </div>
    </div>
  )
}