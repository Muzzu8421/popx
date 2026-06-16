import { useLocation } from "react-router-dom";

const DEFAULT_USER = {
  fullName: "Marry Doe",
  email: "Marry@Gmail.Com",
};

export default function ProfileScreen() {
  const { state } = useLocation();
  const user = state?.user ?? DEFAULT_USER;

  const fullName = user.fullName || DEFAULT_USER.fullName;
  const email = user.email || DEFAULT_USER.email;

  return (
    <div className="w-[375px] min-h-[700px] bg-[#F7F8F9]  flex flex-col">
      {/* ── Header ── */}
      <div className="px-5 pt-6 pb-6 flex items-center border-b bg-[#FFFFFF] border-[#EBEBEB]">
        <h2 className="text-[18px] font-normal text-[#1D2226]">
          Account Settings
        </h2>
      </div>

      {/* ── Avatar + name + email ── */}
      <div className="flex items-center bg-[#F7F8F9] gap-4 px-5 py-3">
        {/* Avatar with camera badge */}
        <div className="relative flex-shrink-0">
          <img
            src="/Ellipse114.png"
            alt={fullName}
            className="w-[72px] h-[72px] rounded-full object-cover"
          />
          {/* Camera badge */}
          <button
            className="absolute -bottom-1 -right-1 w-[24px] h-[24px] rounded-full bg-[#6C25FF] flex items-center justify-center shadow"
            aria-label="Change profile photo"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 15.2C13.7673 15.2 15.2 13.7673 15.2 12C15.2 10.2327 13.7673 8.8 12 8.8C10.2327 8.8 8.8 10.2327 8.8 12C8.8 13.7673 10.2327 15.2 12 15.2Z" />
              <path d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" />
            </svg>
          </button>
        </div>

        {/* Name & email */}
        <div>
          <p className="text-[15px] font-medium text-[#1D2226]">{fullName}</p>
          <p className="text-[14px] text-[#1D2226] mt-0.5">
            {email}
          </p>
        </div>
      </div>

      {/* ── Bio paragraph ── */}
      <div className="px-5 py-5 border-b border-dashed border-[#CBCBCB]">
        <p className="text-[14px] text-[#1D2226] font-normal leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>

      {/* ── Empty rest of screen ── */}
      <div className="flex-1" />
    </div>
  );
}
