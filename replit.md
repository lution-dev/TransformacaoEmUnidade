# Transformação em Unidade - Landing Page

## Overview

This is a single-page marketing website for a digital book called "Transformação em Unidade" by Renata Rodrigues. The application is built as a modern landing page designed to promote and sell a 21-day transformation program book. The site features sections for benefits, book details, author information, testimonials, FAQs, and call-to-action elements that direct users to an external payment platform.

The project uses a full-stack TypeScript setup with React on the frontend and Express on the backend, though the backend currently serves minimal functionality (primarily static assets and book metadata).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for data fetching and caching

**UI Components & Styling:**
- Shadcn/ui component library (New York style variant) built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- CSS variables for theming (purple primary, turquoise secondary, lime green accent)
- Custom fonts: Montserrat (headings), Open Sans (body), Playfair Display (quotes)
- Framer Motion for animations and scroll-based effects
- Responsive design with mobile-first approach

**State Management:**
- React Query for server state
- Local component state with React hooks
- No global state management library (Redux/Zustand) needed due to simple requirements

**Design Patterns:**
- Component-based architecture with reusable UI components
- Intersection Observer pattern for scroll animations via `react-intersection-observer`
- Render props and compound component patterns for UI flexibility

### Backend Architecture

**Server Framework:**
- Express.js as the HTTP server
- TypeScript for type safety
- HTTP server created via Node's `http` module

**Development Setup:**
- Vite middleware integration for hot module replacement in development
- Custom error handling middleware
- Request logging with duration tracking
- Separate development and production build processes

**API Design:**
- Minimal REST endpoints:
  - `/api/book/cover` - Serves static book cover image
  - `/api/book/details` - Returns book metadata (title, author, pricing, etc.)
- File-based static asset serving from `attached_assets` directory

### Database & Data Layer

**ORM & Database:**
- Drizzle ORM for type-safe database operations
- PostgreSQL as the database (via Neon serverless)
- WebSocket connection support for serverless PostgreSQL
- Schema defined in shared TypeScript files for type consistency

**Current Schema:**
- Users table with basic authentication fields (username, password)
- Schema validation using Zod via `drizzle-zod`
- Note: The database appears to be provisioned but minimally used in the current implementation

**Migration Strategy:**
- Drizzle Kit for schema migrations
- Configuration in `drizzle.config.ts`
- Migrations stored in `db/migrations` directory
- Force push capability for rapid development

### Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # React components (sections, UI primitives)
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utilities and configurations
│   │   └── pages/       # Page components
│   └── index.html       # Entry HTML with SEO meta tags
├── server/              # Backend Express application
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API route definitions
│   └── vite.ts          # Vite dev server integration
├── db/                  # Database configuration and seeds
├── shared/              # Shared types and schemas
└── attached_assets/     # Static assets (images, content)
```

### Build & Deployment

**Development:**
- `npm run dev` - Runs Express server with Vite middleware
- Hot module replacement for frontend changes
- TypeScript compilation checking via `tsc`

**Production:**
- Frontend: Vite builds to `dist/public`
- Backend: esbuild bundles server to `dist/index.js` (ESM format)
- Static file serving in production mode
- Environment-based configuration (NODE_ENV)

### Key Architectural Decisions

**1. Minimal Backend Approach**
- **Decision:** Use Express primarily for static asset serving and minimal API endpoints
- **Rationale:** The landing page is content-focused with external payment processing, requiring minimal server-side logic
- **Tradeoff:** Database infrastructure is provisioned but underutilized; could be removed or expanded for future features

**2. Component Library Choice (Shadcn/ui)**
- **Decision:** Use Shadcn/ui with Radix UI primitives instead of pre-built component libraries
- **Rationale:** Provides flexibility to customize components while maintaining accessibility standards
- **Benefit:** Components are copied into the project, allowing full control without dependency on external package updates

**3. Animation Strategy**
- **Decision:** Framer Motion for declarative animations with scroll-triggered effects
- **Rationale:** Provides smooth, performant animations with minimal code
- **Implementation:** Custom `AnimatedElement` wrapper component for reusable scroll animations

**4. External Payment Integration**
- **Decision:** Direct users to external Hotmart/Loja Virtual payment platform
- **Rationale:** Avoids PCI compliance and payment processing complexity
- **Tradeoff:** Less control over checkout experience, reliance on external platform availability

**5. SEO & Social Media Optimization**
- **Decision:** Comprehensive Open Graph and Twitter Card meta tags in HTML
- **Rationale:** Critical for social media sharing and search engine visibility for a marketing site
- **Implementation:** Static meta tags with Portuguese language content

## External Dependencies

### Core Services

**Payment Platform:**
- Hotmart (primary) and Loja Virtual Nuvem (secondary) for payment processing
- External checkout URLs configured in `PAYMENT_LINK` constant
- No server-side payment processing

**Database:**
- Neon Serverless PostgreSQL via `@neondatabase/serverless`
- WebSocket-based connection pool
- Configured via `DATABASE_URL` environment variable

### Third-Party Libraries

**Frontend:**
- Radix UI primitives (@radix-ui/*) - Accessible component foundations
- Framer Motion - Animation library
- React Hook Form with Zod validation - Form handling (provisioned but not actively used)
- Lucide React & React Icons - Icon libraries
- date-fns - Date formatting utilities

**Development Tools:**
- Replit-specific plugins for cartographer and theme JSON support
- Runtime error overlay for development debugging
- Semgrep rules for security scanning

### Build Dependencies

- Vite with React plugin
- esbuild for server bundling
- Tailwind CSS with PostCSS for styling
- TypeScript for type checking

### Asset Dependencies

- Google Fonts API for custom typography (Montserrat, Open Sans, Playfair Display)
- Local image assets stored in `attached_assets` directory
- Favicon set with multiple formats for cross-platform support