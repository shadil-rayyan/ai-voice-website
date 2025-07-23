# VoiceKerala AI - Landing Page Application

## Overview

This is a full-stack web application built as a modern, conversion-optimized landing page for "VoiceKerala AI" - a Malayalam-first AI Voice Agent for customer service. The application is designed to target two key personas: SMB decision-makers in Kerala seeking automated Malayalam voice support, and early-stage/seed investors evaluating regional-language AI opportunities in India.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS v3 with custom Kerala-inspired color scheme
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Development**: TSX for TypeScript execution in development
- **Session Management**: Connect-pg-simple for PostgreSQL session store
- **Database ORM**: Drizzle ORM with PostgreSQL support

### Data Storage Solutions
- **Database**: PostgreSQL (configured but ready for setup)
- **ORM**: Drizzle ORM with schema validation using Zod
- **Session Store**: PostgreSQL-backed session storage
- **Connection**: Neon Database serverless driver (@neondatabase/serverless)

## Key Components

### Landing Page Sections
1. **Navigation**: Fixed header with Kerala-inspired branding and mobile-responsive menu
2. **Hero Section**: Conversion-focused hero with dual CTAs (demo booking and investor deck)
3. **Problem-Solution**: Two-column layout presenting customer service pain points and AI solutions
4. **Video Demo**: Interactive demo section with placeholder for product showcase
5. **Market Opportunity**: Interactive market data visualization with growth projections
6. **Competitive Comparison**: Feature comparison table highlighting competitive advantages
7. **Testimonials**: Rotating testimonials with Malayalam translations
8. **Tech Stack**: Technology showcase section
9. **Lead Capture**: Contact form with investor/customer segmentation
10. **Footer**: Comprehensive footer with company information and links

### UI Component System
- **Design System**: Custom Kerala-inspired color palette with CSS variables
- **Typography**: Google Fonts (Inter for body, DM Serif Display for headings)
- **Components**: Comprehensive shadcn/ui component library including forms, dialogs, cards, etc.
- **Accessibility**: AA-compliant color contrast, keyboard navigation, ARIA labels
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Form Handling
- **Validation**: React Hook Form with Zod schema validation
- **State Management**: Local state with error handling and submission states
- **User Feedback**: Toast notifications for form submission feedback

## Data Flow

### Client-Side Flow
1. React components consume data through TanStack Query hooks
2. API requests are handled through a centralized query client
3. Form submissions are processed with validation before API calls
4. UI state is managed locally with React hooks and context

### Server-Side Flow
1. Express server handles HTTP requests with middleware for logging
2. Routes are organized in a centralized router system
3. Database operations are abstracted through a storage interface
4. Session management is handled via PostgreSQL-backed store

### Development Flow
1. Vite dev server provides hot module replacement
2. TypeScript compilation is handled by TSX in development
3. API requests are proxied through Vite middleware
4. Static assets are served with optimized caching

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack Query
- **UI Library**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, Class Variance Authority, clsx
- **Database**: Drizzle ORM, Neon Database serverless, PostgreSQL session store
- **Utilities**: Date-fns, Zod validation, Nanoid

### Development Dependencies
- **Build Tools**: Vite, esbuild for server bundling
- **TypeScript**: Full TypeScript support with strict configuration
- **Replit Integration**: Vite plugins for Replit development environment

### SEO & Performance
- **Meta Tags**: Comprehensive Open Graph and Twitter Card implementation
- **Schema.org**: Product markup for enhanced search visibility
- **Performance**: Preloaded fonts and critical assets
- **Accessibility**: WCAG AA compliance with proper semantic markup

## Deployment Strategy

### Production Build
1. Client-side assets are built with Vite to `dist/public`
2. Server code is bundled with esbuild to `dist/index.js`
3. Static files are served from the built client directory
4. Database migrations are handled through Drizzle Kit

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Production/development environment detection
- Session configuration for production deployment

### Development Workflow
1. `npm run dev` starts both client and server in development mode
2. Hot module replacement for rapid development
3. TypeScript type checking with incremental compilation
4. Database schema changes via `npm run db:push`

The application is designed for easy deployment to various platforms while maintaining development efficiency and production performance.