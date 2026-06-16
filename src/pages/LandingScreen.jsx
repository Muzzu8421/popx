import { useNavigate } from 'react-router-dom'

export default function LandingScreen() {
  const navigate = useNavigate()

  return (
    <div className="w-[375px] h-[750px] bg-[#F7F8F9] flex flex-col overflow-hidden">

      {/* Bottom white card */}
      <div className="flex flex-col justify-start items-center">

        <h1 className="text-[28px] font-medium text-[#1D2226] leading-tight">
          Welcome to PopX
        </h1>

        <p className="mt-2 text-[18px] font-normal text-[#1D2226] opacity-60 leading-snug">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>

        <div className="flex flex-col gap-3 mt-8">
          <button
            onClick={() => navigate('/create-account')}
            className="w-[335px] h-[46px] bg-[#6C25FF] text-white text-[16px] rounded-[6px]"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate('/login')}
            className="w-[335px] h-[46px] bg-[#6C25FF4B] text-[#1D2226] text-[16px] rounded-[6px]"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  )
}