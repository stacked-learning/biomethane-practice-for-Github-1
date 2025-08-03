# Overview

This is a full-stack web application built with React and Express.js that appears to be focused on hydrogen energy information and education. The application features a modern tech stack with TypeScript, Tailwind CSS, and shadcn/ui components for a polished user interface. The backend uses Express.js with Drizzle ORM configured for PostgreSQL, though currently implements in-memory storage for development purposes.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with React 18 using Vite as the build tool and development server. The application uses a component-based architecture with:

- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessibility and customization
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form schemas
- **TypeScript**: Full TypeScript implementation with strict type checking

## Backend Architecture
The server-side uses Express.js with a clean separation of concerns:

- **API Layer**: Express.js with middleware for JSON parsing, CORS, and request logging
- **Storage Interface**: Abstract storage interface (`IStorage`) allowing for pluggable storage implementations
- **Current Implementation**: In-memory storage (`MemStorage`) for development with user CRUD operations
- **Database Ready**: Drizzle ORM configured with PostgreSQL schema for production deployment
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Storage Solutions
The application is designed with database flexibility in mind:

- **Development**: In-memory storage using JavaScript Maps for rapid prototyping
- **Production Ready**: Drizzle ORM with PostgreSQL configuration already set up
- **Schema Management**: Shared schema definitions using Drizzle with Zod validation
- **Migrations**: Drizzle Kit configured for database schema migrations

## Authentication and Authorization
Basic user management infrastructure is in place:

- **User Schema**: Username/password based user model with UUID primary keys
- **Storage Interface**: User creation, retrieval by ID, and username lookup methods
- **Validation**: Zod schemas for input validation on user data

## Build and Development
The application uses modern build tooling optimized for both development and production:

- **Development**: Vite dev server with hot module replacement and React Fast Refresh
- **Production Build**: Optimized Vite build with esbuild for server bundling
- **Type Safety**: TypeScript compilation with strict checking across client, server, and shared code
- **Code Quality**: ESM modules throughout with proper import/export patterns

# External Dependencies

## Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **UI Components**: Radix UI primitives, Lucide React icons, shadcn/ui
- **State Management**: TanStack Query for server state, React Hook Form for forms
- **Styling**: Tailwind CSS, class-variance-authority, clsx for conditional classes
- **Utilities**: date-fns for date manipulation, Zod for validation

## Backend Dependencies
- **Server Framework**: Express.js with standard middleware
- **Database**: Drizzle ORM with PostgreSQL adapter (@neondatabase/serverless)
- **Validation**: Drizzle-Zod integration for schema validation
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution, esbuild for bundling

## Development Tools
- **Build Tools**: Vite with React plugin, esbuild for server bundling
- **Database Tools**: Drizzle Kit for migrations and schema management
- **Styling Tools**: PostCSS with Tailwind CSS and Autoprefixer
- **Replit Integration**: Vite plugins for Replit development environment