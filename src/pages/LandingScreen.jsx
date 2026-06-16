import { useNavigate } from 'react-router-dom'

/* ── Bubble data: position + size + animation class ── */
const BUBBLES = [
  { id: 1,  top: '4%',  left: '55%', size: 52, anim: 'animate-float1', opacity: 'opacity-90' },
  { id: 2,  top: '8%',  left: '20%', size: 38, anim: 'animate-float2', opacity: 'opacity-70' },
  { id: 3,  top: '13%', left: '70%', size: 44, anim: 'animate-float3', opacity: 'opacity-80' },
  { id: 4,  top: '18%', left: '38%', size: 30, anim: 'animate-float4', opacity: 'opacity-60' },
  { id: 5,  top: '24%', left: '10%', size: 56, anim: 'animate-float5', opacity: 'opacity-75' },
  { id: 6,  top: '28%', left: '78%', size: 36, anim: 'animate-float6', opacity: 'opacity-65' },
  { id: 7,  top: '33%', left: '52%', size: 24, anim: 'animate-float7', opacity: 'opacity-50' },
  { id: 8,  top: '38%', left: '25%', size: 46, anim: 'animate-float8', opacity: 'opacity-80' },
  { id: 9,  top: '42%', left: '65%', size: 34, anim: 'animate-float1', opacity: 'opacity-60' },
  { id: 10, top: '10%', left: '45%', size: 20, anim: 'animate-float3', opacity: 'opacity-40' },
  { id: 11, top: '47%', left: '8%',  size: 28, anim: 'animate-float2', opacity: 'opacity-55' },
  { id: 12, top: '3%',  left: '82%', size: 18, anim: 'animate-float5', opacity: 'opacity-35' },
]

/* Bubble shades cycle through purple palette */
const SHADES = [
  'bg-popx-bubble1',
  'bg-popx-bubble2',
  'bg-popx-bubble3',
  'bg-popx-bubble4',
  'bg-popx-bubble5',
]

export default function LandingScreen() {
  const navigate = useNavigate()

  return (
    <div className="relative w-full h-full min-h-[844px] bg-white flex flex-col">

      {/* ── Floating bubbles (upper 55% of screen) ── */}
      <div className="relative w-full" style={{ height: '52%' }}>
        {BUBBLES.map((b, i) => (
          <span
            key={b.id}
            className={`
              absolute rounded-full
              ${SHADES[i % SHADES.length]}
              ${b.anim}
              ${b.opacity}
            `}
            style={{
              top:    b.top,
              left:   b.left,
              width:  b.size,
              height: b.size,
            }}
          />
        ))}
      </div>

      {/* ── Bottom card ── */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-white px-6 pt-10 pb-12 flex flex-col gap-4"
        style={{ borderRadius: '28px 28px 0 0', boxShadow: '0 -4px 30px rgba(108,37,255,0.08)' }}
      >
        {/* Heading */}
        <div className="animate-fadeUp" style={{ animationDelay: '0.05s' }}>
          <h1 className="text-[28px] font-bold text-popx-dark leading-tight">
            Welcome to <span className="text-popx-purple">PopX</span>
          </h1>
          <p className="mt-2 text-sm text-popx-grey leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* Buttons */}
        <div
          className="flex flex-col gap-3 mt-2 animate-fadeUp"
          style={{ animationDelay: '0.15s' }}
        >
          <button
            className="btn-primary"
            onClick={() => navigate('/create-account')}
          >
            Create Account
          </button>

          <button
            className="btn-secondary"
            onClick={() => navigate('/login')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  )
}
