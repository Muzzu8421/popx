import { useLocation, useNavigate } from 'react-router-dom'

/* Demo fallback data */
const DEFAULT_USER = {
  fullName: 'Marry Doe',
  email:    'marrie98@gmail.com',
  phone:    '+91 98765 43210',
  company:  'Angelina',
  isAgency: 'yes',
}

export default function ProfileScreen() {
  const { state }  = useLocation()
  const navigate   = useNavigate()
  const user       = state?.user ?? DEFAULT_USER

  const rows = [
    { label: 'Full name',     value: user.fullName  || DEFAULT_USER.fullName  },
    { label: 'Email address', value: user.email     || DEFAULT_USER.email     },
    { label: 'Phone number',  value: user.phone     || DEFAULT_USER.phone     },
    { label: 'Company name',  value: user.company   || DEFAULT_USER.company   },
    { label: 'Agency',        value: user.isAgency  ? (user.isAgency === 'yes' ? 'Yes' : 'No') : 'Yes' },
  ]

  return (
    <div className="w-full min-h-[844px] bg-white flex flex-col">

      {/* ── Top header ── */}
      <div
        className="relative w-full px-5 pt-10 pb-6 flex items-center justify-between"
        style={{ borderBottom: '1px solid #F0EEFF' }}
      >
        <button
          onClick={() => navigate(-1)}
          className="text-popx-purple hover:opacity-70 transition-opacity"
          aria-label="Go back"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <h2 className="text-base font-semibold text-popx-dark absolute left-1/2 -translate-x-1/2">
          Account Settings
        </h2>

        {/* Logout */}
        <button
          onClick={() => navigate('/')}
          className="text-xs text-red-400 font-medium hover:text-red-600 transition-colors"
        >
          Logout
        </button>
      </div>

      {/* ── Avatar section ── */}
      <div className="flex items-center gap-4 px-5 py-6" style={{ borderBottom: '1px solid #F0EEFF' }}>
        {/* Avatar with camera badge */}
        <div className="relative flex-shrink-0">
          <div
            className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-popx-purple to-popx-bubble3 flex items-center justify-center text-white text-2xl font-bold select-none"
          >
            {(user.fullName || DEFAULT_USER.fullName).charAt(0).toUpperCase()}
          </div>

          {/* Camera icon badge */}
          <button
            className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-popx-purple flex items-center justify-center shadow"
            aria-label="Change profile photo"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4" fill="none" stroke="white" strokeWidth="2"/>
            </svg>
          </button>
        </div>

        {/* Name + company */}
        <div>
          <p className="text-base font-semibold text-popx-dark">
            {user.fullName || DEFAULT_USER.fullName}
          </p>
          <p className="text-sm text-popx-grey">
            {user.email || DEFAULT_USER.email}
          </p>
        </div>
      </div>

      {/* ── Account details list ── */}
      <div className="flex-1 px-5 py-4 flex flex-col divide-y divide-[#F0EEFF]">
        {rows.map(({ label, value }) => (
          <div key={label} className="py-4">
            <p className="text-xs font-medium text-popx-purple mb-0.5">{label}</p>
            <p className="text-sm text-popx-dark font-medium">{value}</p>
          </div>
        ))}
      </div>

      {/* ── Bottom bio paragraph (like the XD "about" section) ── */}
      <div className="px-5 pb-10 pt-2">
        <p className="text-xs text-popx-grey leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation.
        </p>
      </div>
    </div>
  )
}
