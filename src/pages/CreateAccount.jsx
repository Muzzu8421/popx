import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const [errors, setErrors] = useState({});

  const update = (key, val) => {
    setForm((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";

    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.phone))
      e.phone = "Enter a valid phone number (digits only)";

    if (!form.email.trim()) e.email = "Email address is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.password.trim()) e.password = "Password is required";
    else if (form.password.length < 6) e.password = "Minimum 6 characters";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    navigate("/profile", { state: { user: form } });
  };

  return (
    <div className="w-[375px] min-h-[700px] bg-[#F7F8F9] flex flex-col">
      {/* Scrollable form area */}
      <div className="flex-1 px-5 pt-11 pb-6 flex flex-col gap-5 overflow-y-auto">
        {/* Title */}
        <h1 className="text-[28px] font-bold text-[#1D2226] leading-tight mb-1">
          Create your
          <br />
          PopX account
        </h1>

        {/* Full Name */}
        <FloatField label="Full Name*" error={errors.fullName}>
          <input
            type="text"
            placeholder="Marry Doe"
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className="w-full text-[14px] text-[#1D2226] placeholder-[#CBCBCB] bg-transparent outline-none"
          />
        </FloatField>

        {/* Phone */}
        <FloatField label="Phone number*" error={errors.phone}>
          <input
            type="tel"
            placeholder="Marry Doe"
            value={form.phone}
            onKeyDown={(e) => {
              // Allow: backspace, delete, tab, arrows, home, end
              const allowed = [
                "Backspace",
                "Delete",
                "Tab",
                "ArrowLeft",
                "ArrowRight",
                "Home",
                "End",
              ];
              // Allow: digits, +, space, -, (, )
              if (!allowed.includes(e.key) && !/[\d+\s\-()]/.test(e.key)) {
                e.preventDefault();
              }
            }}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full text-[14px] text-[#1D2226] placeholder-[#CBCBCB] bg-transparent outline-none"
          />
        </FloatField>

        {/* Email */}
        <FloatField label="Email address*" error={errors.email}>
          <input
            type="email"
            placeholder="Marry Doe"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full text-[14px] text-[#1D2226] placeholder-[#CBCBCB] bg-transparent outline-none"
          />
        </FloatField>

        {/* Password */}
        <FloatField label="Password*" error={errors.password}>
          <input
            type="password"
            placeholder="Marry Doe"
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
            className="w-full text-[14px] text-[#1D2226] placeholder-[#CBCBCB] bg-transparent outline-none"
          />
        </FloatField>

        {/* Company */}
        <FloatField label="Company name">
          <input
            type="text"
            placeholder="Marry Doe"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            className="w-full text-[14px] text-[#1D2226] placeholder-[#CBCBCB] bg-transparent outline-none"
          />
        </FloatField>

        {/* Agency Radio */}
        <div>
          <span className="text-[12px] font-semibold text-[#6C25FF]">
            Are you an Agency?*
          </span>
          <div className="flex gap-8 mt-2">
            {["yes", "no"].map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => update("isAgency", opt)}
              >
                <span
                  className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center transition-colors ${
                    form.isAgency === opt
                      ? "border-[#6C25FF]"
                      : "border-[#CBCBCB]"
                  }`}
                >
                  {form.isAgency === opt && (
                    <span className="w-[9px] h-[9px] rounded-full bg-[#6C25FF]" />
                  )}
                </span>
                <span className="text-[14px] text-[#1D2226] capitalize">
                  {opt === "yes" ? "Yes" : "No"}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Create Account Button — pinned at bottom */}
      <div className="px-5 pb-8">
        <button
          onClick={handleSubmit}
          className="w-full h-[46px] bg-[#6C25FF] text-white text-[16px] font-medium rounded-[6px]"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

/* ── Floating label field wrapper ── */
function FloatField({ label, error, children }) {
  return (
    <div>
      <div className="relative border border-[#CBCBCB] rounded-[6px] bg-white px-3 pt-[10px] pb-[10px]">
        <label className="absolute -top-[9px] left-3 bg-white px-1 text-[11px] font-semibold text-[#6C25FF]">
          {label}
        </label>
        {children}
      </div>
      {error && (
        <span className="text-red-500 text-xs mt-1 block">{error}</span>
      )}
    </div>
  );
}
