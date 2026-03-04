# DukanIQ — CRM Landing Page

> A modern, fully responsive landing page for **DukanIQ** — a top-tier CRM software built exclusively for supershops in Bangladesh.

---

## 🚀 Live Preview

Open `landing.html` directly in any browser — no build tools, no dependencies, no setup required.

---

## 📸 Sections

| Section | Description |
|---|---|
| **Navbar** | Fixed glassmorphism nav with smooth scroll links and CTA buttons |
| **Hero** | Full-screen headline, subtext, CTAs, dashboard mockup, animated scroll indicator |
| **Features** | 6-card grid highlighting core CRM capabilities |
| **Why DukanIQ** | Split showcase section with product image and checklist |
| **Stats** | Animated count-up numbers (GSAP powered) |
| **Testimonials** | 3 review cards from real-world Bangladesh supershop owners |
| **CTA Banner** | Gradient call-to-action with trial and demo links |
| **Contact Form** | Fully JS-validated contact form with success state |
| **Footer** | 4-column footer with links, copyright, social icons |
| **Signature Bar** | Custom animated sub-footer — created with 💗 by Mrehmanx64 |

---

## ✨ Features

- **Pure HTML / CSS / JS** — single file, zero frameworks
- **GSAP animations** — fade-ins, slide-ins, count-up stats, scroll-triggered reveals
- **Animated scroll-down button** — bouncing dot + cascading chevron arrows
- **JS form validation** — live field-level validation with Bangladeshi phone regex
  - Required field checks
  - Email format validation
  - BD phone number format (`017XXXXXXXX`, `+8801XXXXXXXXX`)
  - 500-character message limit with live counter
  - Custom checkbox with terms agreement
  - Shake animation on invalid submit
  - Loading spinner + success state on submission
- **Responsive design** — mobile-friendly at all breakpoints
- **Dark theme** — deep dark background with purple accent system
- **Animated signature sub-footer** — sweeping shimmer, heartbeat emoji, gradient name shine, social links

---

## 🛠 Tech Stack

| Tool | Usage |
|---|---|
| HTML5 | Structure |
| CSS3 | Styling, animations, responsive layout |
| Vanilla JavaScript | Form validation, DOM interactions |
| [GSAP 3.12](https://gsap.com/) | Scroll animations, count-up, entrance effects |
| [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Trigger animations on scroll |
| [Google Fonts — Inter](https://fonts.google.com/specimen/Inter) | Typography |
| [placehold.co](https://placehold.co) | Placeholder images |

---

## 📁 File Structure

```
dukaniq-landing/
├── landing.html       # Complete single-file landing page
└── README.md          # This file
```

---

## 🏃 Getting Started

No installation needed. Just clone and open:

```bash
git clone https://github.com/YOUR_USERNAME/dukaniq-landing.git
cd dukaniq-landing
# Open landing.html in your browser
```

Or simply download `landing.html` and double-click it.

---

## 🎨 Color Palette

| Variable | Hex | Usage |
|---|---|---|
| `--bg` | `#0a0a0f` | Page background |
| `--bg2` | `#111118` | Section alternates |
| `--surface` | `#16161f` | Cards, form |
| `--accent` | `#7c5cfc` | Primary purple |
| `--accent2` | `#c084fc` | Light purple |
| `--text` | `#f0f0f5` | Body text |
| `--muted` | `#888899` | Secondary text |

---

## 📋 Form Validation Rules

| Field | Rules |
|---|---|
| Full Name | Required, min 2 characters |
| Supershop Name | Required |
| Email | Required, valid format |
| Phone | Required, valid BD number (`01[3-9]XXXXXXXX` or `+8801...`) |
| Interest | Must select an option |
| Message | Required, 10–500 characters |
| Terms checkbox | Must be checked |

---

## 🌐 Localization

- UI supports both **English** and **Bangla** content
- Testimonials include Bangla-script text
- Phone validation enforces Bangladesh number formats
- Contact info uses Dhaka address and `.com.bd` email

---

## 📱 Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| `< 900px` | Contact section stacks to single column |
| `< 768px` | Navbar links hidden, footer 2-column, showcase stacks |
| `< 540px` | Form rows stack to single column |
| `< 480px` | Footer single column |

---

## 👤 Author

**Mrehmanx64**

- Facebook: [@themunnarehman](https://fb.com/themunnarehman)
- Instagram: [@themunnarehman](https://instagram.com/themunnarehman)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> *Built with 💗 by Mrehmanx64*
