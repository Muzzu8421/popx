# PopX

> A modern authentication interface built with React, Vite, and Tailwind CSS

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Version](https://img.shields.io/badge/version-0.0.1-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb?logo=react)

PopX is a sleek, production-ready authentication UI component suite designed for modern web applications. It features a complete onboarding flow with landing, account creation, login, and profile management screens—all built with responsive design and real-time form validation.

**[Live Demo](#) • [Documentation](#) • [Issues](https://github.com/yourusername/popx/issues)**

## ✨ Features

- 🎨 **Modern UI Design** - Clean, minimal interface with purple accent colors
- 📱 **Fully Responsive** - Mobile-first design that works on all screen sizes
- ✅ **Form Validation** - Real-time client-side validation with helpful error messages
- 🚀 **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **Type-Safe** - React with proper component structure
- 🎭 **Multi-Page Flow** - Complete authentication workflow with routing
- 💅 **Tailwind CSS** - Utility-first styling with custom theme
- 📦 **Lightweight** - Minimal dependencies, optimized bundle size

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm or pnpm package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/popx.git
cd popx

# Install dependencies
npm install
# or with pnpm
pnpm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
popx/
├── src/
│   ├── pages/
│   │   ├── LandingScreen.jsx      # Welcome/landing page
│   │   ├── CreateAccount.jsx      # Account registration form
│   │   ├── LoginScreen.jsx        # Login form
│   │   └── ProfileScreen.jsx      # User profile display
│   ├── App.jsx                    # Main app component with routing
│   └── main.jsx                   # Application entry point
├── public/
│   └── Ellipse114.png            # Profile avatar image
├── index.html                     # HTML template
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev) | UI library |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [React Router v6](https://reactrouter.com) | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first CSS framework |
| [PostCSS](https://postcss.org) | CSS processor |

## 📖 Usage

### Available Screens

#### 1. Landing Screen (`/`)
The welcome page with call-to-action buttons for creating an account or logging in.

```jsx
import LandingScreen from './pages/LandingScreen'
```

#### 2. Create Account (`/create-account`)
Registration form with fields for:
- Full Name (required)
- Phone Number (required, validated)
- Email Address (required, validated)
- Password (required, min 6 characters)
- Company Name (optional)
- Agency Status (Yes/No)

#### 3. Login (`/login`)
Authentication form with:
- Email Address (required, validated)
- Password (required)

#### 4. Profile (`/profile`)
User profile display showing:
- Avatar with camera icon for updates
- Full Name
- Email Address
- Bio/Description

### Form Validation

The app includes client-side validation for:

- **Email**: Standard email format validation
- **Phone**: Accepts digits, spaces, dashes, parentheses (7-15 characters)
- **Password**: Minimum 6 characters required
- **Required Fields**: All marked fields enforce presence validation

```jsx
const validate = () => {
  const e = {}
  if (!form.email.trim()) e.email = 'Email is required'
  else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
  // ... more validation
  return e
}
```

### Routing

The app uses React Router for navigation:

```jsx
<Routes>
  <Route path="/" element={<LandingScreen />} />
  <Route path="/create-account" element={<CreateAccount />} />
  <Route path="/login" element={<LoginScreen />} />
  <Route path="/profile" element={<ProfileScreen />} />
  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>
```

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#6C25FF` | Buttons, labels, accents |
| Text | `#1D2226` | Primary text |
| Border | `#CBCBCB` | Input borders |
| Background | `#F7F8F9` | Page background |
| White | `#FFFFFF` | Cards, inputs |

### Typography

- **Font Family**: Rubik (Google Fonts)
- **Weights**: 400 (normal), 500 (medium), 600 (semibold)
- **Sizes**: Responsive from 11px to 28px

### Component Sizes

- **Container Width**: 375px (mobile-optimized)
- **Container Height**: 700px - 100vh (scrollable)
- **Buttons**: 46px height
- **Input Height**: 40px
- **Border Radius**: 6px

## 🔧 Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🚀 Performance

- **Vite Fast Refresh**: Instant HMR updates during development
- **Optimized Builds**: Tree-shaking and code splitting
- **Minimal Bundle**: Core dependencies only (~150KB gzipped)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋 Support

- 📖 [Documentation](#)
- 🐛 [Report a Bug](https://github.com/yourusername/popx/issues)
- 💡 [Request a Feature](https://github.com/yourusername/popx/issues)
- 💬 [Discussions](https://github.com/yourusername/popx/discussions)

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router](https://reactrouter.com/start)

## 📊 Project Status

PopX is currently in **Active Development**. The initial release (v0.1.0) is planned for Q3 2024.

### Roadmap

- [ ] Backend API integration
- [ ] Password reset flow
- [ ] Social authentication (Google, GitHub)
- [ ] Two-factor authentication
- [ ] Email verification
- [ ] User settings & preferences
- [ ] Dark mode support
- [ ] Accessibility improvements (WCAG 2.1)

## 🎯 Goals

PopX aims to be the go-to authentication UI starter for modern React applications, combining:
- Beautiful, modern design
- Production-ready code
- Developer-friendly structure
- Excellent performance
- Great documentation

---

Made with ❤️ by [Your Name/Organization]

**[⬆ Back to Top](#popx)**
