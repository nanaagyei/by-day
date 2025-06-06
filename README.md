# ByDay - Professional Services Marketplace

<div align="center">
  <img src="/public/images/by-day-icon.png" alt="ByDay Logo" width="120" height="120" />
  
  **Professional Services, On Demand**
  
  *Connect with skilled professionals in your area for immediate assistance or schedule services in advance.*
  
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
  [![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk)](https://clerk.com/)
</div>

---

## 🚀 About ByDay

ByDay is a comprehensive service marketplace platform that bridges the gap between service seekers (clients) and service providers (professionals). Our platform enables users to find, book, and manage professional services across multiple categories with ease and confidence.

### 🎯 Mission Statement

To democratize access to professional services by creating a trusted, efficient, and user-friendly platform that connects skilled professionals with clients who need their expertise.

### 🏢 Company Overview

- **Founded**: 2024
- **Headquarters**: Tech District, CA 94105, United States
- **Industry**: Digital Marketplace / On-Demand Services
- **Focus**: Local service professionals and skilled trades

---

## ✨ Key Features

### 🔍 **Service Discovery**

- **8 Major Categories**: Home, Construction, Technology, Creative, Automotive, Wellness, Hospitality, Security
- **50+ Specialized Services**: From plumbing to web development, massage therapy to cybersecurity
- **Location-Based Matching**: Find professionals near you using advanced geolocation
- **Interactive Service Browser**: Organized tabs and cards for easy navigation

### 👥 **User Management**

- **Dual User Types**: Clients (service seekers) and Professionals (service providers)
- **Secure Authentication**: Powered by Clerk with social login options
- **Profile Setup Wizard**: Guided onboarding for both user types
- **User Type Detection**: Automatic dashboard routing based on user role

### 🗺️ **Map Integration**

- **Google Maps Integration**: Real-time location services
- **Service Provider Mapping**: Visual representation of nearby professionals
- **Distance Calculation**: Accurate distance measurements and service radius
- **Interactive Markers**: Clickable markers with service provider information

### 📱 **Dashboard Features**

- **Client Dashboard**: Service booking, history, favorites, and account management
- **Professional Dashboard**: Job management, earnings tracking, availability settings
- **Responsive Design**: Seamless experience across all devices
- **Real-time Updates**: Live booking status and communication

### 🎨 **Visual Experience**

- **Hero Slideshow**: Rotating showcase of professional categories
- **Modern UI/UX**: Clean, intuitive interface with consistent branding
- **Dark/Light Mode**: User preference-based theme switching
- **Accessibility**: WCAG compliant design with proper contrast and navigation

### 🛡️ **Trust & Safety**

- **Professional Verification**: Background checks and skill assessments
- **Rating & Review System**: Community-driven quality assurance
- **Dispute Resolution**: Comprehensive mediation process
- **Secure Payments**: Escrow system with multiple payment options

---

## 🛠️ Technology Stack

### **Frontend**

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Maps**: Google Maps JavaScript API / @react-google-maps/api

### **Authentication**

- **Provider**: Clerk
- **Features**: Social login, user management, role-based access

### **Deployment**

- **Platform**: Vercel (recommended)
- **Environment**: Node.js 18+
- **Package Manager**: npm/yarn/pnpm

### **Development Tools**

- **Linting**: ESLint
- **Formatting**: Prettier (implied)
- **Type Checking**: TypeScript strict mode

---

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager
- Git for version control

### 1. Clone the Repository

```bash
git clone https://github.com/nanaagyei/byday.git
cd byday
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Application URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/setup-profile
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/setup-profile
```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
byday/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── clients/                  # Client-specific pages
│   │   └── dashboard/
│   ├── professionals/            # Professional-specific pages
│   │   └── dashboard/
│   ├── services/                 # Service browsing
│   ├── contact/                  # Contact page
│   ├── privacy/                  # Privacy policy
│   ├── terms/                    # Terms of service
│   ├── dispute/                  # Dispute resolution
│   ├── setup-profile/            # Profile setup wizard
│   ├── globals.css               # Global styles & CSS variables
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # Reusable React components
│   ├── ui/                       # shadcn/ui components
│   ├── header.tsx                # Navigation header
│   ├── footer.tsx                # Site footer
│   ├── hero-slideshow.tsx        # Hero section slideshow
│   ├── category-section.tsx      # Service categories
│   ├── how-it-works.tsx          # Process explanation
│   └── testimonial-section.tsx   # Customer testimonials
├── lib/                          # Utility functions
├── public/                       # Static assets
│   └── images/
├── types/                        # TypeScript type definitions
├── middleware.ts                 # Clerk middleware
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
├── tailwind.config.js            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

---

## 🎯 Usage Guide

### For Clients (Service Seekers)

1. **Sign Up**: Create an account and select "Client" during profile setup
2. **Browse Services**: Navigate through service categories or use search
3. **Find Professionals**: Use the map view to locate nearby service providers
4. **Book Services**: Select a professional and schedule your service
5. **Manage Bookings**: Track your appointments through the client dashboard
6. **Leave Reviews**: Rate and review completed services

### For Professionals (Service Providers)

1. **Registration**: Sign up and complete professional verification
2. **Profile Setup**: Add your skills, certifications, and service areas
3. **Manage Availability**: Set your working hours and service radius
4. **Accept Bookings**: Receive and respond to service requests
5. **Track Earnings**: Monitor your income through the professional dashboard
6. **Build Reputation**: Deliver quality service to earn positive reviews

---

## 🏗️ Service Categories

### 🏠 **Home Services**

- Plumbing & Pipefitting
- Electrical Installation
- HVAC & Refrigeration
- Solar Panel Installation
- Generator Services

### 🔨 **Construction**

- Masonry & Bricklaying
- Tiling & Flooring
- Roofing & Waterproofing
- Interior Plastering
- Landscaping

### 💻 **Technology**

- Computer Repair
- Phone Repair
- Web Development
- Digital Marketing
- Cybersecurity

### 🎨 **Creative Services**

- Graphic Design
- Photography
- Video Production
- Interior Design
- Fashion Design

### 🚗 **Automotive**

- Auto Repair
- Auto Body Work
- Welding Services
- Heavy Equipment

### 💆 **Wellness**

- Massage Therapy
- Fitness Training
- Hair & Beauty
- Physiotherapy

### 🍽️ **Hospitality**

- Catering Services
- Event Planning
- Cleaning Services
- Personal Chef

### 🛡️ **Security**

- Security Guards
- Home Security Installation
- Cybersecurity Consulting

---

## 🎨 Design System

### Color Palette

- **Primary**: Bright Blue (`221.2 83.2% 53.3%`)
- **Light Mode**: Clean whites and grays
- **Dark Mode**: Black/dark gray theme with high contrast

### Typography

- **Font Family**: Inter (system fonts fallback)
- **Headings**: Bold, clear hierarchy
- **Body Text**: Readable with proper line height

### Components

- **shadcn/ui**: Consistent, accessible component library
- **Responsive Design**: Mobile-first approach
- **Interactive Elements**: Smooth transitions and hover states

---

## 🔒 Security & Privacy

### Data Protection

- **GDPR Compliant**: Comprehensive privacy policy
- **Secure Authentication**: Clerk-powered user management
- **Data Encryption**: End-to-end encryption for sensitive information
- **Payment Security**: PCI-compliant payment processing

### User Verification

- **Background Checks**: Professional verification process
- **Identity Verification**: Document validation for service providers
- **Continuous Monitoring**: Ongoing quality assurance

---

## 🤝 Support & Dispute Resolution

### Customer Support

- **Email**: support@byday.com
- **Phone**: +1 (800) BYDAY-1
- **Live Chat**: Available in-app
- **Emergency Line**: +1 (800) URGENT-1

### Dispute Resolution Process

1. **Submit Dispute**: Detailed form with evidence upload
2. **Review & Contact**: 24-48 hour response time
3. **Mediation**: Professional mediation service
4. **Resolution**: Implementation within 5-7 days

### Business Hours

- **Monday-Friday**: 8:00 AM - 8:00 PM EST
- **Saturday**: 10:00 AM - 6:00 PM EST
- **Sunday**: 12:00 PM - 5:00 PM EST
- **Emergency Support**: 24/7 for critical issues

---

## 📈 Development Roadmap

### Current Version (v1.0)

- ✅ Core marketplace functionality
- ✅ User authentication and profiles
- ✅ Service browsing and categorization
- ✅ Google Maps integration
- ✅ Basic dashboard features

### Upcoming Features (v1.1)

- 🔄 Real-time messaging system
- 🔄 Advanced booking calendar
- 🔄 Payment processing integration
- 🔄 Push notifications
- 🔄 Mobile app development

### Future Enhancements (v2.0)

- 📅 AI-powered service recommendations
- 📅 Video consultation features
- 📅 Advanced analytics dashboard
- 📅 Multi-language support
- 📅 Franchise/multi-location support

---

## 🤝 Contributing

We welcome contributions from the developer community! Please read our contributing guidelines before submitting pull requests.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- Follow TypeScript best practices
- Use ESLint configuration
- Maintain component documentation
- Write meaningful commit messages
- Test your changes thoroughly

---

## 📄 Legal

- **Privacy Policy**: `/privacy` - Comprehensive data protection information
- **Terms of Service**: `/terms` - Platform usage guidelines and legal framework
- **Dispute Resolution**: `/dispute` - Fair resolution process for service issues

---

## 📞 Contact Information

### Business Inquiries

- **Email**: business@byday.com
- **Phone**: +1 (800) BYDAY-1


### Legal & Privacy

- **Privacy**: privacy@byday.com
- **Legal**: legal@byday.com


---

## 📊 Statistics & Impact

- **Service Categories**: 8 major categories
- **Available Services**: 50+ specialized services
- **Target Audience**: Local communities and service professionals
- **Platform Focus**: Trust, quality, and user experience

---

## 🙏 Acknowledgments

- **shadcn/ui**: Beautiful and accessible component library
- **Clerk**: Robust authentication and user management
- **Vercel**: Seamless deployment and hosting
- **Google Maps**: Location-based service discovery
- **Lucide**: Clean and consistent iconography
- **Tailwind CSS**: Utility-first styling framework

---

<div align="center">
  <p><strong>ByDay - Connecting Communities Through Professional Services</strong></p>
  <p>© 2024 ByDay. All rights reserved.</p>
  
  [Website](https://bydayjobs.com) • [Support](mailto:support@byday.com) • [Privacy](https://bydayjobs.com/privacy) • [Terms](https://bydayjobs.com/terms)
</div>
