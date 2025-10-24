# Full-Stack Portfolio Website

## Overview

This is a modern full-stack portfolio website built for a mechanical engineering student named Yogesh R. The application features a React frontend with a Node.js/Express backend, showcasing projects, skills, education, and providing a contact form for potential employers or collaborators.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript
- **API Style**: RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL with connect-pg-simple

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Introduction with call-to-action buttons
- **About Section**: Personal information and statistics
- **Skills Section**: Technical skills with progress indicators
- **Projects Section**: Portfolio showcase with project cards
- **Education Section**: Academic background and experience timeline
- **Contact Section**: Contact form with validation and social links
- **Footer**: Additional navigation and contact information

### Backend Components
- **Contact API**: Handles contact form submissions
- **Storage Layer**: Abstracted storage interface with in-memory fallback
- **Route Management**: Centralized API route registration
- **Error Handling**: Comprehensive error middleware
- **Development Tools**: Vite integration for hot reloading

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form with validation
   - Form data validated using Zod schema
   - POST request sent to `/api/contact` endpoint
   - Data stored in PostgreSQL database
   - Success/error feedback via toast notifications

2. **Contact Retrieval**:
   - GET request to `/api/contacts` for admin purposes
   - Data retrieved from database and returned as JSON

3. **Development Workflow**:
   - Vite dev server handles frontend hot reloading
   - Express server serves API endpoints
   - Database migrations managed through Drizzle Kit

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Class Variance Authority**: Variant-based styling utility

### Data and Forms
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management
- **Zod**: Schema validation and type safety
- **Drizzle ORM**: Type-safe database operations

### Database
- **Neon Database**: Serverless PostgreSQL provider
- **PostgreSQL**: Primary database system

### Development Tools
- **Replit Integration**: Runtime error overlay and cartographer
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development Environment
- Vite dev server runs on frontend
- Express server handles API requests
- Hot module replacement for rapid development
- Environment variables for database configuration

### Production Build
1. **Frontend**: Vite builds optimized static assets
2. **Backend**: ESBuild bundles Express server
3. **Database**: Drizzle migrations ensure schema consistency
4. **Deployment**: Single process serving both static files and API

### Environment Configuration
- `NODE_ENV` determines development/production behavior
- `DATABASE_URL` required for PostgreSQL connection
- Replit-specific environment detection for tooling

The application uses a monorepo structure with shared TypeScript definitions, making it easy to maintain type safety across the full stack while keeping the codebase organized and scalable.